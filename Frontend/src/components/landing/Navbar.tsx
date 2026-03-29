import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-heading font-bold text-lg tracking-tight">
          <img src={logo} alt="Project Hub" className="w-9 h-9 rounded-xl" />
          <span>Project Hub</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
          </button>

          {isLanding ? (
            <>
              <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild className="rounded-xl">
                <Link to="/register">Get Started</Link>
              </Button>
            </>
          ) : (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">Home</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
