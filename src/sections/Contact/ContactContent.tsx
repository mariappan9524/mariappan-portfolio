import resume from "../../assets/resume/Mariappan_Resume.pdf";

import ContactCard from "./ContactCard";

export default function ContactContent() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Mariappan_Resume.pdf";
    link.click();
  };

  return (
    <div
      className="
        relative

        overflow-hidden

        rounded-[36px]

        border
        border-white/10

        bg-gradient-to-br
        from-slate-900/95
        via-slate-900/90
        to-slate-950

        backdrop-blur-3xl

        p-8
        lg:p-12
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute

          -top-40
          right-0

          h-80
          w-80

          rounded-full

          bg-cyan-500/10

          blur-[120px]
        "
      />

      <div
        className="
          absolute

          -bottom-40
          -left-20

          h-80
          w-80

          rounded-full

          bg-blue-500/10

          blur-[120px]
        "
      />

      <div className="relative">
        {/* Contact Cards */}

        <div
          className="
            grid

            gap-6

            md:grid-cols-2
          "
        >
          <ContactCard />
        </div>

        {/* Divider */}

        <div
          className="
            my-10

            h-px

            bg-white/10
          "
        />

        {/* CTA */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between

            gap-8

            rounded-3xl

            border
            border-cyan-500/10

            bg-gradient-to-r
            from-cyan-500/5
            via-transparent
            to-blue-500/5

            px-8
            py-8

            lg:flex-row
          "
        >
          <div>
            <div
              className="
                mb-4

                inline-flex

                items-center

                gap-2

                rounded-full

                border

                border-emerald-500/20

                bg-emerald-500/10

                px-4
                py-2

                text-sm

                font-semibold

                text-emerald-400
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

              Available for Frontend Opportunities
            </div>

            <h3
              className="
                text-3xl

                font-bold

                text-white
              "
            >
              Let's work together.
            </h3>

            <p
              className="
                mt-3

                max-w-xl

                leading-7

                text-slate-400
              "
            >
              I'm currently open to full-time frontend roles and
              enterprise application development using React,
              Angular and Flutter.
            </p>
          </div>

          <div
            className="
              flex

              flex-wrap

              gap-4
            "
          >
            <button
              type="button"
              onClick={handleDownloadResume}
              className="
                rounded-full

                bg-gradient-to-r
                from-cyan-500
                to-blue-600

                px-8
                py-4

                font-semibold

                text-white

                shadow-lg
                shadow-cyan-500/20

                transition-all
                duration-300

                hover:scale-105
                hover:shadow-cyan-500/40

                active:scale-95
              "
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}