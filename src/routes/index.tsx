// src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: IndexRedirect,
});

function IndexRedirect() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/yodhaPharmacy";
    } else {
      window.location.href = "/login";
    }
  }, []);

  return null; // or a loader/spinner while redirecting
}
