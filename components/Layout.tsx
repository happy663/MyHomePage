import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  );
};
export default Layout;
