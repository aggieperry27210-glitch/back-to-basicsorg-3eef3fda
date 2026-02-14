import { Home, BookOpen, TrendingUp, FileSearch, Trophy, Info } from "lucide-react";
import { createPageUrl } from "@/utils";

export const navItems = [
  { name: "Home", path: createPageUrl("Home"), icon: Home },
  { name: "Politics", path: createPageUrl("Politics"), icon: BookOpen },
  { name: "Finance", path: createPageUrl("Finance"), icon: TrendingUp },
  { name: "Math", path: createPageUrl("Math"), icon: BookOpen },
  { name: "ELA", path: createPageUrl("ELA"), icon: BookOpen },
  { name: "Progress", path: createPageUrl("Progress"), icon: Trophy },
  { name: "Bias Checker", path: createPageUrl("NewsBiasChecker"), icon: FileSearch },
  { name: "About", path: createPageUrl("AboutUs"), icon: Info },
];
