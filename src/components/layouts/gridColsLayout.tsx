const GridColsLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`grid grid-flow-col overflow-x-auto gap-4 sm:grid-flow-dense sm:grid-cols-2 xl:grid-cols-3 justify-items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default GridColsLayout;
