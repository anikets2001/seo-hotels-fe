import { useEffect, useRef } from "react";

let activeLocks = 0;
let lockedScrollY = 0;
const activeModalElements = new Set();
let previousStyles = null;

const preventBackgroundScroll = (event) => {
  const target = event.target;
  for (const element of activeModalElements) {
    if (element && element.contains(target)) {
      return;
    }
  }
  event.preventDefault();
};

const saveStyles = () => ({
  htmlOverflow: document.documentElement.style.overflow,
  bodyPosition: document.body.style.position,
  bodyTop: document.body.style.top,
  bodyWidth: document.body.style.width,
  bodyOverflow: document.body.style.overflow,
});

const applyScrollLock = () => {
  lockedScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  previousStyles = saveStyles();

  document.documentElement.classList.add("modal-open");
  document.body.classList.add("modal-open");
  document.documentElement.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
  document.body.addEventListener("touchmove", preventBackgroundScroll, { passive: false });
  document.body.addEventListener("wheel", preventBackgroundScroll, { passive: false });
};

const releaseScrollLock = () => {
  document.body.removeEventListener("touchmove", preventBackgroundScroll);
  document.body.removeEventListener("wheel", preventBackgroundScroll);
  document.documentElement.classList.remove("modal-open");
  document.body.classList.remove("modal-open");

  if (previousStyles) {
    document.documentElement.style.overflow = previousStyles.htmlOverflow;
    document.body.style.position = previousStyles.bodyPosition;
    document.body.style.top = previousStyles.bodyTop;
    document.body.style.width = previousStyles.bodyWidth;
    document.body.style.overflow = previousStyles.bodyOverflow;
  }

  window.scrollTo(0, lockedScrollY);
  previousStyles = null;
};

const useModalScrollLock = (isOpen) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    if (!isOpen) {
      return undefined;
    }

    activeLocks += 1;
    if (modalRef.current) {
      activeModalElements.add(modalRef.current);
    }
    if (activeLocks === 1) {
      applyScrollLock();
    }

    return () => {
      if (modalRef.current) {
        activeModalElements.delete(modalRef.current);
      }
      activeLocks = Math.max(0, activeLocks - 1);
      if (activeLocks === 0) {
        releaseScrollLock();
      }
    };
  }, [isOpen]);

  return { modalRef };
};

export default useModalScrollLock;
