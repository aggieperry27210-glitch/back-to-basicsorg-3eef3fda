export const creditScoreFactors = [
  {
    factor: "Payment History",
    weight: "35%",
    icon: "📅",
    color: "from-blue-500 to-cyan-500",
    description: "Most important factor - do you pay bills on time?",
    tips: [
      "Always pay at least the minimum by due date",
      "Set up automatic payments",
      "One late payment can hurt your score for years",
      "Payment history from all credit accounts matters"
    ]
  },
  {
    factor: "Credit Utilization",
    weight: "30%",
    icon: "📊",
    color: "from-purple-500 to-pink-500",
    description: "How much credit you're using vs. available credit",
    tips: [
      "Keep usage below 30% of available credit",
      "Lower is better - aim for under 10%",
      "Pay down balances before statement closes",
      "Don't max out credit cards"
    ]
  },
  {
    factor: "Credit History Length",
    weight: "15%",
    icon: "⏳",
    color: "from-cyan-500 to-teal-500",
    description: "How long you've had credit accounts",
    tips: [
      "Older accounts help your score",
      "Keep oldest credit cards open",
      "Don't close unused cards with good history",
      "Time builds good credit - be patient"
    ]
  },
  {
    factor: "Credit Mix",
    weight: "10%",
    icon: "🔀",
    color: "from-pink-500 to-rose-500",
    description: "Types of credit you have (cards, loans, etc.)",
    tips: [
      "Having different types can help",
      "Don't open accounts just for mix",
      "Credit cards, car loans, student loans, mortgages",
      "Not as important as other factors"
    ]
  },
  {
    factor: "New Credit",
    weight: "10%",
    icon: "✨",
    color: "from-teal-500 to-emerald-500",
    description: "Recent credit applications and new accounts",
    tips: [
      "Too many applications hurt your score",
      "Hard inquiries stay on report 2 years",
      "Opening many accounts looks risky",
      "Shop for rates within 30 days (counts as one inquiry)"
    ]
  }
];

export const debtTypes = [
  {
    type: "Good Debt",
    icon: "✅",
    color: "from-green-500 to-emerald-500",
    description: "Debt that can increase your net worth or income",
    examples: [
      "Student loans - investing in education and future earnings",
      "Mortgage - building equity in a home",
      "Business loans - growing income potential",
      "Low-interest loans for appreciating assets"
    ]
  },
  {
    type: "Bad Debt",
    icon: "❌",
    color: "from-red-500 to-rose-500",
    description: "High-interest debt for things that lose value",
    examples: [
      "Credit card debt with high interest (15%+)",
      "Payday loans - extremely high rates",
      "Financing depreciating items (furniture, phones)",
      "Any debt you can't afford to repay"
    ]
  }
];

export const payoffStrategies = [
  {
    name: "Debt Avalanche",
    emoji: "🏔️",
    bestFor: "Saving the most money",
    how: "Pay off highest interest rate debts first",
    pros: ["Saves most money on interest", "Mathematically optimal", "Fastest way out of debt"],
    cons: ["Can feel slow if highest rate has big balance", "Requires discipline"]
  },
  {
    name: "Debt Snowball",
    emoji: "⛄",
    bestFor: "Quick wins and motivation",
    how: "Pay off smallest balances first",
    pros: ["Quick wins boost motivation", "Fewer bills to manage sooner", "Psychologically satisfying"],
    cons: ["May pay more interest overall", "Takes longer mathematically"]
  },
  {
    name: "Debt Consolidation",
    emoji: "🔄",
    bestFor: "Simplifying multiple debts",
    how: "Combine debts into one loan",
    pros: ["One payment instead of many", "May lower interest rate", "Easier to manage"],
    cons: ["May extend repayment time", "Needs good credit for best rates", "Possible fees"]
  }
];

export const creditCardTips = [
  { tip: "Pay full balance every month", why: "Avoid interest charges completely" },
  { tip: "Never pay just the minimum", why: "You'll pay massive interest over time" },
  { tip: "Use less than 30% of limit", why: "Keeps credit score healthy" },
  { tip: "Pay before due date", why: "Late payments hurt credit score" },
  { tip: "Check statements for errors", why: "Catch fraud or billing mistakes" },
  { tip: "Don't cash advance", why: "High fees and interest start immediately" }
];
