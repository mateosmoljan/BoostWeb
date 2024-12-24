import Link from "next/link";

function ProjectStats() {
  const stats = [
    {
      title: "Projects 📊",
      value: "150+",
    },
    {
      title: "Performance 🚀",
      value: "100%",
    },
    {
      title: "Revenue Generated for Our Clients 💰",
      value: "$2M+",
    },
    {
      title: "Best Practices 🔒",
      value: "100%",
    },
  ];

  return (
    <section className="w-full mb-32" id="about">
      <div className="container py-20 rounded-3xl bg-gradient-fade">
        <div className="w-full md:w-[80%] flex justify-center flex-col items-center m-auto gap-10 sm:gap-16">
          <div>
            <h2>
              <span className="text-gradient">Global</span> IT Support Solutions
            </h2>
          </div>
          <div className="grid gap-4 md:grid-0 grid-cols-2 md:flex md:divide-x divide-gray-200 w-full justify-between">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 w-full md:w-1/4"
              >
                <p className="text-center text-gray-400">{item.title}</p>
                <h2 className="!text-3xl">{item.value}</h2>
              </div>
            ))}
          </div>
          <p className="text-center md:text-[24px] text-[18px] leading-8 text-gray-400">
            Transforming your business processes for the digital future. We
            provide dedicated resources and staff augmentation to enterprises
            worldwide for IT support and success.
          </p>
          <button className="custom_gradient_box p-2 relative">
            <Link href="/contact" className="btn relative z-10">
              Get Started Today
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectStats;
