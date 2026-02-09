import Header from './componets/Header'
import Footer from './componets/Footer'
import HeroSection from './componets/Hero/HeroSection'
import GridSection from './componets/Contents/GridSection'
import FilterButtons from './componets/Contents/FilterButtons'

function App() {


  return (
    <>
      {/* header */}
        <Header />
        <HeroSection />
        <FilterButtons/>
        <GridSection />
        <Footer />
      {/* footer */}
    </>
  )
}

export default App
