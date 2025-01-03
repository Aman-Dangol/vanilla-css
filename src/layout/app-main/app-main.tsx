import { ReactNode } from "react";
import { appMainContainerStyle } from "./app-main.css";

export const AppMain = ({ children }: { children: ReactNode }) => {
  return (
    <section className={appMainContainerStyle}>
      <div>{children}</div>
    </section>
  );
};
