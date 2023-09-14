const DescriptionTitle: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <p className="w-full max-w-xl text-lg leading-8 text-secondary-black sm:text-xl">
      {children}
    </p>
  );
};

export default DescriptionTitle;
