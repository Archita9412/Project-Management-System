import { motion } from "framer-motion";
import {
  Shield, ListTodo, FileText, Users, Upload, Bell,
} from "lucide-react";

const features = [
  { icon: Shield, title: "Role-Based Access", description: "Admin, Project Admin, and Member tiers for secure collaboration.", color: "text-primary bg-primary/10" },
  { icon: ListTodo, title: "Tasks & Subtasks", description: "Hierarchical task management with status tracking and assignees.", color: "text-secondary bg-secondary/10" },
  { icon: FileText, title: "Project Notes", description: "Keep docs and notes organized for your entire team.", color: "text-accent bg-accent/10" },
  { icon: Users, title: "Team Collaboration", description: "Invite via email, manage roles, stay aligned on goals.", color: "text-warning bg-warning/10" },
  { icon: Upload, title: "File Attachments", description: "Attach files to tasks for full context on every item.", color: "text-primary bg-primary/10" },
  { icon: Bell, title: "Notifications", description: "Email verification, password resets, and team invitations.", color: "text-secondary bg-secondary/10" },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wider uppercase">Features</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Everything you need to <span className="text-primary">ship</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A complete toolkit for teams that move fast and build together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-11 h-11 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
