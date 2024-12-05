// 'use client'

// import { getStoreFeedbacks } from "@/actions/storeFeedbackAction";
// import { useEffect, useState } from "react";

// export default function About() {
//   const [feedbacks, setFeedbacks] = useState([]);

//   useEffect(() => {
//     // Fetch feedback data from the API
//     const fetchStoreFeedback = async () => {
//       try {
//         const storeFeedbacks = await getStoreFeedbacks()
//         setFeedbacks(storeFeedbacks);
//       } catch (error) {
//         console.error("Error fetching feedback:", error);
//       }
//     };

//     fetchStoreFeedback();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <h1 className="text-5xl font-bold text-center text-gray-800 font-serif mb-8">
//           About Us
//         </h1>
//         <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
//           Welcome to our platform! We are dedicated to providing exceptional services
//           and creating unique experiences for our users. Our mission is to inspire, 
//           innovate, and make a positive impact in everything we do.
//         </p>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Card 1 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Our mission is to deliver value through innovation and inspire people
//               to achieve their goals.
//             </p>
//           </div>
//           {/* Card 2 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
//             <p className="text-gray-600 leading-relaxed">
//               We aim to be a global leader in delivering unique solutions with a
//               focus on sustainability and community development.
//             </p>
//           </div>
//           {/* Card 3 */}
//           <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Integrity, innovation, and inclusivity form the foundation of our
//               values and guide us in all our endeavors.
//             </p>
//           </div>
//         </div>
//         <div className="mt-16 text-center">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//             Store Feedback
//           </h2>
//           <p className="text-gray-600 max-w-xl mx-auto">
//             Hear what our users have to say about their experiences with us.
//           </p>
//         </div>
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {feedbacks.length > 0 ? (
//             feedbacks.map((feedback) => (
//               <div
//                 key={feedback._id}
//                 className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 overflow-hidden">
//                   <img
//                     src={feedback?.userId?.picture || "/placeholder.jpg"}
//                     alt={`${feedback.firstName} ${feedback.lastName}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mt-4">
//                   {feedback?.userId?.firstName} {feedback?.userId?.lastName}
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-2">"{feedback.feedback}"</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600 text-center col-span-3">
//               No feedback available at the moment.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



'use client'

import { getStoreFeedbacks } from "@/actions/storeFeedbackAction";
import { useEffect, useState } from "react";

export default function About() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchStoreFeedback = async () => {
      try {
        const storeFeedbacks = await getStoreFeedbacks();
        setFeedbacks(storeFeedbacks);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchStoreFeedback();
  }, []);

  useEffect(() => {
    const prevBtn = document.querySelector('[data-carousel-prev]');
    const nextBtn = document.querySelector('[data-carousel-next]');
    const slides = document.querySelectorAll('[data-carousel-item]');

    if (slides.length === 0) {
      console.error("No slides found!");
      return;
    }

    let currentSlideIndex = 0;

    // Show the first slide
    if (slides[currentSlideIndex]) {
      slides[currentSlideIndex].classList.remove('hidden');
    }

    // Handle next slide
    const showNextSlide = () => {
      if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('hidden');
      }
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.remove('hidden');
      }
    };

    // Handle previous slide
    const showPrevSlide = () => {
      if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('hidden');
      }
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.remove('hidden');
      }
    };

    // Add event listeners
    nextBtn?.addEventListener('click', showNextSlide);
    prevBtn?.addEventListener('click', showPrevSlide);

    return () => {
      nextBtn?.removeEventListener('click', showNextSlide);
      prevBtn?.removeEventListener('click', showPrevSlide);
    };
  }, [feedbacks]); // This effect will trigger every time the feedbacks change.

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 to-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-gray-800 font-serif mb-8">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Welcome to our platform! We are dedicated to providing exceptional services
          and creating unique experiences for our users. Our mission is to inspire,
          innovate, and make a positive impact in everything we do.
        </p>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Store Feedback</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Hear what our users have to say about their experiences with us.
          </p>
        </div>

        <div className="mt-12 relative w-full">
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Map through feedbacks and display them in carousel items */}
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback, index) => (
                <div
                  key={feedback._id}
                  className={`absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${index === 0 ? '' : 'hidden'}`}
                  data-carousel-item=""
                >
                  <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 overflow-hidden">
                      <img
                        src={feedback?.userId?.picture || "/placeholder.jpg"}
                        alt={`${feedback.userId.firstName} ${feedback.userId.lastName}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">
                      {feedback?.userId?.firstName} {feedback?.userId?.lastName}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">"{feedback.feedback}"</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center col-span-3">
                No feedback available at the moment.
              </p>
            )}
          </div>

          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
