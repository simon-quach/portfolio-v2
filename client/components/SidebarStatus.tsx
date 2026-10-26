"use client";

import { useEffect, useState } from "react";

const formatTime = () =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
  })
    .format(new Date())
    .toLowerCase();

// Local time in seattle, shown under the name
const SidebarStatus = () => {
  // Rendered after mount so server and browser clocks can't disagree
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatTime());
    const id = setInterval(() => setTime(formatTime()), 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-light-description">
      seattle, wa · {time ?? "--:--"}
    </div>
  );
};

export default SidebarStatus;
