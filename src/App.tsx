import { createSignal } from 'solid-js'
import Banner from './components/Banner'
import Content from './components/Content'
import syntheticStyles from './components/synthetic.module.css';
import Navigation from './components/Navigation';
import poems from './data/poems';

function App() {
  const [theme, setTheme] = createSignal(syntheticStyles)

  const [activePoem, setActivePoem] = createSignal(poems[0])

  return (
    <>
      <Banner themeSetter={setTheme} />
      <Navigation setActivePoem={setActivePoem} currentTheme={theme} />
      <Content currentTheme={theme} activePoem={activePoem} />
    </>
  )
}

export default App
