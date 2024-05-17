"use client";

import { useState, CSSProperties } from "react";
import SquareLoader from "react-spinners/SquareLoader";

const override: CSSProperties = {
  zIndex: "999",
  maxWidth: "160px",
};

export default function Loading() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="flex items-center justify-center m-auto text-center">
      <SquareLoader
        cssOverride={override}
        loading={loading}
        aria-label="Loading Spinner"
      />
    </div>
  );
}
