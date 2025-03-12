const AboutSection = () => {
  return (
    <section id="about-us" className="bg-[#F2C005] py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-black mb-4 font-['Noto_Sans_Devanagari']">
            पंडित रवि मिश्रा - वाराणसी
          </h2>
          <p className="text-[19px] text-gray-900 leading-loose font-['Noto_Sans_Devanagari']">
            हम पंडित रवि मिश्रा, वाराणसी के एक <span className="font-bold">प्रतिष्ठित और अनुभवी विद्वान पुजारी</span> हैं, 
            जो वर्षों से धर्म और आस्था की सेवा में समर्पित हैं। <span className="font-bold">वेद, पुराण, ज्योतिष, 
            और हिंदू शास्त्रों</span> का गहन अध्ययन किया है और श्रद्धालुओं के लिए विभिन्न 
            धार्मिक अनुष्ठानों को विधिपूर्वक संपन्न कराते हैं।
          </p>
          <p className="mt-3 text-[19px] text-gray-900 leading-loose font-['Noto_Sans_Devanagari']">
            हमारी सेवाओं में <span className="font-bold">गृह प्रवेश, सत्यनारायण कथा, रुद्राभिषेक, नवग्रह शांति, 
            हवन-यज्ञ, वास्तु दोष निवारण, विवाह संस्कार</span> और अन्य आध्यात्मिक अनुष्ठान शामिल हैं। 
            शास्त्रों के अनुसार विधि-संगत पूजा और मंत्रोच्चारण के माध्यम से हम श्रद्धालुओं को 
            <span className="font-bold">शांति, समृद्धि और सकारात्मक ऊर्जा</span> प्रदान करने का प्रयास करते हैं।
          </p>
          <p className="mt-3 text-[19px] text-gray-900 leading-loose font-['Noto_Sans_Devanagari']">
            हमारा लक्ष्य है कि हर भक्त को <span className="font-bold">सुलभ और उचित मूल्य</span> पर शुद्ध और पारंपरिक विधियों से 
            पूजा-अर्चना का लाभ मिले। यदि आप अपने घर या कार्यालय में किसी भी धार्मिक अनुष्ठान की योजना 
            बना रहे हैं, तो हमसे संपर्क करें और अपने जीवन में <span className="font-bold">आध्यात्मिक उन्नति</span> का अनुभव करें।
          </p>
          <p className="mt-3 text-xl font-semibold text-black font-['Noto_Sans_Devanagari']">
            🙏 हर हर महादेव! 🙏
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/pics/35.jpg"
            alt="Pandit Ravi Mishra"
            className="w-72 md:w-96 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
