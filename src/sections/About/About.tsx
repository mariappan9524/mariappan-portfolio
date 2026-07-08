import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";
import SectionContainer from "../../components/layout/SectionContainer";
import AboutGlow from "./AboutGlow";
import AboutParticles from "./AboutParticles";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden

        scroll-mt-24

        py-16
        sm:py-20
        lg:py-28
      "
    >
      {/* Background Effects */}
      <AboutGlow />
      <AboutParticles />

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Glow */}
        <div
          className="
            absolute

            -left-36
            top-12

            h-[300px]
            w-[300px]

            sm:h-[400px]
            sm:w-[400px]

            lg:-left-56
            lg:h-[520px]
            lg:w-[520px]

            rounded-full

            bg-cyan-500/10

            blur-[80px]
            lg:blur-[170px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute

            -right-36
            bottom-0

            h-[300px]
            w-[300px]

            sm:h-[400px]
            sm:w-[400px]

            lg:-right-56
            lg:h-[520px]
            lg:w-[520px]

            rounded-full

            bg-violet-500/10

            blur-[90px]
            lg:blur-[180px]
          "
        />
      </div>

      <SectionContainer className="relative z-10">
        <div
          className="
            grid

            grid-cols-1

            items-center

            gap-10
            sm:gap-12
            lg:gap-20

            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          <AboutContent />

          <div className="lg:pt-6">
            <AboutStats />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}