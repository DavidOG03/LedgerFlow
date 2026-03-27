import React, { useState } from 'react'
import { AmbientGlow } from '../ui/AmbientGlow'
import { AnimatedText } from '../ui/AnimatedText';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between text-left focus:outline-none"
      >
        <h3 className="text-lg font-medium text-text-h">{question}</h3>
        <span className={`text-text/80 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 text-text/80 leading-relaxed pr-8">
          {answer}
        </div>
      )}
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: "Is my financial data secure?",
      answer: "Yes, we use bank-level 256-bit encryption to protect your data. We never store your banking credentials and only use read-only access for financial integrations."
    },
    {
      question: "Can I import my old accounting?",
      answer: "Absolutely. We support direct CSV imports and have automated migration tools for popular accounting software like QuickBooks, Xero, and FreshBooks."
    },
    {
      question: "How to transition open APIs for multi?",
      answer: "Our documentation provides detailed guides on migrating from existing setups to our comprehensive API. Our support team is also available to assist with complex migrations."
    }
  ];

  return (
    <section className="py-24 max-w-3xl mx-auto px-4 relative overflow-hidden">
      <AmbientGlow position="bottom-left" />
      <AnimatedText as="h2" className="text-3xl md:text-5xl font-bold text-text-h mb-12 text-center">Frequently Asked Questions</AnimatedText>
      <div className="flex flex-col">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

export default FAQ
