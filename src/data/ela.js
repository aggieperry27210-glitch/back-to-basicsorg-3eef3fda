export const vocabularyWords = {
  easy: [
    { word: "Happy", options: ["Sad", "Joyful", "Angry", "Tired"], correct: 1 },
    { word: "Big", options: ["Small", "Large", "Tiny", "Little"], correct: 1 },
    { word: "Fast", options: ["Quick", "Slow", "Late", "Early"], correct: 0 },
    { word: "Smart", options: ["Dumb", "Intelligent", "Silly", "Funny"], correct: 1 },
    { word: "Beautiful", options: ["Ugly", "Pretty", "Mean", "Nice"], correct: 1 },
  ],
  medium: [
    { word: "Eloquent", options: ["Articulate", "Silent", "Confused", "Angry"], correct: 0 },
    { word: "Diligent", options: ["Lazy", "Hardworking", "Sleepy", "Quick"], correct: 1 },
    { word: "Benevolent", options: ["Mean", "Kind", "Strict", "Funny"], correct: 1 },
    { word: "Resilient", options: ["Weak", "Strong", "Tough", "Fragile"], correct: 2 },
    { word: "Meticulous", options: ["Careful", "Careless", "Fast", "Slow"], correct: 0 },
  ],
  hard: [
    { word: "Ubiquitous", options: ["Rare", "Everywhere", "Hidden", "Lost"], correct: 1 },
    { word: "Ephemeral", options: ["Permanent", "Temporary", "Eternal", "Long"], correct: 1 },
    { word: "Ambiguous", options: ["Clear", "Unclear", "Bright", "Dark"], correct: 1 },
    { word: "Pragmatic", options: ["Practical", "Idealistic", "Lazy", "Busy"], correct: 0 },
    { word: "Paradox", options: ["Truth", "Contradiction", "Lie", "Story"], correct: 1 },
  ],
};

export const grammarQuestions = {
  easy: [
    { question: "She _____ to school every day.", options: ["go", "goes", "going", "went"], correct: 1 },
    { question: "They _____ playing soccer.", options: ["is", "am", "are", "be"], correct: 2 },
    { question: "I _____ my homework yesterday.", options: ["do", "did", "does", "doing"], correct: 1 },
  ],
  medium: [
    { question: "The book _____ on the table is mine.", options: ["laying", "lying", "lies", "laid"], correct: 1 },
    { question: "Neither the teacher nor the students _____ ready.", options: ["is", "are", "was", "be"], correct: 1 },
    { question: "She speaks _____ than her sister.", options: ["more clearly", "more clear", "clearer", "most clear"], correct: 0 },
  ],
  hard: [
    { question: "The committee _____ reached a decision.", options: ["have", "has", "had", "having"], correct: 1 },
    { question: "If I _____ you, I would study harder.", options: ["am", "was", "were", "be"], correct: 2 },
    { question: "The data _____ been analyzed carefully.", options: ["has", "have", "is", "are"], correct: 1 },
  ],
};
