import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Home,
});

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-4 items-center h-screen bg-gradient-to-br from-purple-300 via-purple-200 to-purple-400">
      <Button
        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg shadow-md hover:from-purple-700 hover:to-purple-900 transition-all duration-300 cursor-pointer"
        onClick={() => navigate({ to: "/yodhaPharmacy" })}
      >
        Yodha Pharmacy Web Page
      </Button>

      <Button
        className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-2 rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 cursor-pointer"
        onClick={() => navigate({ to: "/crazyorbit" })}
      >
        CrazyOrbit
      </Button>
    </div>
  );
}
