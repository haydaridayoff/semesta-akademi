const SectionTitle: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
    <h2 className="w-full  pb-12 pt-16 px-4 md:pb-8 md:pl-20 md:pt-20 text-3xl md:text-6xl font-semibold text-secondary-black flex items-center border-b border-primary-black">
      <img src={image} className="mr-6 md:h-14 md:w-14 h-8 w-8" />
      {title}
    </h2>
  );
};

export default SectionTitle;
