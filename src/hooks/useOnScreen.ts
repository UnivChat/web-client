import { debounce } from "lodash-es";
import { useEffect, useMemo, useRef } from "react";

interface Options {
  onImpressionStart?: VoidFunction;
  onImpressionEnd?: VoidFunction;
}

export const useOnScreen = ({
  onImpressionStart,
  onImpressionEnd
}: Options) => {
  const state = useRef({ isImpressed: false }).current;

  const observer = useMemo(() => {
    // to prevents runtime crash in IE, let's mark it true right away
    if (typeof IntersectionObserver !== "function") return;

    const handleImpression = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      const didImpressionEnd = !entry.isIntersecting;

      const handleImpressionStart = debounce(() => {
        if (state.isImpressed) {
          return;
        }

        onImpressionStart?.();
        state.isImpressed = true;
      }, 0);

      const handleImpressionEnd = debounce(() => {
        if (!state.isImpressed) {
          return;
        }

        onImpressionEnd?.();
        state.isImpressed = false;
      }, 0);

      if (didImpressionEnd) {
        handleImpressionStart.cancel();
        handleImpressionEnd();
      } else {
        handleImpressionEnd.cancel();
        handleImpressionStart();
      }
    };

    // eslint-disable-next-line consistent-return
    return new IntersectionObserver(handleImpression);
  }, [onImpressionEnd, onImpressionStart, state]);

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    observer?.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) observer?.unobserve(ref.current);
    };
  }, [observer]);

  return ref;
};
