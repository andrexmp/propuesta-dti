import { Hero } from './sections/Hero'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="snap-container">
      <Hero />
      {/* Comentando temporalmente para debug
      <Context />
      <Pillars />
      <Objectives />
      <Initiatives />
      <AlignmentMatrix />
      <InitiativesDeep />
      <AISinBarreras />
      <Benefits />
      */}
      <Footer />
    </div>
  )
}

export default App
