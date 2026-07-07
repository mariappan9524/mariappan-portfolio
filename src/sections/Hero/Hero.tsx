import HeroContent from "./HeroContent";
import HeroEffects from "./HeroEffects";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

import HeroGlow from "./HeroGlow";
import HeroDust from "./HeroDust";
import HeroParticles from "./HeroParticles";
import HeroOrbs from "./HeroOrbs";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-slate-950
      "
    >
      {/* Background Effects */}
      <HeroGlow />
      <HeroOrbs />
      <HeroDust />
      <HeroParticles />
      <HeroEffects />

      {/* Hero Content */}
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          flex
          flex-col-reverse
          lg:flex-row

          items-center
          justify-center
          lg:justify-between

          gap-12
          lg:gap-20

          min-h-screen

          px-6
          sm:px-8
          lg:px-10
          xl:px-12

          pt-28
          lg:pt-32

          pb-16
          lg:pb-20
        "
      >
        <HeroContent />

        <HeroImage />
      </div>

      <ScrollIndicator />
    </section>
  );
}