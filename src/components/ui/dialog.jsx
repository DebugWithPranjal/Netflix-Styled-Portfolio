import React from "react";

// Root: manages open state externally
export const Dialog = ({ open, children }) => {
  return open ? <>{children}</> : null;
};

// Portal: wrapper for overlay + content
export const DialogPortal = ({ children }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {children}
  </div>
);

// Overlay: background layer
export const DialogOverlay = ({ className, onClick }) => (
  <div
    className={`fixed inset-0 bg-black/80 backdrop-blur-sm ${className}`}
    onClick={onClick}
  />
);

// Content: modal box
export const DialogContent = ({
  className,
  children,
  onClose,
  ...props
}) => (
  <DialogPortal>
    <DialogOverlay onClick={onClose} />
    <div
      className={`relative z-50 w-full rounded-lg border bg-background p-6 shadow-lg animate-in ${className}`}
      {...props}
    >
      {children}
    </div>
  </DialogPortal>
);

// Header
export const DialogHeader = ({ children, className }) => (
  <div
    className={`flex flex-col space-y-3 mb-3 text-center sm:text-left ${className}`}
  >
    {children}
  </div>
);

// Footer
export const DialogFooter = ({ children, className }) => (
  <div
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
  >
    {children}
  </div>
);

// Title
export const DialogTitle = ({ children, className }) => (
  <h2 className={`leading-none tracking-tight ${className}`}>
    {children}
  </h2>
);


