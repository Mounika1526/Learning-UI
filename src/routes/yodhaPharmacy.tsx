import { YodhaPharmacy } from "@/components/YodhaPharmacy/mainPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/yodhaPharmacy")({
  component: YodhaPharmacy,
});
