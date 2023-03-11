import { setDeviceType } from "@client-state/ducks/root";
import { useAppDispatch } from "@client-state/hooks";
import { useCallback, useEffect } from "react";
import { criteria } from "~/constants";

export const useCheckMobile = () => {
  const dispatch = useAppDispatch();

  const updateTarget = useCallback(
    (e: MediaQueryListEvent) => {
      if (e.matches) {
        dispatch(setDeviceType(true));
      } else {
        dispatch(setDeviceType(undefined));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${criteria.TABLET.width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      dispatch(setDeviceType(true));
    } else {
      dispatch(setDeviceType(undefined));
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [dispatch, updateTarget]);
};
