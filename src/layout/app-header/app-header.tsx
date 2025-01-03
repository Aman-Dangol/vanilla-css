import { secondaryTextStyle } from "../../global.css";
import { HamburgerIcon } from "../../components/icons/hamburger-icon";
import { AppHeaderLogo } from "./app-header-logo";
import { AppHeaderSearch } from "./app-header-search";
import {
  appHeaderAvatarStyle,
  appHeaderHamburger,
  appHeadericonsStyle,
  appHeaderLogoSectionStyle,
  appHeaderProfileSection,
  appHeaderSearchSectionContainerStyle,
  appHeaderStyle,
  appHeaderVerticalSeperatorStyle,
  appHeaderWorkspaceIconStyle,
  appHeaderWorkspaceSwitchContainerStyle,
} from "./app-header.css";

export const AppHeader = () => {
  return (
    <header className={appHeaderStyle}>
      <div className={appHeaderLogoSectionStyle}>
        <AppHeaderLogo />
        <div className={appHeaderVerticalSeperatorStyle} />
        <div className={appHeaderWorkspaceSwitchContainerStyle}>
          <div className={appHeaderWorkspaceIconStyle}>
            <svg
              style={{
                display: "block",
              }}
              width="1.25rem"
              height="1.25rem"
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
            className={secondaryTextStyle}
            width="1.5rem"
            height="1.5rem"
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
      <div className={appHeaderSearchSectionContainerStyle}>
        <AppHeaderSearch />
      </div>
      <div className={appHeaderProfileSection}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={appHeadericonsStyle}
          viewBox="0 0 16 16"
        >
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
        </svg>
        <div className={appHeaderVerticalSeperatorStyle} />
        <svg
          className={appHeadericonsStyle}
          viewBox="64 64 896 896"
          focusable="false"
          data-icon="notification"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z"></path>
        </svg>
        <svg
          className={appHeadericonsStyle}
          xmlns="http://www.w3.org/2000/svg"
          fill="#e16b29"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m-.55 8.502L7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0M8.002 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
          />
        </svg>
        <img
          className={appHeaderAvatarStyle}
          src="https://ui-avatars.com/api/?name=John+Doe&background=random"
        />
      </div>
      <HamburgerIcon className={appHeaderHamburger} />
    </header>
    // <header className={appHeaderStyle}>
    //   <div
    //     style={{
    //       display: "flex",
    //       gap: 28,
    //       alignItems: "center",
    //     }}
    //   >
    //     <div className={appHeaderLogoContainer}>
    //       <svg
    //         width="70"
    //         viewBox="0 0 100 50"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <rect
    //           x="2"
    //           y="2"
    //           width="96"
    //           height="46"
    //           rx="23"
    //           ry="23"
    //           fill="#0F1123"
    //           stroke="#0F1123"
    //           stroke-width="4"
    //         />

    //         <circle cx="27" cy="25" r="21" fill="#fff" />

    //         <circle cx="73" cy="25" r="21" fill="#fff" />
    //       </svg>
    //       <span className={appHeaderTitle}>vexa</span>
    //     </div>

    //     <div
    //       style={{
    //         width: "1px",
    //         height: 24,
    //         background: "#dedede",
    //       }}
    //     ></div>
    //     <div className={appHeaderWorkspaceSwitch}>
    //       <div className={appHeaderWorkspaceIconContainer}>
    //         <svg
    //           className={appHeaderWorkspaceIcon}
    //           width="22"
    //           height="22"
    //           viewBox="0 0 15 15"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <g clip-path="url(#clip0_1_6)">
    //             <path
    //               d="M7.5 2.4C6.13636 2.4 0 8 0 8V0H15V2.90909C15 4.8 13.6364 7.2 11.5909 7.2C9.54545 7.2 8.86364 2.4 7.5 2.4Z"
    //               fill="#C7149F"
    //             />
    //             <path
    //               d="M8.18182 12.6C9.54545 12.6 15 7 15 7L15 15L-1.90735e-06 15L-1.67259e-06 12.0909C-1.52e-06 10.2 1.36364 7.8 3.40909 7.8C5.45454 7.8 6.81818 12.6 8.18182 12.6Z"
    //               fill="#C7149F"
    //             />
    //           </g>
    //           <defs>
    //             <clipPath id="clip0_1_6">
    //               <rect width="15" height="15" fill="white" />
    //             </clipPath>
    //           </defs>
    //         </svg>
    //       </div>
    //       <svg
    //         className={appHeaderWorkspaceSwitchIcon}
    //         width="24"
    //         height="24"
    //         viewBox="0 0 15 15"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
    //           fill="currentColor"
    //           fill-rule="evenodd"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </div>
    //   </div>
    //   <button className={appHeaderSearchbar}>
    //     <svg
    //       width="24"
    //       height="24"
    //       viewBox="0 0 15 15"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
    //         fill="currentColor"
    //         fill-rule="evenodd"
    //         clip-rule="evenodd"
    //       ></path>
    //     </svg>{" "}
    //     Search product, project, or files
    //   </button>

    //   <svg
    //     className={appHeaderHamburger}
    //     viewBox="0 0 15 15"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
    //       fill="currentColor"
    //       fill-rule="evenodd"
    //       clip-rule="evenodd"
    //     ></path>
    //   </svg>
    // </header>
  );
};
