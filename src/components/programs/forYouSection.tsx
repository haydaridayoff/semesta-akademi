import { Fragment } from "react";

const ForYouSection: React.FC<{
  content?: {
    title: string;
    description: string;
  }[];
}> = ({ content }) => {
  return (
    <section className="flex flex-col gap-12 border-b border-primary-black px-4 py-8 lg:pb-16 lg:pl-24">
      <h2 className="text-3xl underline sm:text-6xl">
        Untuk <br className="hidden lg:block" /> Kamu
      </h2>
      <div className="flex flex-col gap-6 sm:gap-12">
        {content?.map((item, index) => (
          <Fragment key={index}>
            <div className="flex flex-col gap-4">
              <h3
                key={index}
                className="text-xl font-semibold text-secondary-black"
              >
                {item.title}
              </h3>
              <p className="text-lg text-secondary-black">{item.description}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};
export default ForYouSection;
