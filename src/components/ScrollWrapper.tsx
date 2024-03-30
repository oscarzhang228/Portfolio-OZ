import { ReactNode, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
/**
 * Uses useLayoutEffect such that when the location pathname changes it scrolls the page back up to the top.
 */
export const ScrollWrapper = (props: { children: ReactNode }) => {
  const location = useLocation();

  // Scroll to the top of the page when the location pathname changes unless it is the main page (/)
  useLayoutEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return props.children;
};
