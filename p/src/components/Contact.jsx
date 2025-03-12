const Contact = () => {
  return (
    <section id="contact-us" className="bg-[#F2C005] min-h-screen flex flex-col items-center py-12 px-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">संपर्क करें</h2>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="text-lg font-medium text-gray-800">नाम</label>
            <input 
              type="text"
              placeholder="अपना नाम लिखें"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-800">ईमेल</label>
            <input 
              type="email"
              placeholder="अपना ईमेल लिखें"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="text-lg font-medium text-gray-800">संदेश</label>
            <textarea
              placeholder="अपना संदेश लिखें..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-gray-800"
          >
            भेजें
          </button>
        </form>

        {/* WhatsApp Contact Button */}
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-900 font-medium">या हमें व्हाट्सएप पर संपर्क करें:</p>
          <a 
            href="https://wa.me/918808132544" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            📲 WhatsApp पर चैट करें
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
