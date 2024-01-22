import React, { ReactNode } from "react";
import s from "./Container.module.css";

type ContainerProps = {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <>
    <div className={s.wrapper}>
      {children}
    </div>
  </>;
}

export default Container;