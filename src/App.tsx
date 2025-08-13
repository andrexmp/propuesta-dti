import { Hero } from './sections/Hero'
import { Context } from './sections/Context'
import { Objectives } from './sections/Objectives'
import { Initiatives } from './sections/Initiatives'
import { AISinBarreras } from './sections/AISinBarreras'
import { Benefits } from './sections/Benefits'
import { Footer } from './sections/Footer'
import { InitiativesDeep } from './sections/InitiativesDeep'
import { Pillars } from './sections/Pillars'
import { AlignmentMatrix } from './sections/AlignmentMatrix'

function App() {
  return (
    <div className="snap-container">
      <Hero />
      <Context />
      <Pillars />
      <Objectives />
      <Initiatives />
      <AlignmentMatrix />
      <InitiativesDeep />
      <AISinBarreras />
      <Benefits />
      <Footer />
    </div>
  )
}

export default App
