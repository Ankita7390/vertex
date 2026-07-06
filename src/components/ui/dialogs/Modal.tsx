import { AnimatePresence, motion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  title: string;
  className?: string;
  onClose: () => void;
}

export function Modal({ children, className, open, title, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-zinc-950/45 p-4 backdrop-blur-sm"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          role="dialog"
          onMouseDown={onClose}
        >
          <motion.div
            animate={{ y: 0, scale: 1 }}
            className={cn(
              "w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950",
              className,
            )}
            exit={{ y: 16, scale: 0.98 }}
            initial={{ y: 16, scale: 0.98 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
              {title}
            </h2>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
