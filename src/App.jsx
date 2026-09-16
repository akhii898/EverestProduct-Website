import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import RangeShowcase from "./components/RangeShowcase";
import WhyEverest from "./components/WhyEverest";
import HowItWorks from "./components/HowItWorks";
import BulkCta from "./components/BulkCta";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <main>
        <RangeShowcase />
        <WhyEverest />
        <HowItWorks />
        <BulkCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
