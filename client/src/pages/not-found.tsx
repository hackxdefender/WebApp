import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 text-center">
      <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center mb-6 animate-pulse">
        <AlertTriangle className="w-12 h-12 text-destructive" />
      </div>
      
      <h1 className="text-6xl font-bold text-white mb-2 font-display">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
      
      <p className="text-muted-foreground max-w-md mb-8">
        The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link href="/">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
