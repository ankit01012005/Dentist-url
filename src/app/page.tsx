import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import Marquee from "@/components/home/Marquee";
import TreatmentsSection from "@/components/home/TreatmentsSection";
import BeforeAfter from "@/components/home/BeforeAfter";
import WhyChoose from "@/components/home/WhyChoose";
import DoctorSection from "@/components/home/DoctorSection";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import FAQSection from "@/components/home/FAQSection";
import CTABand from "@/components/CTABand";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Marquee />
      <TreatmentsSection />
      <BeforeAfter />
      <WhyChoose />
      <DoctorSection />
      <ReviewsCarousel />
      <FAQSection />
      <CTABand />
      <ContactSection />
    </>
  );
}
