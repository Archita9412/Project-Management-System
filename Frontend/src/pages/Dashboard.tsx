import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus, Users, ListTodo, LogOut, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockProjects } from "@/data/mockData";
import { useTheme } from "@/components/ThemeProvider";
import logo from "@/assets/logo.png";

const colorAccents = [
  "from-primary/20 to-primary/5",
  "from-secondary/20 to-secondary/5",
  "from-accent/20 to-accent/5",
  "from-warning/20 to-warning/5",
];

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 font-heading font-bold tracking-tight">
            <img src={logo} alt="Project Hub" className="w-8 h-8 rounded-lg" />
            Project Hub
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground mr-1 hidden sm:block">demo@example.com</span>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/"><LogOut className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl font-bold">Projects</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage your team's projects</p>
          </div>
          <Button size="sm" className="gap-2 rounded-xl">
            <Plus className="w-4 h-4" />
            New Project
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/project/${project.id}`}
                className="block bg-card rounded-2xl border border-border p-5 hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${colorAccents[i % colorAccents.length]} mb-4`} />
                <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> {project.memberCount} members
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ListTodo className="w-3.5 h-3.5" /> {project.taskCount} tasks
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
