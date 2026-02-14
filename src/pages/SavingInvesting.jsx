import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Coins, Target, DollarSign, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { savingsGoals, savingStrategies, investmentTypes, compoundInterestExample, investingPrinciples } from "@/data/savingsInvesting";

export default function SavingInvesting() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to={createPageUrl("Finance")}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Finance
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600/30 to-teal-600/30 border border-cyan-500/50 backdrop-blur-xl text-cyan-300 text-sm font-semibold mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            Build Your Wealth
          </motion.div>

          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Saving & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">Investing</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn how to save effectively and invest wisely to build long-term wealth
          </p>
        </motion.div>

        {/* Savings vs Investing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Saving vs. Investing</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Coins className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Saving</h3>
              </div>
              <p className="text-gray-300 mb-4">Putting money aside in a safe place for short-term goals</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">✓ Low or no risk</p>
                <p className="text-sm text-gray-400">✓ Easy to access</p>
                <p className="text-sm text-gray-400">✓ Minimal returns (1-5%)</p>
                <p className="text-sm text-gray-400">✓ Use for emergencies & near-term goals</p>
              </div>
            </div>

            <div className="bg-cyan-900/20 border border-cyan-700/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Investing</h3>
              </div>
              <p className="text-gray-300 mb-4">Buying assets that can grow in value over time</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">✓ Higher risk but higher returns</p>
                <p className="text-sm text-gray-400">✓ Money tied up longer</p>
                <p className="text-sm text-gray-400">✓ Historically 7-10% annual returns</p>
                <p className="text-sm text-gray-400">✓ Use for long-term goals (10+ years)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Savings Goals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Set Your Savings Goals
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {savingsGoals.map((goal, index) => (
              <motion.div
                key={goal.term}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{goal.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{goal.term}</h3>
                      <div className="flex gap-3 mb-2">
                        <span className="text-cyan-400 text-sm font-semibold">{goal.timeframe}</span>
                        <span className="text-teal-400 text-sm font-semibold">{goal.amount}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{goal.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {goal.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-gray-300 text-xs bg-slate-800/50 rounded-lg p-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Saving Strategies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Smart Saving Strategies
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {savingStrategies.map((item, index) => (
              <motion.div
                key={item.strategy}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-2xl p-6"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.strategy}</h3>
                <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                
                <div className="space-y-2">
                  {item.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-300 text-xs">
                      <span className="text-cyan-400 mt-1">→</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compound Interest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 border border-cyan-700/40 rounded-3xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <Target className="w-8 h-8 text-cyan-400" />
            The Power of Compound Interest
          </h2>
          
          <p className="text-gray-300 text-center mb-8 text-lg max-w-2xl mx-auto">
            If you invest <span className="text-cyan-400 font-bold">$100/month</span> at <span className="text-teal-400 font-bold">8% annual return</span>, here's how your money grows:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {compoundInterestExample.map((item, index) => (
              <motion.div
                key={item.years}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="bg-slate-900/50 rounded-xl p-6 text-center"
              >
                <p className="text-4xl font-black text-cyan-400 mb-2">{item.years}</p>
                <p className="text-xs text-gray-500 mb-3">years</p>
                <p className="text-2xl font-bold text-white">{item.amount}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-400 mt-6 text-sm">
            That's the magic of compound interest - your money makes money, and that money makes more money!
          </p>
        </motion.div>

        {/* Investment Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Types of Investments
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {investmentTypes.map((investment, index) => (
              <motion.div
                key={investment.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${investment.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${investment.color}`} />
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">{investment.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{investment.type}</h3>
                        <span className="text-sm text-gray-400">Risk: {investment.risk}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{investment.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-green-400 font-bold text-sm mb-2">✓ Pros:</p>
                        <ul className="space-y-1">
                          {investment.pros.map((pro, idx) => (
                            <li key={idx} className="text-gray-400 text-xs">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-red-400 font-bold text-sm mb-2">⚠ Cons:</p>
                        <ul className="space-y-1">
                          {investment.cons.map((con, idx) => (
                            <li key={idx} className="text-gray-400 text-xs">• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investing Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Core Investing Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investingPrinciples.map((item, index) => (
              <motion.div
                key={item.principle}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border border-cyan-700/40 rounded-xl p-6 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-3 text-lg">{item.principle}</h3>
                <p className="text-gray-400 text-sm">{item.reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="text-center"
        >
          <Link
            to={createPageUrl("Finance")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300 text-lg"
          >
            Ready to Test Your Knowledge?
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}