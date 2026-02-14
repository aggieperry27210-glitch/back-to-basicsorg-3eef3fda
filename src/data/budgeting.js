export const budgetSteps = [
  {
    step: "1",
    title: "Calculate Your Income",
    icon: "💰",
    description: "Know how much money you have coming in",
    tips: [
      "Include all sources: job, allowance, gifts",
      "Use your net income (after taxes)",
      "Track monthly average if income varies",
      "Don't count money you haven't received yet"
    ]
  },
  {
    step: "2",
    title: "List All Expenses",
    icon: "📝",
    description: "Write down everything you spend money on",
    tips: [
      "Track for a full month to get accurate picture",
      "Include small purchases (they add up!)",
      "Separate needs from wants",
      "Don't forget annual expenses (divide by 12)"
    ]
  },
  {
    step: "3",
    title: "Set Financial Goals",
    icon: "🎯",
    description: "Decide what you're saving for",
    tips: [
      "Short-term: Emergency fund, new phone",
      "Long-term: College, car, first apartment",
      "Make goals specific and measurable",
      "Write them down and review regularly"
    ]
  },
  {
    step: "4",
    title: "Create Your Budget",
    icon: "📊",
    description: "Plan where every dollar will go",
    tips: [
      "Use the 50/30/20 rule as a starting point",
      "Build in savings first (pay yourself first)",
      "Leave room for unexpected expenses",
      "Be realistic about your spending habits"
    ]
  },
  {
    step: "5",
    title: "Track & Adjust",
    icon: "🔄",
    description: "Monitor spending and make changes",
    tips: [
      "Review weekly to stay on track",
      "Use apps or spreadsheets to track",
      "Adjust categories as needed",
      "Celebrate when you meet goals!"
    ]
  }
];

export const budgetingMethods = [
  {
    name: "50/30/20 Rule",
    color: "from-blue-500 to-cyan-500",
    description: "Simple percentage-based budgeting",
    breakdown: [
      { percentage: "50%", category: "Needs", examples: "Rent, food, utilities, transportation" },
      { percentage: "30%", category: "Wants", examples: "Entertainment, dining out, hobbies" },
      { percentage: "20%", category: "Savings & Debt", examples: "Emergency fund, goals, paying off debt" }
    ]
  },
  {
    name: "Zero-Based Budget",
    color: "from-purple-500 to-pink-500",
    description: "Give every dollar a specific job",
    breakdown: [
      { percentage: "100%", category: "Assigned", examples: "Income - Expenses = $0 (on paper)" },
      { percentage: "✓", category: "Intentional", examples: "Every dollar has a purpose before the month starts" },
      { percentage: "📊", category: "Detailed", examples: "Track every category and transaction" }
    ]
  },
  {
    name: "Envelope System",
    color: "from-cyan-500 to-teal-500",
    description: "Cash-based spending control",
    breakdown: [
      { percentage: "💵", category: "Cash Only", examples: "Withdraw cash for spending categories" },
      { percentage: "✉️", category: "Envelopes", examples: "One envelope per category (groceries, fun, etc.)" },
      { percentage: "🛑", category: "Hard Limit", examples: "When envelope is empty, stop spending" }
    ]
  }
];

export const commonMistakes = [
  { mistake: "Not tracking small purchases", solution: "Small expenses add up! Track everything, even coffee." },
  { mistake: "Being too restrictive", solution: "Leave room for fun or you won't stick to it." },
  { mistake: "Forgetting irregular expenses", solution: "Plan for annual costs like gifts, insurance, etc." },
  { mistake: "Not building an emergency fund", solution: "Save for unexpected expenses first." },
  { mistake: "Giving up after one bad month", solution: "Budgeting is a skill - it takes practice!" }
];
