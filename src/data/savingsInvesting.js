export const savingsGoals = [
  {
    term: "Emergency Fund",
    icon: "🚨",
    timeframe: "First Priority",
    amount: "3-6 months expenses",
    description: "Safety net for unexpected costs like car repairs, medical bills, or job loss",
    tips: ["Start with $1,000", "Build to 3 months expenses", "Keep in savings account", "Don't touch unless emergency"]
  },
  {
    term: "Short-Term (< 3 years)",
    icon: "🎯",
    timeframe: "0-3 Years",
    amount: "Varies by goal",
    description: "Things you want soon: vacation, new phone, car down payment, holiday gifts",
    tips: ["Keep in high-yield savings", "Very low risk", "Easy to access", "Know exact amount needed"]
  },
  {
    term: "Medium-Term (3-10 years)",
    icon: "🏠",
    timeframe: "3-10 Years",
    amount: "Larger purchases",
    description: "Bigger goals: house down payment, wedding, starting a business",
    tips: ["Mix of savings and conservative investments", "Can handle some risk", "CDs or bonds good option", "Don't need daily access"]
  },
  {
    term: "Long-Term (10+ years)",
    icon: "🌅",
    timeframe: "10+ Years",
    amount: "Retirement & wealth",
    description: "Far future: retirement, children's college, financial independence",
    tips: ["Invest for growth", "Can handle more risk", "Time heals market ups/downs", "Compound interest is powerful"]
  }
];

export const savingStrategies = [
  {
    strategy: "Pay Yourself First",
    description: "Save before you spend on anything else",
    icon: "💰",
    steps: [
      "Set up automatic transfer on payday",
      "Treat savings like a bill you must pay",
      "Start with even 5-10% of income",
      "Increase percentage over time"
    ]
  },
  {
    strategy: "50/30/20 Rule",
    description: "Save 20% of income automatically",
    icon: "📊",
    steps: [
      "50% for needs (housing, food, utilities)",
      "30% for wants (fun, entertainment)",
      "20% for savings and debt payoff",
      "Adjust percentages to fit your situation"
    ]
  },
  {
    strategy: "Challenge Yourself",
    description: "Make saving a game",
    icon: "🎮",
    steps: [
      "52-week challenge: save $1 week 1, $2 week 2, etc.",
      "No-spend challenges for a week/month",
      "Round-up apps save spare change",
      "Compete with friends to save more"
    ]
  }
];

export const investmentTypes = [
  {
    type: "Stocks",
    icon: "📈",
    color: "from-blue-500 to-cyan-500",
    risk: "High",
    description: "Own a piece of a company",
    pros: ["High growth potential", "Dividends possible", "Easy to buy/sell", "Historically 10% annual return"],
    cons: ["Can lose value quickly", "Emotional roller coaster", "Need to research companies", "Short-term volatility"]
  },
  {
    type: "Bonds",
    icon: "🏦",
    color: "from-purple-500 to-pink-500",
    risk: "Low-Medium",
    description: "Loan money to companies or government",
    pros: ["Predictable income", "Less risky than stocks", "Protects during stock market drops", "Government bonds very safe"],
    cons: ["Lower returns than stocks", "Inflation can erode value", "Can lose money if sold early", "Interest rate risk"]
  },
  {
    type: "Index Funds",
    icon: "🎯",
    color: "from-cyan-500 to-teal-500",
    risk: "Medium",
    description: "Own many stocks in one investment",
    pros: ["Instant diversification", "Low fees", "Follows market", "Beginner-friendly"],
    cons: ["Can't beat market", "Still goes up and down", "No exciting picks", "Average returns"]
  },
  {
    type: "Real Estate",
    icon: "🏘️",
    color: "from-pink-500 to-rose-500",
    risk: "Medium-High",
    description: "Buy property to rent or sell",
    pros: ["Tangible asset", "Rental income", "Tax benefits", "Leverage with mortgage"],
    cons: ["Expensive to start", "Time and effort", "Can't easily sell", "Maintenance costs"]
  }
];

export const compoundInterestExample = [
  { years: 10, amount: "$17,908" },
  { years: 20, amount: "$46,204" },
  { years: 30, amount: "$100,627" },
  { years: 40, amount: "$206,919" }
];

export const investingPrinciples = [
  { principle: "Start Early", reason: "Time is your biggest advantage - compound interest works magic", icon: "⏰" },
  { principle: "Diversify", reason: "Don't put all eggs in one basket - spread risk across investments", icon: "🧺" },
  { principle: "Think Long-Term", reason: "Ignore short-term noise - markets go up over decades", icon: "🔭" },
  { principle: "Keep Fees Low", reason: "High fees eat returns - use low-cost index funds", icon: "💸" },
  { principle: "Stay Consistent", reason: "Invest regularly no matter what the market does", icon: "🔄" },
  { principle: "Avoid Timing", reason: "No one knows when markets will rise or fall", icon: "🎲" }
];
