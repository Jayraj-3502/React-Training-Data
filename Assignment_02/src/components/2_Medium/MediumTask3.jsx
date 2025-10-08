import { useEffect, useState } from "react";

export default function MediumTask3({ compound, setCompound }) {
  useEffect(() => {
    setCompound("Mounted");

    return () => {
      setCompound("Unmounted");
    };
  }, []);

  return <></>;
}
