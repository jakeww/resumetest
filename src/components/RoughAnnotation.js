import React, { useEffect, useRef } from 'react';
import { annotate } from 'rough-notation';

const RoughAnnotation = ({
  children,
  type = 'underline',
  color = '#c1ff72',
  strokeWidth = 3,
  padding = 5,
  animate = true,
  animationDuration = 800,
  show = true,
  multiline = false,
  iterations = 2,
  brackets = 'right'
}) => {
  const elementRef = useRef(null);
  const annotationRef = useRef(null);

  useEffect(() => {
    if (elementRef.current && !annotationRef.current) {
      annotationRef.current = annotate(elementRef.current, {
        type,
        color,
        strokeWidth,
        padding,
        animate,
        animationDuration,
        multiline,
        iterations,
        brackets
      });
    }

    return () => {
      if (annotationRef.current) {
        annotationRef.current.remove();
        annotationRef.current = null;
      }
    };
  }, [type, color, strokeWidth, padding, animate, animationDuration, multiline, iterations, brackets]);

  useEffect(() => {
    if (annotationRef.current) {
      if (show) {
        annotationRef.current.show();
      } else {
        annotationRef.current.hide();
      }
    }
  }, [show]);

  return (
    <span
      ref={elementRef}
      style={{ display: 'inline', position: 'relative' }}
      className="rough-annotation-wrapper"
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
    </span>
  );
};

export default RoughAnnotation;
