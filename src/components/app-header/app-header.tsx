import {
  appHeaderHamburger,
  appHeaderLogoContainer,
  appHeaderSearchbar,
  appHeaderStyle,
  appHeaderTitle,
  appHeaderWorkspaceIcon,
  appHeaderWorkspaceIconContainer,
  appHeaderWorkspaceSwitch,
  appHeaderWorkspaceSwitchIcon,
} from "./app-header.css";

export const AppHeader = () => {
  return (
    <header className={appHeaderStyle}>
      <div
        style={{
          display: "flex",
          gap: 28,
          alignItems: "center",
        }}
      >
        <div className={appHeaderLogoContainer}>
          <svg
            width="70"
            viewBox="0 0 100 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2"
              width="96"
              height="46"
              rx="23"
              ry="23"
              fill="#0F1123"
              stroke="#0F1123"
              stroke-width="4"
            />

            <circle cx="27" cy="25" r="21" fill="#fff" />

            <circle cx="73" cy="25" r="21" fill="#fff" />
          </svg>
          <span className={appHeaderTitle}>vexa</span>
        </div>

        <div
          style={{
            width: "1px",
            height: 24,
            background: "#dedede",
          }}
        ></div>
        <div className={appHeaderWorkspaceSwitch}>
          <div className={appHeaderWorkspaceIconContainer}>
            <svg
              className={appHeaderWorkspaceIcon}
              width="22"
              height="22"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_6)">
                <path
                  d="M7.5 2.4C6.13636 2.4 0 8 0 8V0H15V2.90909C15 4.8 13.6364 7.2 11.5909 7.2C9.54545 7.2 8.86364 2.4 7.5 2.4Z"
                  fill="#C7149F"
                />
                <path
                  d="M8.18182 12.6C9.54545 12.6 15 7 15 7L15 15L-1.90735e-06 15L-1.67259e-06 12.0909C-1.52e-06 10.2 1.36364 7.8 3.40909 7.8C5.45454 7.8 6.81818 12.6 8.18182 12.6Z"
                  fill="#C7149F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_6">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <svg
            className={appHeaderWorkspaceSwitchIcon}
            width="24"
            height="24"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <button className={appHeaderSearchbar}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>{" "}
        Search product, project, or files
      </button>

      <svg
        className={appHeaderHamburger}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </header>
  );
};
