// // // // // @/components/CategoryChips/CategoryChips.js

// // // // import { Button } from "@/components/ui/button";

// // // // const CategoryChips = ({ categories, onCategoryClick }) => {
// // // //   // Check if categories is an array
// // // //   if (!Array.isArray(categories)) {
// // // //     return <div>Error: categories is not an array.</div>;
// // // //   }

// // // //   return (
// // // //     <div className="flex flex-wrap gap-2">
// // // //       {categories.map((category) => (
// // // //         <Button className="inline-block text-normal bg-gray-200 text-gray-700 px-3 py-1 border-gray-200 mb-2 hover:bg-gray-300"
// // // //           key={category._id}
// // // //           onClick={() => onCategoryClick(category)}
// // // //         >
// // // //           {category.title}
// // // //         </Button>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CategoryChips;





// // import { Button } from "@/components/ui/button";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/swiper-bundle.min.css"; // Import Swiper styles
// // import "swiper/css/navigation"; // Import Swiper navigation styles

// // // Import necessary Swiper modules
// // import { Navigation } from "swiper";
// // import { useRef } from "react";

// // const CategoryChips = ({ categories, onCategoryClick }) => {
// //   // Check if categories is an array
// //   if (!Array.isArray(categories)) {
// //     return <div>Error: categories is not an array.</div>;
// //   }

// //   // Create references for navigation buttons
// //   const prevRef = useRef(null);
// //   const nextRef = useRef(null);

// //   return (
// //     <div className="relative mb-6">
// //       <Swiper
// //         spaceBetween={10} // Adjust space between slides
// //         slidesPerView="auto" // Allow slides to take auto width
// //         loop={true} // Enable looping of slides
// //         navigation={{
// //           prevEl: prevRef.current, // Use ref for previous button
// //           nextEl: nextRef.current, // Use ref for next button
// //         }} // Custom navigation arrows
// //         modules={[Navigation]} // Import Navigation module
// //         breakpoints={{
// //           320: { slidesPerView: 3 }, // For small screens, show 3 categories
// //           640: { slidesPerView: 5 }, // For medium screens, show 5 categories
// //           1024: { slidesPerView: 7 }, // For larger screens, show 7 categories
// //         }}
// //       >
// //         {categories.map((category) => (
// //           <SwiperSlide key={category._id} className="w-auto mx-10">
// //             <Button
// //               className="inline-block text-gray-800 bg-gray-200 hover:bg-gray-300 transition-all duration-200 px-4 py-2 rounded-lg shadow-md mb-2 transform hover:scale-105"
// //               onClick={() => onCategoryClick(category)}
// //             >
// //               {category.title}
// //             </Button>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>

// //       {/* Custom navigation buttons with refs */}
// //       <div
// //         ref={prevRef}
// //         className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-900 transition-all duration-300"
// //       >
// //         <i className="fas fa-chevron-left"></i>
// //       </div>
// //       <div
// //         ref={nextRef}
// //         className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-900 transition-all duration-300"
// //       >
// //         <i className="sm fas fa-chevron-right"></i>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryChips;




// import { Button } from "@/components/ui/button";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/css/navigation";

// import { Navigation } from "swiper";
// import { useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const CategoryChips = ({ categories, onCategoryClick }) => {
//   if (!Array.isArray(categories)) {
//     return <div>Error: categories is not an array.</div>;
//   }

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="relative mb-6 w-full max-w-screen-lg mx-auto">
//       <Swiper
//         spaceBetween={15}
//         slidesPerView="auto"
//         loop={true}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         modules={[Navigation]}
//         breakpoints={{
//           320: { slidesPerView: 3 },
//           640: { slidesPerView: 5 },
//           1024: { slidesPerView: 7 },
//         }}
//         onInit={(swiper) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//           swiper.navigation.init();
//           swiper.navigation.update();
//         }}
//       >
//         {categories.map((category) => (
//           <SwiperSlide key={category._id} className="w-auto">
//             <Button
//               className="text-gray-800 bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 mx-2"
//               onClick={() => onCategoryClick(category)}
//             >
//               {category.title}
//             </Button>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom navigation buttons */}
//       <div
//         ref={prevRef}
//         className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-900 transition-all duration-300 z-10"
//       >
//         <FaChevronLeft className="w-5 h-5" />
//       </div>
//       <div
//         ref={nextRef}
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-900 transition-all duration-300 z-10"
//       >
//         <FaChevronRight className="w-5 h-5" />
//       </div>
//     </div>
//   );
// };

// export default CategoryChips;










import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryChips = ({ categories, onCategoryClick }) => {
  if (!Array.isArray(categories)) {
    return <div>Error: categories is not an array.</div>;
  }

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative mb-6 w-full max-w-screen-lg mx-auto">
      <Swiper
        spaceBetween={15} // Consistent space between slides
        slidesPerView={5} // Set a specific number of slides
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 10 }, // For small screens
          640: { slidesPerView: 5, spaceBetween: 15 }, // For medium screens
          1024: { slidesPerView: 7, spaceBetween: 20 }, // For larger screens
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category._id} className="w-auto flex justify-center">
            <Button
              className="text-gray-800 bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
              onClick={() => onCategoryClick(category)}
            >
              {category.title}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div
        ref={prevRef}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-900 transition-all duration-300 z-10"
      >
        <FaChevronLeft className="w-5 h-5" />
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-900 transition-all duration-300 z-10"
      >
        <FaChevronRight className="w-5 h-5" />
      </div>
    </div>
  );
};

export default CategoryChips;
