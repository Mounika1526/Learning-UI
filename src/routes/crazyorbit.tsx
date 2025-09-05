import { AboutPage } from "@/components/CrazyOrbit";
import { CrazyOrbitIndex } from "@/components/CrazyOrbit/htmlFile";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crazyorbit")({
  component: CrazyOrbitIndex,
});
