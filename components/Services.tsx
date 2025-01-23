const services = [
  {
    id: "01",
    color: "text-greenish",
    title: "Web Development",
    description:
      "Crafting visually stunning and user-friendly websites tailoring to the needs of the client",
  },
  {
    id: "02",
    color: "text-orangish",
    title: "SEO",
    description: "Making sites rank top on search engines",
  },
  {
    id: "03",
    color: "text-bluish",
    title: "Network Deployment",
    description: "Installation of Local Area Networks within any organization",
  },
  {
    id: "04",
    color: "text-pinkish",
    title: "BPA",
    description:
      "Computerizing processes in any business using technology for faster and easier operations",
  },
  {
    id: "05",
    color: "text-purplish",
    title: "Data Analysis",
    description:
      "Analysis and visualization of data for insights and informed decisions to boost growth",
  },
  {
    id: "06",
    color: "text-yellowish",
    title: "Computer Training",
    description:
      "Tutoring newbies in the art and science behind the web and technology generally",
  },
];

export const Services = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-5xl font-extrabold:sticky top-20">
            <span>SERVICES</span>
          </h2>
        </div>

        <div className="md:w-3/4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`mb:-16 flex items-start ${service.color}`}
            >
              <div className="text-gray-300 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div className="border-2 border-gray-200 my-1 p-2">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
