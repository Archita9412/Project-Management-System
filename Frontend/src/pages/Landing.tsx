import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />

      {/* CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl border border-border p-12">
            <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 blob-shape blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/10 blob-shape blur-2xl" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 relative">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto relative">
              Join teams shipping projects faster with clarity and confidence.
            </p>
            <Button variant="hero" size="lg" asChild className="rounded-xl text-base px-8 h-12 relative">
              <Link to="/register" className="gap-2">
                Start for Free <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Project Hub. Built for teams that ship.</p>
      </footer>
    </div>
  );
};

export default Landing;
