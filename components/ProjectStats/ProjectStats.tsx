import Link from "next/link";

function ProjectStats() {
  const stats = [
    {
      title: "Projects",
      value: "380",
    },
    {
      title: "Developers",
      value: "14,784",
    },
    {
      title: "Partners",
      value: "29",
    },
    {
      title: "Countries",
      value: "102",
    },
  ];

  return (
    <section className="w-full mb-32" id="project_stats">
      <div className="container py-20 rounded-3xl bg-gradient-fade">
        <div className="w-full md:w-[80%] flex justify-center flex-col items-center m-auto gap-10 sm:gap-16">
          <div>
            <h2>
              The Blockchain Industry's{" "}
              <span className="text-gradient">OpenAI</span>
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
            ZkSync.ai has established collaborations with numerous projects
            built on the ZkSync platform, among which notable examples include
            Koi Finance, zkSync ID, Karat, and Holdstation. Moreover, it has
            forged partnerships with leading venture capital firms and
            blockchain development foundations spanning over 100 countries
            worldwide. This extensive network underscores ZkSync.ai's global
            reach and its pivotal role in advancing the adoption and innovation
            of ZkSync-based solutions across diverse sectors in blockchain
            technology.
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
