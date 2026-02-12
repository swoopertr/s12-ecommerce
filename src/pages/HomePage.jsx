import React from "react"
import HeroSection from './../componets/Hero/HeroSection'
import FilterButtons from './../componets/Contents/FilterButtons'
import GridSection from './../componets/Contents/GridSection'


function HomePage() {
    return (
      <div>
        <HeroSection />
        <FilterButtons />
        <GridSection />
      </div>
    );
}
export default HomePage;