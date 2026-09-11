import { Suspense } from "react"
import ExploreTechnologies from "./components/ExploreTechnologies"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navber"
import type { ItechnologieDataType } from "./Types/technologieData"

function App() {
  const technologieData = async():Promise<ItechnologieDataType[]> =>{
    const response = await fetch('/tachnologyData.json');
    const data = await response.json();
    return data;
  }
  return (
    <>
    <Navbar />
    <HeroSection />
    <Suspense fallback={<p className="text-center">Loading technologies....</p>}>
      <ExploreTechnologies technologieData={technologieData()} />
    </Suspense>
    <Footer />
    </>
  )
}

export default App
