import { Container } from "./components/Container/Container"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Title } from "./components/StyledComponents/StyledComponents"

import heroBackground from './assets/hero-background.jpg'

function App() {
  return (
    <div>
      <Navbar />

      <Title>Styled Hello</Title>

      <Hero background={heroBackground} />

      <Container />
    </div>
  )
}

export default App
