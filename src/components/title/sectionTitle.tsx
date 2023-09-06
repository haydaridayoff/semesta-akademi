const SectionTitle: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
    <h2 className="w-full  pb-12 pt-16 px-4 sm:pb-8 sm:pl-20 sm:pt-20 text-3xl sm:text-6xl font-semibold text-secondary-black flex items-center border-b border-primary-black">
      <img src={image} className="mr-6 sm:h-14 sm:w-14 h-8 w-8" />
      {title}
    </h2>
  );
};

export default SectionTitle;
