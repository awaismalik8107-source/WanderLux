import MainLayout from './layouts/MainLayout'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import Destinations from './sections/Destinations'
import FeaturedExperiences from './sections/FeaturedExperiences'
import WhyChooseUs from './sections/WhyChooseUs'
import TravelerStories from './sections/TravelerStories'
import HowItWorks from './sections/HowItWorks'
import TravelJournal from './sections/TravelJournal'
import CustomTravelEnquiry from './sections/CustomTravelEnquiry'
import TravelPackages from './sections/TravelPackages'
import Footer from './sections/Footer'

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <TrustBar />
      <main>
        <Destinations />
        <FeaturedExperiences />
        <WhyChooseUs />
        <TravelerStories />
        <HowItWorks />
        <TravelJournal />
        <CustomTravelEnquiry />
        <TravelPackages />
      </main>
      <Footer />
    </MainLayout>
  )
}
