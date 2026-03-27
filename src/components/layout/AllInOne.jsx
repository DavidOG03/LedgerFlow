import React from 'react'
import { AmbientGlow } from '../ui/AmbientGlow'
import { AnimatedText } from '../ui/AnimatedText'
import { AnimatedReveal } from '../ui/AnimatedReveal'
import { HoverCard } from '../ui/HoverCard'
import { FileText, Landmark, BarChart3, ArrowRight } from 'lucide-react'

const AllInOne = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <AmbientGlow position="top-right" />
      <div className="flex flex-col items-center text-center mb-16 max-w-6xl mx-auto">
        <AnimatedText as="h2" className="text-3xl md:text-5xl font-bold text-text-h mb-6 tracking-tighter">
          Everything You Need <br/>to Run Your <br/> Finances In One Place
        </AnimatedText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Card 1 */}
        <HoverCard className="p-8 gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <FileText size={20} />
            </div>
            <h3 className="text-xl font-semibold text-text-h mt-2">Smart Invoicing</h3>
            <p className="text-text/80 text-sm leading-relaxed mb-4">
                Look pro and increase invoice payments. Automated follow-ups ensure you get paid on time.
            </p>
        </HoverCard>

        {/* Card 2 */}
        <HoverCard className="p-8 gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Landmark size={20} />
            </div>
            <h3 className="text-xl font-semibold text-text-h mt-2">Bank Account Integration</h3>
            <p className="text-text/80 text-sm leading-relaxed">
                Connect everything from one place. Easy connect and automatically get deep insights.
            </p>
        </HoverCard>

        {/* Card 3 */}
        <HoverCard className="p-8 gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <BarChart3 size={20} />
            </div>
            <h3 className="text-xl font-semibold text-text-h mt-2">Expense Tracking</h3>
            <p className="text-text/80 text-sm leading-relaxed">
                Control how you spend proactively. Automatically recognize every single transaction.
            </p>
        </HoverCard>
      </div>

      <HoverCard className="p-8 flex-col md:grid-cols-2 items-center justify-between gap-6 h-auto">
          <div className="flex-1 w-full">
              <h3 className="text-xl font-semibold text-text-h mb-2">Unified Financial Statement</h3>
              <AnimatedReveal as="p" className="text-text/80 text-sm mb-4">
                  Get a clear view of all the numbers regardless. Need access? Give export files to your accountant without granting access everywhere.
              </AnimatedReveal>
              <a href="#" className="text-accent text-sm font-semibold flex items-center gap-2 hover:underline">
                  Explore Dashboard
                  <ArrowRight size={16} />
              </a>
          </div>
          <div className="bg-card-alt rounded-xl h-32 border border-border/50 flex flex-col justify-center px-6 gap-3 z-10 mt-8 md:mt-0 md:w-80 flex-shrink-0">
              <div className="flex items-center justify-between">
                  <div className="h-2 w-1/4 bg-gray-600 rounded"></div>
                  <div className="h-2 w-12 bg-accent/50 rounded"></div>
              </div>
              <div className="h-px w-full bg-border"></div>
              <div className="flex items-center justify-between">
                  <div className="h-2 w-1/3 bg-gray-600 rounded"></div>
                  <div className="h-2 w-16 bg-accent/50 rounded"></div>
              </div>
          </div>
      </HoverCard>
    </section>
  )
}

export default AllInOne
