import Link from "next/link";

function ProjectStats() {
  const stats = [
    {
      title: "Performance",
      value: "100%",
    },
    {
      title: "Security",
      value: "100%",
    },
    {
      title: "Best Practices",
      value: "100%",
    },
    {
      title: "SEO",
      value: "100%",
    },
  ];

  return (
    <section className="w-full mb-32" id="project_stats">
      <div className="container py-20 rounded-3xl bg-gradient-fade">
        <div className="w-full md:w-[80%] flex justify-center flex-col items-center m-auto gap-10 sm:gap-16">
          <div>
            <h2>
              Empowering Enterprises with Digital Transformation and{" "}
              <span className="text-gradient">Global IT Support Solutions</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-0 grid-cols-2 md:flex md:divide-x divide-gray-200 w-full justify-between">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 w-full md:w-1/4"
              >
                <p>{item.title}</p>
                <h2 className="!text-3xl">{item.value}</h2>
              </div>
            ))}
          </div>
          <p className="text-center md:text-[24px] text-[18px] leading-8">
            Transforming your business processes for the digital future. We
            provide dedicated resources and staff augmentation to enterprises
            worldwide for IT support and success.
          </p>
          <button className="custom_gradient_box p-2 relative">
            <Link href="/explore" className="btn relative z-10">
              Get Started Today
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectStats;
