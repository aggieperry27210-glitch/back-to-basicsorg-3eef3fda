export const budgetScenarios = [
  {
    id: 1,
    type: "expense",
    title: "Car Trouble! 🚗",
    description: "Your car broke down and needs immediate repair.",
    choices: [
      { text: "Pay for full repair ($400)", impact: -400, category: "needs", feedback: "Good choice - your car is essential for work!" },
      { text: "Get budget repair ($200)", impact: -200, category: "needs", feedback: "Smart compromise - saves money but gets you moving." },
      { text: "Skip repair, use public transit", impact: -50, category: "wants", feedback: "Risky but frugal. Hope it doesn't cause bigger problems!" }
    ]
  },
  {
    id: 2,
    type: "income",
    title: "Bonus Income! 💰",
    description: "You received a $300 bonus at work!",
    choices: [
      { text: "Save it all", impact: 300, category: "savings", feedback: "Excellent! Building your emergency fund." },
      { text: "Save half, spend half", impact: 150, category: "savings", split: 150, feedback: "Balanced approach - treating yourself responsibly." },
      { text: "Spend it on something fun", impact: 0, category: "wants", feedback: "You deserve it, but remember your savings goals!" }
    ]
  },
  {
    id: 3,
    type: "expense",
    title: "Friend's Birthday Party 🎉",
    description: "Your best friend invited you to an expensive dinner ($80).",
    choices: [
      { text: "Go and pay full amount", impact: -80, category: "wants", feedback: "Memories matter, but watch your budget!" },
      { text: "Suggest cheaper alternative", impact: -30, category: "wants", feedback: "Good negotiation! Friends understand budgets." },
      { text: "Politely decline", impact: 0, category: "wants", feedback: "Tough choice, but staying on budget." }
    ]
  },
  {
    id: 4,
    type: "expense",
    title: "Streaming Services 📺",
    description: "You have 4 streaming subscriptions totaling $60/month.",
    choices: [
      { text: "Keep all subscriptions", impact: -60, category: "wants", feedback: "Entertainment is nice, but adds up fast!" },
      { text: "Cancel 2 subscriptions", impact: -30, category: "wants", feedback: "Smart cut! You probably don't use them all anyway." },
      { text: "Cancel all but one", impact: -15, category: "wants", feedback: "Frugal choice! One service is enough." }
    ]
  },
  {
    id: 5,
    type: "expense",
    title: "Medical Bill 🏥",
    description: "Unexpected doctor visit and medication ($150).",
    choices: [
      { text: "Pay immediately", impact: -150, category: "needs", feedback: "Health is wealth! Good priority." },
      { text: "Set up payment plan", impact: -50, category: "needs", feedback: "Manageable approach. Spreads the cost." }
    ]
  },
  {
    id: 6,
    type: "income",
    title: "Side Hustle Opportunity 💼",
    description: "You can earn $200 doing freelance work this weekend.",
    choices: [
      { text: "Take the gig", impact: 200, category: "savings", feedback: "Hustle pays off! Extra income secured." },
      { text: "Decline - need rest", impact: 0, category: "wants", feedback: "Self-care matters too. Balance is key." }
    ]
  },
  {
    id: 7,
    type: "expense",
    title: "Grocery Shopping 🛒",
    description: "Time to buy groceries for the week.",
    choices: [
      { text: "Buy premium/organic ($120)", impact: -120, category: "needs", feedback: "Quality food, but expensive!" },
      { text: "Buy regular groceries ($80)", impact: -80, category: "needs", feedback: "Smart balance of quality and cost." },
      { text: "Buy budget basics ($50)", impact: -50, category: "needs", feedback: "Frugal choice! Meal planning helps." }
    ]
  },
  {
    id: 8,
    type: "expense",
    title: "New Phone? 📱",
    description: "Your phone is old but working. New model is $800 (or $40/month).",
    choices: [
      { text: "Buy new phone outright", impact: -800, category: "wants", feedback: "Big expense! Could have saved that money." },
      { text: "Finance it monthly", impact: -40, category: "wants", feedback: "Debt adds up. Is it really necessary?" },
      { text: "Keep current phone", impact: 0, category: "wants", feedback: "Wise choice! If it works, don't replace it." }
    ]
  },
  {
    id: 9,
    type: "income",
    title: "Tax Refund! 💵",
    description: "You got a $600 tax refund!",
    choices: [
      { text: "Save it all", impact: 600, category: "savings", feedback: "Amazing! Big boost to your savings goal." },
      { text: "Pay off debt", impact: 300, category: "needs", split: 300, feedback: "Smart! Reducing debt is investing in yourself." },
      { text: "Splurge on vacation", impact: 0, category: "wants", feedback: "Fun now, but goals delayed. Worth it?" }
    ]
  },
  {
    id: 10,
    type: "expense",
    title: "Coffee Habit ☕",
    description: "Daily $5 coffee = $150/month. Time to evaluate?",
    choices: [
      { text: "Keep buying daily", impact: -150, category: "wants", feedback: "Small purchases add up to big money!" },
      { text: "Cut to 3x per week", impact: -60, category: "wants", feedback: "Good compromise! Saves $90/month." },
      { text: "Make coffee at home", impact: -20, category: "wants", feedback: "Frugal win! Saves $130/month." }
    ]
  }
];
