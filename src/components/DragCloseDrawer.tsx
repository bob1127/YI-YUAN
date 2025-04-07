import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

type DragCloseDrawerProps = {
  trigger: (props: { onClick: () => void }) => React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const DragCloseDrawer = ({
  trigger,
  children,
  className,
}: DragCloseDrawerProps) => {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [drawerRef, { width }] = useMeasure(); // 👈 量測寬度
  const x = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, { opacity: [1, 0] });
    const xStart = typeof x.get() === "number" ? x.get() : 0;
    await animate("#drawer", { x: [xStart, width] });
    setOpen(false);
  };

  return (
    <>
      {trigger({ onClick: () => setOpen(true) })}

      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ ease: "easeInOut" }}
            className={`absolute right-0 top-0 h-full w-2/3 border-l-6 border-b-black overflow-hidden bg-neutral-50 ${
              className || ""
            }`}
            style={{ x }}
            drag="x"
            dragControls={controls}
            onDragEnd={() => {
              if (x.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={{ left: 0, right: 0.5 }}
          >
            <div className="absolute top-0 right-0 z-[9999999999999999999] flex justify-end p-4 bg-neutral-50">
              <button
                onPointerDown={(e) => controls.start(e)}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-6 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
