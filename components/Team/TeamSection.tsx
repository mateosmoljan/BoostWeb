import TeamComponent from "@/components/Team/TeamComponent";

function TeamSection() {
  return (
    <section className="w-full">
      <div className="container mt-40">
        <div className="flex flex-col items-center gap-2 text-center mb-10">
          <h2>
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="max-w-[400px]">
            Get to know the talented and dedicated professionals who drive our
            success
          </p>
        </div>
        <div>
          <TeamComponent />
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
