
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <div className="h-10 w-auto mr-2">
        <img 
          src="/lovable-uploads/485e0025-e932-4a74-84a4-060e70ad4a6e.png" 
          alt="Patinhas AgroPet"
          className={cn(
            "h-full transition-all duration-300",
            scrolled ? "scale-90" : "scale-100"
          )}
        />
      </div>
      <div
        className={cn(
          "text-2xl font-bold transition-all duration-300 font-codec",
          scrolled ? "text-primary" : "text-primary",
          "hover:scale-105"
        )}
      >
        Patinhas
      </div>
    </a>
  );
};

export default Logo;
