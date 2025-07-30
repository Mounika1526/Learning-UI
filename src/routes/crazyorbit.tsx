
import { AboutPage } from "@/components/CrazyOrbit";
import Home from "@/components/CrazyOrbit/home";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crazyorbit")({
  component: AboutPage,
});
