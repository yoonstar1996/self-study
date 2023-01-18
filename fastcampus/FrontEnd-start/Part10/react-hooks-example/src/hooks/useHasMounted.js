import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
