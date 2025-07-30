
import { AboutPage } from "@/components/CrazyOrbit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crazyorbit")({
  component: AboutPage,
});
