import { MantineProvider } from '@mantine/core'
import NameSection from './components/sections/NameSection'
import './App.css'
import ProjectsSection from './components/sections/ProjectsSection'

function App() {

  return (
    <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Ubuntu Mono, sans-serif',
        headings: {
          fontFamily: 'Ubuntu, sans-serif',
        },
        colors: {
          dark: ['#C2C2C2', '#A7A7A7', '#929292', '#5F5F5F', '#3A3A3A', '#2E2E2E', '#262626', '#1B1B1B', '#151515', '#111111'],
        },
        primaryColor: 'green',
      }}
    >
      
      <NameSection />

      <ProjectsSection />

    </MantineProvider>
  )
}

export default App
