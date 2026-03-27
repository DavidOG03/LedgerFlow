import React from 'react'
import { HoverCard } from './HoverCard'

const FeatureCard = ({ icon, title, description, children, className = '' }) => {
  return (
    <HoverCard className={`p-8 gap-3 ${className}`}>
        {icon && <div className="mb-2 text-accent">{icon}</div>}
        <h3 className="text-text-h text-lg font-medium">{title}</h3>
        <p className="text-text/80 text-sm leading-relaxed mt-1">{description}</p>
        {children}
    </HoverCard>
  )
}
export default FeatureCard
