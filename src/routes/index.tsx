import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-cols justify-between">
      <Button
        className=" cursor-pointer"
        onClick={() => navigate({ to: "/yodhaPharmacy" })}
      >
        Yodha Phramcy Web Page
      </Button>
    </div>
  );
}
