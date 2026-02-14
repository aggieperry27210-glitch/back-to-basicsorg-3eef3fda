export const achievementsConfig = [
  {
    title: "Getting Started",
    description: "Complete your first quiz",
    icon: "🎯",
    checkEarned: (userProgress) => userProgress.length >= 1,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Quiz Master",
    description: "Complete 5 quizzes",
    icon: "📚",
    checkEarned: (userProgress) => userProgress.length >= 5,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Perfect Score",
    description: "Get 100% on any quiz",
    icon: "💯",
    checkEarned: (userProgress) => userProgress.some(p => p.score === 100),
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Politics Expert",
    description: "Complete all Politics quizzes",
    icon: "🏛️",
    checkEarned: (userProgress, completedPolitics, politicsQuizzes) => 
      completedPolitics === politicsQuizzes.length && politicsQuizzes.length > 0,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Finance Guru",
    description: "Complete all Finance quizzes",
    icon: "💰",
    checkEarned: (userProgress, completedPolitics, politicsQuizzes, completedFinance, financeQuizzes) => 
      completedFinance === financeQuizzes.length && financeQuizzes.length > 0,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Overachiever",
    description: "Maintain 90%+ average score",
    icon: "⭐",
    checkEarned: (userProgress, completedPolitics, politicsQuizzes, completedFinance, financeQuizzes, averageScore) => 
      averageScore >= 90 && userProgress.length >= 3,
    color: "from-pink-500 to-rose-500"
  },
];
