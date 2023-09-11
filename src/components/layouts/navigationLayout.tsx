import Footer from "../footer/footer";
import Topbar from "../topbar/topbar";

const NavigationLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <main className="relative h-full bg-salmon-white">
        <Topbar />
        <div className="relative pt-20">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default NavigationLayout;
