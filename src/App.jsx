import './App.css'
import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import SocialProof from './components/layout/SocialProof'
import Chaos from './components/layout/Chaos'
import AllInOne from './components/layout/AllInOne'
import Showcase from './components/layout/Showcase'
import Benefits from './components/layout/Benefits'
import Testimonials from './components/layout/Testimonials'
import Pricing from './components/layout/Pricing'
import FAQ from './components/layout/FAQ'
import CTA from './components/layout/CTA'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'

function App() {
  return (
    <div className="bg-bg text-text min-h-screen selection:bg-accent/30 selection:text-text-h font-sans overflow-x-hidden">
      <ScrollToTop />
      <Header/>
      <main>
        <Hero/>
        <SocialProof />
        <Chaos />
        <AllInOne />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer/>
    </div>
  )
}

export default App
