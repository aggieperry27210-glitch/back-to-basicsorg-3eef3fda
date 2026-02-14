import { BookOpen, TrendingUp, FileSearch, Target } from "lucide-react";
import { createPageUrl } from "@/utils";

export const pathways = [
  {
    title: "Politics",
    description: "Understand how our government works, from the Constitution to current events",
    icon: BookOpen,
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    hoverGradient: "group-hover:from-blue-400 group-hover:via-blue-500 group-hover:to-cyan-500",
    bgPattern: "bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)]",
    path: createPageUrl("Politics"),
    stats: { quizzes: "12+", topics: "Government, Rights, Elections" },
    emoji: "🏛️"
  },
  {
    title: "Finance",
    description: "Master money management, budgeting, and financial decision-making",
    icon: TrendingUp,
    gradient: "from-purple-500 via-pink-600 to-rose-600",
    hoverGradient: "group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-rose-500",
    bgPattern: "bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.1),transparent_50%)]",
    path: createPageUrl("Finance"),
    stats: { quizzes: "12+", topics: "Budgeting, Credit, Investing" },
    emoji: "💰"
  },
  {
    title: "Math",
    description: "Build essential math skills from arithmetic to advanced problem-solving",
    icon: TrendingUp,
    gradient: "from-green-500 via-emerald-600 to-teal-600",
    hoverGradient: "group-hover:from-green-400 group-hover:via-emerald-500 group-hover:to-teal-500",
    bgPattern: "bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.1),transparent_50%)]",
    path: createPageUrl("Math"),
    stats: { quizzes: "Coming Soon", topics: "Algebra, Geometry, Statistics" },
    emoji: "📐"
  },
  {
    title: "ELA",
    description: "Improve reading comprehension, writing, grammar, and vocabulary skills",
    icon: BookOpen,
    gradient: "from-indigo-500 via-violet-600 to-purple-600",
    hoverGradient: "group-hover:from-indigo-400 group-hover:via-violet-500 group-hover:to-purple-500",
    bgPattern: "bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.1),transparent_50%)]",
    path: createPageUrl("ELA"),
    stats: { quizzes: "Coming Soon", topics: "Reading, Writing, Grammar" },
    emoji: "📚"
  },
  {
    title: "Investment Simulator",
    description: "Practice investing with virtual money and learn how the stock market works",
    icon: TrendingUp,
    gradient: "from-green-500 via-emerald-600 to-teal-600",
    hoverGradient: "group-hover:from-green-400 group-hover:via-emerald-500 group-hover:to-teal-500",
    bgPattern: "bg-[radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.1),transparent_50%)]",
    path: createPageUrl("InvestmentSimulator"),
    stats: { feature: "Virtual Trading", capability: "Real-time Simulation" },
    emoji: "📈"
  },
  {
    title: "Budget Challenge",
    description: "Navigate real-world spending scenarios and master money management skills",
    icon: Target,
    gradient: "from-yellow-500 via-orange-600 to-red-600",
    hoverGradient: "group-hover:from-yellow-400 group-hover:via-orange-500 group-hover:to-red-500",
    bgPattern: "bg-[radial-gradient(circle_at_30%_60%,rgba(234,179,8,0.1),transparent_50%)]",
    path: createPageUrl("BudgetChallenge"),
    stats: { feature: "Interactive Game", capability: "Real Scenarios" },
    emoji: "🎯"
  },
  {
    title: "News Bias Checker",
    description: "Analyze articles to detect political bias and become a critical thinker",
    icon: FileSearch,
    gradient: "from-cyan-500 via-sky-600 to-blue-600",
    hoverGradient: "group-hover:from-cyan-400 group-hover:via-sky-500 group-hover:to-blue-500",
    bgPattern: "bg-[radial-gradient(circle_at_50%_20%,rgba(6,182,212,0.1),transparent_50%)]",
    path: createPageUrl("NewsBiasChecker"),
    stats: { feature: "AI-Powered", capability: "Real-time Analysis" },
    emoji: "🔍"
  },
];
