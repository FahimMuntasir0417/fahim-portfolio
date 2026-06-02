"use client";

import { useEffect, useState, type RefObject } from "react";

export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  options: IntersectionObserverInit = {}
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isInView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
        ...options
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isInView, options, ref]);

  return isInView;
}
