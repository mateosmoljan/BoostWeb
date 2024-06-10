import Faq from "./Faq";

function FaqSection() {
  return (
    <section className="w-full py-32 " id="faq">
      <div className="container flex flex-col items-center">
        <div className="mb-8">
          <h2 className="text-gradient">Q & A</h2>
        </div>
        <div>
          <Faq />
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
