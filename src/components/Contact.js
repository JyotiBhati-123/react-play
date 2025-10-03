const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        We’d love to hear from you! Whether you have a question, feedback, or
        just want to say hello, feel free to reach out to us.
      </p>

      <div className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Details</h2>
        <p className="text-gray-700">📍 123 Foodie Street, Bengaluru, India</p>
        <p className="text-gray-700">📞 +91 98765 43210</p>
        <p className="text-gray-700">✉️ contact@foodiesparadise.com</p>
      </div>

      <div className="bg-gray-50 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-2"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded-lg p-2"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
