import React from "react";
import { Link } from "gatsby";
import Sidebar from "../Sidebar/Sidebar";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <main id="main">
      {children}
      </main>
    </>
  );
};

export default Layout;
