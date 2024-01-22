import React, { ReactNode } from "react";
import s from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <>
    <div className={s.wrapper}>
      <header className={s.header}>
        <h1>Country App</h1>
      </header>

      <div className={s.content}>
        {children}
      </div>
    </div>
  </>;
}

export default Layout;