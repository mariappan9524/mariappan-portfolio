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

        py-20
        sm:py-24
        lg:py-28
      "
    >
      <AboutGlow />
        <AboutParticles />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Glow */}
        <div
          className="
            absolute

            -left-40
            top-12

            h-[320px]
            w-[320px]

            sm:h-[420px]
            sm:w-[420px]

            lg:-left-56
            lg:h-[520px]
            lg:w-[520px]

            rounded-full

            bg-cyan-500/10

            blur-[120px]
            lg:blur-[170px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute

            -right-40
            bottom-0

            h-[320px]
            w-[320px]

            sm:h-[420px]
            sm:w-[420px]

            lg:-right-56
            lg:h-[520px]
            lg:w-[520px]

            rounded-full

            bg-violet-500/10

            blur-[130px]
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

            gap-14

            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-20
          "
        >
          <AboutContent />

          <AboutStats />
        </div>
      </SectionContainer>
    </section>
  );
}