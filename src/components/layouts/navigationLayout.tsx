import Topbar from "../topbar/topbar";

const NavigationLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="h-fit bg-salmon-white">
      <Topbar />
      <div className="relative pt-20">{children}</div>
    </main>
  );
};

export default NavigationLayout;
