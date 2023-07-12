import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IntersectionObserverProps {
  children: (isVisible: boolean) => React.ReactNode;
}

const IntersectionObserver: React.FC<IntersectionObserverProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return <div ref={ref}>{children(isVisible)}</div>;
};

export default IntersectionObserver;
