const services = [
  {
    id: "01",
    color: "text-greenish",
    border: "border-greenish-200",
    title: "Web Development",
    description:
      "Crafting visually stunning and user-friendly websites tailoring to the needs of the client",
  },
  {
    id: "02",
    color: "text-orangish",
    border: "border-orangish-200",
    title: "SEO",
    description: "Making sites rank top on search engines",
  },
  {
    id: "03",
    color: "text-bluish",
    border: "border-bluish-200",
    title: "Network Deployment",
    description: "Installation of Local Area Networks within any organization",
  },
  {
    id: "04",
    color: "text-pinkish",
    border: "border-pinkish-200",
    title: "BPA",
    description:
      "Computerizing processes in any business using technology for faster and easier operations",
  },
  {
    id: "05",
    color: "text-purplish",
    border: "border-purplish-200",
    title: "Data Analysis",
    description:
      "Analysis and visualization of data for insights and informed decisions to boost growth",
  },
  {
    id: "06",
    color: "text-yellowish",
    border: "border-yellowish-200",
    title: "Computer Training",
    description:
      "Tutoring newbies in the art and science behind the web and technology generally",
  },
];

const COLORS_TOP = [
  "#00cccc",
  "#FF9913",
  "#1E67C6",
  "#DD335C",
  "#CE84CF",
  "#dddd55",
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
            <div key={service.id} className={"mb:-16 flex items-start"}>
              <div className={`font-bold text-5xl mr-6 ${service.color}`}>
                {service.id}
              </div>
              <div className={`border-2 ${service.border} my-1 p-2`}>
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
