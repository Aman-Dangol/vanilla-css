import { PerformanceContent } from "../../components/app-main/performace-content";
import { Arrowright } from "../../components/icons/arrowright-icon";
import { TickIcon } from "../../components/icons/tick-icon";
import { spacing } from "../../css-helper";
import {
  performanceContainerStyle,
  performanceheaderIconStyle,
  performanceheaderStyle,
  performanceMainContainerStyle,
  performanceTickContainerStyle,
  performanceTickIconStyle,
} from "./performance-page.css";

export const Performance = () => {
  const ipDetails = [
    {
      title: "Protection",
      content: (
        <div
          style={{
            background: "#f1f2f3",
            border: "1px solid #dfe1e2",
            display: "inline-flex",
            padding: spacing["1"],
            borderRadius: "6px",
            gap: spacing["1"],
            color: "#6e7074",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="1.25rem"
            height="1.25rem"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            display="block"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="currentColor"
              d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
            />
          </svg>
          Stopped
        </div>
      ),
    },
    {
      title: "Application",
      content: "Server-other, Winnuke software",
    },
    {
      title: "Domain",
      content: "Default domain, extra domain",
    },
    {
      title: "Source",
      content: "TCP-IP 2.1.2678.2:08253",
    },
    {
      title: "Bound  user",
      content: (
        <a
          href="#"
          style={{
            display: "inline-flex",
            gap: spacing[1],
            textDecoration: "none",
            color: "#2640cb",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25rem"
            height="1.25rem"
            display="block"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
              clip-rule="evenodd"
            />
          </svg>
          Assign a user
        </a>
      ),
    },
    {
      title: "Category",
      content:
        "Botnet, launching, anonymisation, integration, protection, coating",
    },
    {
      title: "Port",
      content: "136, 139, 141, 142 [148]",
    },
  ];
  const payloadInformation = [
    {
      title: "Last testing",
      content: "Sep 5, 2023, 18:03:06 [1:12:5]",
    },
    {
      title: "Sutnet mask",
      content: "255.255.255.0",
    },
    {
      title: "Interface",
      content: "FastEthernet0",
    },
    {
      title: "DOS software",
      content: "Winnuke attack [16.3]",
    },
    {
      title: "Classification",
      content: "Attempted Denial of Service, Botnet management server",
    },
  ];

  return (
    <section className={performanceContainerStyle}>
      <div className={performanceheaderStyle}>
        <Arrowright className={performanceheaderIconStyle} />
        <h3>Performance Stability</h3>
      </div>
      <div>
        <div className={performanceTickContainerStyle}>
          <TickIcon className={performanceTickIconStyle} />
        </div>
      </div>
      <div className={performanceMainContainerStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <span
            style={{
              fontWeight: 600,
            }}
          >
            IP details
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5em",
            }}
          >
            {ipDetails.map((data) => (
              <PerformanceContent title={data.title} content={data.content} />
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <span
            style={{
              fontWeight: 600,
            }}
          >
            IP details
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5em",
            }}
          >
            {payloadInformation.map((data) => (
              <PerformanceContent title={data.title} content={data.content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
