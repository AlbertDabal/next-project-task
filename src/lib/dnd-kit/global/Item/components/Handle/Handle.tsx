import React, { forwardRef } from "react";

import { Action, ActionProps } from "../Action";

export const Handle = forwardRef<HTMLButtonElement, ActionProps>(
  (props, ref) => {
    return (
      <Action
        ref={ref}
        cursor="grab"
        data-cypress="draggable-handle"
        {...props}
      >
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2530_349)">
              <path
                d="M4.16667 7.49996L1.66667 9.99996M1.66667 9.99996L4.16667 12.5M1.66667 9.99996H18.3333M7.5 4.16663L10 1.66663M10 1.66663L12.5 4.16663M10 1.66663V18.3333M12.5 15.8333L10 18.3333M10 18.3333L7.5 15.8333M15.8333 7.49996L18.3333 9.99996M18.3333 9.99996L15.8333 12.5"
                stroke="#475467"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2530_349">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Action>
    );
  }
);
