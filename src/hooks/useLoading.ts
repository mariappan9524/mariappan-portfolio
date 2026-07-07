import { useEffect, useState } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return loading;
}