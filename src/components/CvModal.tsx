"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, X } from "lucide-react";
import { buttonClasses } from "@/components/ui/Button";

export const CV_URL = "/Olimjon_Murtazoyev_CV.pdf";
export const CV_FILENAME = "Olimjon_Murtazoyev_CV.pdf";

type Props = { open: boolean; onClose: () => void };

export const CvModal = ({ open, onClose }: Props) => {
  // Esc bilan yopish va orqa fon scroll bo'lmasligi
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Resume"
        >
          <motion.div
            className="flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-primary/20 bg-background shadow-2xl"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 border-b px-4 py-3">
              <span className="font-semibold">Resume — Olimjon Murtazoyev</span>
              <div className="flex items-center gap-2">
                <a
                  href={CV_URL}
                  download={CV_FILENAME}
                  className={buttonClasses("primary", "sm")}
                >
                  <Download size={16} className="mr-1.5" />
                  <span>Download</span>
                </a>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in new tab"
                  title="Open in new tab"
                  className={buttonClasses("ghost", "sm")}
                >
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className={buttonClasses("ghost", "sm")}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Telefonlarda brauzer PDF'ni ichkarida ko'rsatmasligi mumkin —
                shuning uchun ostida zaxira havola bor */}
            <object data={`${CV_URL}#view=FitH`} type="application/pdf" className="h-full w-full flex-1">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <p className="text-muted-foreground">
                  Your browser can&apos;t show the PDF here.
                </p>
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" className={buttonClasses("primary", "md")}>
                  <ExternalLink size={16} className="mr-2" />
                  <span>Open resume</span>
                </a>
              </div>
            </object>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
