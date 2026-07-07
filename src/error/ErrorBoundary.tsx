import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import type { ReactNode } from "react";

import ErrorFallback from "./ErrorFallback";

interface ErrorBoundaryProps {
  children: ReactNode;
}

export default function ErrorBoundary({
  children,
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
      onError={(error, info) => {
        // Log the error for debugging.
        // Replace this with Sentry, LogRocket, etc. in production if desired.
        console.error("Application Error:", error);
        console.error("Component Stack:", info.componentStack);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}