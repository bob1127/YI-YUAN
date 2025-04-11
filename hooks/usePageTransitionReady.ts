"use client";
import { useState, useEffect } from "react";

export default function usePageTransitionReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = () => setReady(true);

    if (!sessionStorage.getItem("transitioning")) {
      setReady(true); // 沒有動畫時直接初始化
    } else {
      sessionStorage.removeItem("transitioning");
    }

    window.addEventListener("pageTransitionComplete", init);

    return () => window.removeEventListener("pageTransitionComplete", init);
  }, []);

  return ready;
}
