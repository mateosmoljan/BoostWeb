import Link from "next/link";

function ProjectStats() {
  const stats = [
    {
      title: "Projects",
      value: "100",
    },
    {
      title: "Users",
      value: "100",
    },
    {
      title: "Partners",
      value: "100",
    },
    {
      title: "Countries",
      value: "100",
    },
  ];

  return (
    <section className="w-full" id="project_stats">
      <div className="container py-20 rounded-3xl bg-gradient-fade">
        <div className="w-full md:w-[80%] flex justify-center flex-col items-center m-auto gap-10 sm:gap-16">
          <div>
            <h2>
              The blockchain industry's{" "}
              <span className="text-gradient">Skunk Works</span>
            </h2>
          </div>
          <div className="flex divide-x divide-gray-200 w-full justify-between">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 w-1/2 md:w-1/4"
              >
                <p>{item.title}</p>
                <h2 className="!text-3xl">{item.value}</h2>
              </div>
            ))}
          </div>
          <p className="text-center md:text-[24px] text-[18px] leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            earum sed quaerat eaque veritatis aspernatur laboriosam! Fugit
            nesciunt voluptates, quisquam sit, temporibus qui accusantium velit
            ullam tempore iure adipisci. Sit!
          </p>
          <button className="custom_gradient_box p-2 relative">
            <Link href="/explore" className="btn relative z-10">
              Visit Product
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectStats;
