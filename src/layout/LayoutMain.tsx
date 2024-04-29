"use client";

import { useMediaQuery } from "@mui/material";
import "../styles/globals.css";

export default function LayoutMain({
  children,
  backgroundColor = "#ffff",
}: {
  children: React.ReactElement;
  backgroundColor?: string;
}) {
  const mq = useMediaQuery("(min-width:500px)");

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        height: "100%",
        maxWidth: mq ? "400px" : "unset",
        backgroundColor,
      }}
    >
      {/* <AppBarMain /> */}
      {children}
    </section>
  );
}
