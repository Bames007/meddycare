import { DESIGN_TOKENS } from "../utils/constants";
import WhyChooseUs from "./components/WhyChooseUs";
import GettingStarted from "./components/GettingStarted";
import CareQuestionnaire from "./components/Questionaire";
import Trust from "./components/Trust";
import About from "./components/About";
import Hero from "./components/Hero";
import CareSolutions from "./components/CareSolutions";
import MeetOurCarers from "./components/Carers";
import OurTechnology from "./components/OurTechnology";
import CommitmentAndImpact from "./components/Commitement";
import SpecialistCare from "./components/SpecializationCare";
import ComparisonTable from "./components/Comparison";
import { Footer } from "./components/Footer";
import { PaymentPlans } from "./components/Payment";
import { ContactSection } from "./components/Contact";
import { Header } from "./components/Header";
import BlogPage from "./blog/page";
import BlogHub from "./blog/page";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* <Header /> */}

      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <div id="trust">
        <Trust />
      </div>
      <div id="getting-started">
        <GettingStarted />
      </div>
      <div id="questionnaire">
        <CareQuestionnaire />
      </div>
      <div id="solutions">
        <CareSolutions />
      </div>
      <div id="carers">
        <MeetOurCarers />
      </div>
      <div id="tech">
        <OurTechnology />
      </div>
      <BlogHub />
      <div id="commitment">
        <CommitmentAndImpact />
      </div>
      <div id="comparison">
        <ComparisonTable />
      </div>
      <div id="specialist">
        <SpecialistCare />
      </div>
      <div id="plans">
        <PaymentPlans />
      </div>
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
