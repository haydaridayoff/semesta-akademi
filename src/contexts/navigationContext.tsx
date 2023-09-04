import React, { createContext, useContext, useState } from "react";

interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

interface NavigationGroup {
  id: string;
  label: string;
  items: NavigationItem[];
}

interface NavigationContextProps {
  navigationItems: NavigationItem[];
  setNavigationItems: React.Dispatch<React.SetStateAction<NavigationItem[]>>;
}

interface NavigationProviderProps {
  children: React.ReactNode;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([
    { id: "beranda", label: "Beranda", path: "/" },
    { id: "program", label: "Program", path: "/program" },
    { id: "pengajar", label: "Pengajar", path: "/pengajar" },
    { id: "blog", label: "Blog", path: "/blog" },
  ]);

  const [programNavigationItems, setProgramNavigationItems] = useState<
    NavigationGroup[]
  >([
    {
      id: "branding-and-marketing",
      label: "Creative Branding and Marketing",
      items: [
        {
          id: "digital-marketing",
          label: "Digital Marketing for Business",
          path: "/digital-marketing",
        },
        {
          id: "social-media",
          label: "Social Media for Business",
          path: "/social-media",
        },
      ],
    },
  ]);

  return (
    <NavigationContext.Provider value={{ navigationItems, setNavigationItems }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextProps => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
