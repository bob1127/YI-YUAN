"use client";

import { useEffect } from "react";

export default function TransitionListener() {
  useEffect(() => {
    const init = () => {
      // ✅ 每次 page transition 完成後觸發動畫刷新
      window.dispatchEvent(new Event("pageReady"));
    };

    // 沒有 transition flag 時直接觸發初始化
    if (!sessionStorage.getItem("transitioning")) {
      init();
    } else {
      sessionStorage.removeItem("transitioning");
    }

    window.addEventListener("pageTransitionComplete", init);

    return () => {
      window.removeEventListener("pageTransitionComplete", init);
    };
  }, []);

  return null; // 不需 render UI
}
