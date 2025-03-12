  import { motion } from "framer-motion";
  import { FaWhatsapp } from "react-icons/fa";

  const Hero = () => {
    return (
      <section className="bg-[#F2C005] min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/pics/17.png"
            alt="Hero Image"
            className="w-72 sm:w-80 md:w-[500px] lg:w-[500px] opacity-90 -mt-24 sm:-mt-28 md:mt-0"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-black"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            आ नो भद्राः क्रतवो यन्तु विश्वतः ।
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            किसी भी प्रकार की पूजा के लिए संपर्क करें |
          </motion.p>

          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            "पंडित रवि मिश्रा"
          </motion.p>
          

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/918808132544" 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-xl text-lg font-semibold shadow-lg hover:bg-green-600 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="mr-2 text-2xl" />
            Chat on WhatsApp
          </motion.a>
        </div>
      </section>
    );
  };

  export default Hero;
