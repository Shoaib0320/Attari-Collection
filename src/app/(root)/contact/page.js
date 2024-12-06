
// export default async function Contact(){
//     return(
//         <div>
//                 <h1 className="text-3xl text-center font-serif my-20">Contact Us</h1>
//         </div>    
//     )
// }


export default async function Contact() {
    return (
      <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
  
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-600 text-center mb-8">
            Have questions? We'd love to hear from you! Please fill out the form below.
          </p>
  
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-700 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
  
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-700 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-700 focus:outline-none"
                placeholder="Write your message here"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full mt-4 py-3 px-6 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-300 hover:text-black focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  