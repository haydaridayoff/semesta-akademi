const TopMainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 px-4 py-8 md:gap-12 md:px-24 md:pb-16 md:pt-20">
      {children}
    </div>
  );
};

export default TopMainLayout;
