const MainTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <>
      <h1 className={`text-5xl text-secondary-black sm:text-8xl ${className}`}>
        {children}
      </h1>
    </>
  );
};

export default MainTitle;
