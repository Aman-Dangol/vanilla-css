import { Arrowright } from "../../components/icons/arrowright-icon";
import { TickIcon } from "../../components/icons/tick-icon";
import {
  performanceContainerStyle,
  performanceheaderIconStyle,
  performanceheaderStyle,
  performanceTickIconStyle,
} from "./performance-page.css";

export const Performance = () => {
  return (
    <section className={performanceContainerStyle}>
      <div className={performanceheaderStyle}>
        <Arrowright className={performanceheaderIconStyle} />
        <h3>Performance Stability</h3>
      </div>
      <div>
        <div className="performanceTickContainerStyle">
          <TickIcon className={perforcmaneTickIconStyle} />
        </div>
      </div>
    </section>
  );
};
