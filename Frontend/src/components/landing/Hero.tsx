import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 px-4">
      {/* Decorative blobs */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-primary/15 blob-shape animate-float blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-secondary/15 blob-shape animate-float-slow blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Project Management, Reimagined
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5"
          >
            Ship projects{" "}
            <span className="text-primary">with clarity</span>
            <span className="text-secondary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
          >
            Organize projects, manage tasks, and collaborate with your team — all in one streamlined workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button variant="hero" size="lg" asChild className="rounded-xl text-base px-7 h-12">
              <Link to="/register" className="gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="rounded-xl text-base px-7 h-12">
              <Link to="/login">Sign In</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 mt-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success" />
              Free to start
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              No credit card
            </span>
          </motion.div>
        </div>

        {/* Right — Visual card stack */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          {/* Background card */}
          <div className="absolute top-6 -left-4 right-4 bottom-0 bg-secondary/10 rounded-3xl rotate-3" />
          {/* Main card */}
          <div className="relative bg-card rounded-3xl border border-border shadow-2xl shadow-foreground/5 p-6 space-y-4">
            {/* Mini task header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Website Redesign</span>
            </div>

            {/* Mock tasks */}
            {[
              { title: "Design homepage mockups", status: "Done", color: "bg-success" },
              { title: "Implement auth flow", status: "In Progress", color: "bg-warning" },
              { title: "Set up CI/CD pipeline", status: "Todo", color: "bg-muted-foreground/30" },
              { title: "Database schema", status: "Todo", color: "bg-muted-foreground/30" },
            ].map((task, i) => (
              <motion.div
                key={task.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className={`w-2.5 h-2.5 rounded-full ${task.color} shrink-0`} />
                <span className="text-sm font-medium flex-1">{task.title}</span>
                <span className="text-xs text-muted-foreground">{task.status}</span>
              </motion.div>
            ))}

            {/* Progress bar */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>Sprint Progress</span>
                <span className="font-semibold text-foreground">25%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "25%" }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
