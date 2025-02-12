import {motion,  animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";


// AnimatedNumber Component
const AnimatedNumber = ({ value }) => {
  const count = useMotionValue(10);
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true }); // Trigger only once when in view

  useEffect(() => {
    if (inView) {
      animate(count, parseInt(value, 10), { duration: 2 });
      const unsubscribe = count.on("change", (latest) => {
        setDisplayValue(Math.round(latest));
      });
      return () => unsubscribe();
    }
  }, [inView, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

  export default AnimatedNumber;