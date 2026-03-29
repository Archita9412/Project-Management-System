import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FolderKanban, ArrowLeft, Plus, Users, FileText, ListTodo,
  CheckCircle2, Circle, Clock, ChevronDown, ChevronRight, Moon, Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockProjects, mockTasks, mockMembers, mockNotes, type Task } from "@/data/mockData";
import { useTheme } from "@/components/ThemeProvider";

const statusConfig = {
  todo: { label: "Todo", icon: Circle, className: "bg-muted text-muted-foreground" },
  in_progress: { label: "In Progress", icon: Clock, className: "bg-warning/10 text-warning border-warning/20" },
  done: { label: "Done", icon: CheckCircle2, className: "bg-success/10 text-success border-success/20" },
};

type TabType = "tasks" | "members" | "notes";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = mockProjects.find((p) => p.id === projectId) || mockProjects[0];
  const [activeTab, setActiveTab] = useState<TabType>("tasks");
  const [expandedTask, setExpandedTask] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const tabs: { key: TabType; label: string; icon: typeof ListTodo }[] = [
    { key: "tasks", label: "Tasks", icon: ListTodo },
    { key: "members", label: "Members", icon: Users },
    { key: "notes", label: "Notes", icon: FileText },
  ];

  const TaskRow = ({ task, index }: { task: Task; index: number }) => {
    const config = statusConfig[task.status];
    const isExpanded = expandedTask === task.id;
    const completedSubtasks = task.subtasks.filter((s) => s.isCompleted).length;

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
        className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:shadow-foreground/5 transition-all"
      >
        <button
          onClick={() => setExpandedTask(isExpanded ? null : task.id)}
          className="w-full p-4 flex items-center gap-3 text-left hover:bg-muted/30 transition-colors"
        >
          {task.subtasks.length > 0 ? (
            isExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
          ) : (
            <div className="w-4" />
          )}
          <config.icon className="w-4 h-4 shrink-0" />
          <span className="font-medium text-sm flex-1">{task.title}</span>
          {task.assignee && <span className="text-xs text-muted-foreground hidden sm:block">{task.assignee}</span>}
          <Badge variant="outline" className={`text-xs rounded-lg ${config.className}`}>{config.label}</Badge>
          {task.subtasks.length > 0 && <span className="text-xs text-muted-foreground">{completedSubtasks}/{task.subtasks.length}</span>}
        </button>

        {isExpanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="border-t border-border px-4 py-3 bg-muted/20">
            <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
            {task.subtasks.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subtasks</span>
                {task.subtasks.map((subtask) => (
                  <label key={subtask.id} className="flex items-center gap-2.5 text-sm cursor-pointer group">
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                      subtask.isCompleted ? "bg-primary border-primary" : "border-muted-foreground/30 group-hover:border-primary/50"
                    }`}>
                      {subtask.isCompleted && <CheckCircle2 className="w-3 h-3 text-primary-foreground" />}
                    </div>
                    <span className={subtask.isCompleted ? "text-muted-foreground line-through" : ""}>{subtask.title}</span>
                  </label>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild className="shrink-0 rounded-xl">
              <Link to="/dashboard"><ArrowLeft className="w-4 h-4" /></Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <FolderKanban className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold truncate">{project.name}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <Button size="sm" className="gap-2 rounded-xl">
              <Plus className="w-4 h-4" /> Add
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>

        <div className="flex gap-1 mb-6 border-b border-border pb-px">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px rounded-t-lg ${
                activeTab === tab.key ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "tasks" && (
          <div className="space-y-3">
            {mockTasks.map((task, i) => <TaskRow key={task.id} task={task} index={i} />)}
          </div>
        )}

        {activeTab === "members" && (
          <div className="space-y-3">
            {mockMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="bg-card rounded-2xl border border-border p-4 flex items-center gap-3 hover:shadow-lg hover:shadow-foreground/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{member.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{member.email}</p>
                </div>
                <Badge variant="outline" className="text-xs capitalize rounded-lg">{member.role.replace("_", " ")}</Badge>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "notes" && (
          <div className="space-y-3">
            {mockNotes.map((note, i) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="bg-card rounded-2xl border border-border p-5 hover:shadow-lg hover:shadow-foreground/5 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-semibold">{note.title}</h3>
                  <span className="text-xs text-muted-foreground">{note.createdAt}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{note.content}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
