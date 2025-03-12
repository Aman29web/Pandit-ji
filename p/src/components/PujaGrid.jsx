const PujaGrid = () => {
    const pujaItems = [
      { title: "| शुभ विवाह |", image: "/pics/1.jpg" },
      { title: "| नारायण बलि |", image: "/pics/24.jpg" },
      { title: "| भागवत कथा |", image: "/pics/25.jpg" },
      { title: "| महाविद्या |", image: "/pics/4.jpg" },
      { title: "| लक्ष्मी पूजन |", image: "/pics/34.jpg" },
      { title: "| ऑफिस पूजा |", image: "/pics/10.jpg" },
      { title: "| सत्यनारायण पूजा |", image: "/pics/32.jpg" },
      { title: "| भूमि पूजन |", image: "/pics/8.jpg" },
      { title: "| नवग्रह शांति पूजा |", image: "/pics/23.jpg" },
      { title: "| पितृ दोष शांति पूजा |", image: "/pics/26.jpg" },
      { title: "| वास्तु पूजा |", image: "/pics/27.jpg" },
      { title: "| रुद्राभिषेक |", image: "/pics/21.jpg" },
      { title: "| लक्ष्मी नारायण पूजा |", image: "/pics/28.jpg" },
      { title: "| अखंड रामायण पाठ |", image: "/pics/29.jpg" },
      { title: "| हवन यज्ञ |", image: "/pics/11.jpg" },
      { title: "| दीवाली पूजा |", image: "/pics/31.jpg" },
    ];
  
    return (
      <section id="pooja" className="bg-[#F2C005] min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            पवित्र पूजा सेवाएँ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pujaItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-3 text-lg font-semibold text-center text-black">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PujaGrid;
  