const SectionTitle: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
    <h2 className="w-full pb-8 pl-20 pt-20 text-6xl font-semibold text-secondary-black flex items-center border-b border-primary-black">
      <img src={image} className="mr-6 h-14 w-14" />
      {title}
    </h2>
  );
};

export default SectionTitle;
