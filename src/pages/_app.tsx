import React from "react";
import { useRouter } from "next/router";
import { NavigationProvider } from "../contexts/navigationContext";
import "../styles/globals.css";
import NavigationLayout from "../components/layouts/navigationLayout";
import EmptyLayout from "../components/layouts/emptyLayout";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: React.FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter();
  const excludeLayoutPaths = ["/login"]; // Add paths you want to exclude here

  const LayoutComponent = excludeLayoutPaths.includes(router.pathname)
    ? EmptyLayout
    : NavigationLayout;

  return (
    <NavigationProvider>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </NavigationProvider>
  );
};

export default MyApp;
