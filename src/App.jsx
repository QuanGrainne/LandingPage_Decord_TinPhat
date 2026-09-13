import './styles/global.css'

import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ProductCategories from './sections/ProductCategories'
import SeasonalTimeline from './sections/SeasonalTimeline'
import ProductShowcase from './sections/ProductShowcase'
import Capability from './sections/Capability'
import Process from './sections/Process'
import ContactCTA from './sections/ContactCTA'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductCategories />
        <SeasonalTimeline />
        <ProductShowcase />
        <Capability />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
