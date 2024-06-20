type LinksData = {
  panelNumber: number;
  title: string;
  des: string;
};

type DataObject = {
  data: LinksData[];
};

export const FaqData: DataObject = {
  data: [
    {
      panelNumber: 1,
      title: "How much does it cost to create a website?",
      des: `The cost of creating a website varies depending on the features and complexity of the project, as well as the number of pages, multilingual options, number of galleries, and many other factors.`,
    },
    {
      panelNumber: 2,
      title: "How long does it take to create a website?",
      des: `The time it takes to create a website varies depending on the complexity of the project. On average, building a simple website can take anywhere from a few days to a few weeks, while more complex projects can take longer.`,
    },
    {
      panelNumber: 3,
      title: "What information and materials do I need to prepare?",
      des: `<span className="font-titleBold">Goal of the website:</span> What is
          the purpose of the website and what is intended to be achieved through
          it. <br />
          <br />
          <span className="font-titleBold">Target audience:</span> Who is the
          target audience of the website and what are their needs. <br />
          <br />
          <span className="font-titleBold">Content:</span> What content will be
          displayed on the page, including texts, images, and video content.{" "}
          <br />
          <br />
          <span className="font-titleBold">Functionality:</span> What
          functionalities are needed on the page, such as contact forms,
          e-commerce, or social media integrations. <br />
          <br />
          <span className="font-titleBold">Design:</span> General style and
          colors to be used on the page, as well as other specific design
          requirements. <br />
          <br />
          <span className="font-titleBold">Budget:</span> Available budget for
          the website development. <br />
          <br />
          <span className="font-titleBold">Deadlines:</span> Deadlines for
          project completion.`,
    },
    {
      panelNumber: 4,
      title: `Will I receive support and maintenance after the website is created?`,
      des: `Yes, we provide support and maintenance after the website is created.
          Depending on your needs, you can make changes as required. Billing can
          be done either as a one-time payment or prepaid.`,
    },
    {
      panelNumber: 5,
      title: "What is a domain and how to buy/get a domain?",
      des: `A domain is a unique name used to identify a website on the internet.
          <br />
          <br />
          You can purchase a domain from various providers, and we can assist
          you with that.`,
    },
    {
      panelNumber: 6,
      title: "Website Maintenance Simplified",
      des: `Website maintenance involves regular updates to software, security
          monitoring, content updates, and performance optimization. Our
          dedicated team ensures your website remains secure, up-to-date, and
          running smoothly.
          <br />
          <br />
          We provide website maintenance services with straightforward pricing.
          For smaller projects, we provide fixed pricing, while larger projects
          receive custom quotes.
          <br />
          <br />
          Investing in website maintenance enhances user experience, protects
          your online reputation, and ensures your business's success. Let us
          handle the technical details while you focus on growing your business.`,
    },
    {
      panelNumber: 7,
      title: "Why should we work with you over any other firm?",
      des: `Great question, as there are many options. However, it is important to
          keep in mind that well over 95% of web development or design
          businesses are using a Content Management System to create their
          websites, filling our pre-created templates with your information.
          <br />
          <br />
          This may be ok with you, however it is not a good solution long-term.
          <br />
          <br />
          This decision does ultimately come down to what you feel is right for
          you and your needs alone. However, we can guarantee that what we
          provide you will be specifically tailored to your needs, and not just
          some filled out template that many other sites are using. We go above
          and beyond for you and will be using the best technologies available
          to create your site, not just what is convenient for us.`,
    },
  ],
};
