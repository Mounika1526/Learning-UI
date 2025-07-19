import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-cols justify-between">
      {/* <div className="bg-black text-green-500">Yodha Phramcy Web Page</div> */}
      <Button
        className="bg-trsansparent cursor-pointer"
        onClick={() => navigate({ to: "/yodhaPharmacy" })}
      >
        Yodha Phramcy Web Page
      </Button>
      {/* <div className="bg-white text-amber-600">Google</div>
      <div className="bg-red-500 text-white p-4">Hello World</div> */}
    </div>
  );
}
