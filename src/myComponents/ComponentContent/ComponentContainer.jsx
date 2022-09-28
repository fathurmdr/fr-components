import React, { useEffect } from "react";
import { useRef } from "react";

function ComponentContainer(props) {
  const refContainer = useRef(null);
  const refContent = useRef(null);
  const refResizer = useRef(null);

  useEffect(() => {
    const content = refContent.current;
    const container = refContainer.current;

    // get left, top, right, bottom, x, y, width, and height client from element
    let contentRect = content.getBoundingClientRect();
    let containerRect = container.getBoundingClientRect();
    let maxWidth = containerRect.width;
    let minWidth = 400;
    let x = 0;

    window.addEventListener("resize", () => {
      containerRect = container.getBoundingClientRect();
      maxWidth = containerRect.width;
    });

    // Mouse resizer
    const onMouseMoveResize = (event) => {
      event.preventDefault();

      content.classList.add("pointer-events-none");

      // update contentRect
      contentRect = content.getBoundingClientRect();

      // get delta x mouse movement
      const dx = event.clientX - x;
      // update x position after mouse move
      x = event.clientX;

      if (x > contentRect.left + minWidth && x < contentRect.left + maxWidth) {
        content.style.width = `${contentRect.width + dx}px`;
      }
      if (x > contentRect.left + maxWidth) {
        content.style.width = "100%";
      }
      if (x < contentRect.left + minWidth) {
        content.style.width = `${minWidth}px`;
      }
    };

    const onMouseUpResize = (event) => {
      document.body.classList.remove("cursor-ew-resize");
      content.classList.remove("pointer-events-none");
      document.removeEventListener("mousemove", onMouseMoveResize);
    };

    // Touch resizer
    const onTouchMoveResize = (event) => {
      document.removeEventListener("mousemove", onMouseMoveResize);
      // update contentRect
      contentRect = content.getBoundingClientRect();

      // get delta x mouse movement
      const dx = event.touches[0].clientX - x;
      // update x position after mouse move
      x = event.touches[0].clientX;

      if (x > contentRect.left + minWidth && x < contentRect.left + maxWidth) {
        content.style.width = `${contentRect.width + dx}px`;
      }
      if (x > contentRect.left + maxWidth) {
        content.style.width = "100%";
      }
      if (x < contentRect.left + minWidth) {
        content.style.width = `${minWidth}px`;
      }
    };

    const onTouchEndResize = (event) => {
      content.classList.remove("pointer-events-none");
      document.removeEventListener("TouchMove", onTouchMoveResize);
    };

    const onMouseDownResize = (event) => {
      document.body.classList.add("cursor-ew-resize");
      x = event.clientX;
      document.addEventListener("mousemove", onMouseMoveResize);
      document.addEventListener("mouseup", onMouseUpResize);
    };

    const onTouchStartResize = (event) => {
      x = event.touches[0].clientX;
      document.addEventListener("touchmove", onTouchMoveResize);
      document.addEventListener("touchend", onTouchEndResize);
    };

    const resizer = refResizer.current;

    // Add mouse down event listener
    resizer.addEventListener("mousedown", onMouseDownResize);
    // Add touch start event listener
    resizer.addEventListener("touchstart", onTouchStartResize);

    return () => {
      resizer.removeEventListener("mousedown", onMouseDownResize);
      resizer.removeEventListener("touchstart", onTouchStartResize);
    };
  }, []);

  return (
    <div ref={refContainer} className="max-w-full rounded-md border">
      <div
        ref={refContent}
        className="min-h-[280px] min-w-full max-w-full sm:flex sm:min-w-0"
      >
        <div className="h-auto w-full">
          <div className="mx-auto mt-12 max-w-md px-4">{props.children}</div>
        </div>

        {/* size controller */}
        <div>
          <div
            ref={refResizer}
            className="hidden h-full w-5 cursor-ew-resize items-center border-l bg-gray-100 sm:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 rotate-90 transform text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentContainer;
