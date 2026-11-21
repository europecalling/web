import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  const action = useNavigationType();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (action !== "POP") window.scrollTo(0, 0);
  }, [pathname, action]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // base PageView already fired from index.html
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}