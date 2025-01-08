import { ReactNode } from "react";
import { performanceLeftContentStyle } from "../../pages/performance-page/performance-page.css";

interface IperformanceContent {
  title: ReactNode;
  content: ReactNode;
}
export const PerformanceContent = ({ title, content }: IperformanceContent) => {
  return (
    <div className={performanceLeftContentStyle}>
      <span
        style={{
          minWidth: "104px",
          color: "#808191",
        }}
      >
        {title}
      </span>
      <span>{content}</span>
    </div>
  );
};
