import { type PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren {
  root?: string;
}

// export const Portal = ({ root, children }: PortalProps) => {
//   const [mounted, setMounted] = useState<boolean>(false);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     setMounted(true);
//     containerRef.current = document.querySelector(`${root}`);
//     return () => setMounted(false);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return mounted && !!containerRef.current ? createPortal(children, containerRef.current) : null;
// };

export const Portal = ({ root, children }: PortalProps) => {
  return createPortal(children, document.querySelector(`${root}`) || document.body);
};
