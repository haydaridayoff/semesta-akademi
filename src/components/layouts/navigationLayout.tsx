import Footer from "../footer/footer";
import Topbar from "../topbar/topbar";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../assets/fonts/RedactionItalic-lgB8w.otf",
  variable: "--font-redaction-italic",
});
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

const NavigationLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <main
        className={`relative h-full bg-salmon-white ${hankenGrotesk.variable} ${myFont.variable} font-primary`}
      >
        <Topbar />
        <div className="relative pt-16 sm:pt-20">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default NavigationLayout;
