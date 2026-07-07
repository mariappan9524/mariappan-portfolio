import type { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-slate-950

        px-6
      "
    >
      <div className="max-w-lg text-center">
        {/* Logo */}
        <div
          className="
            mx-auto
            mb-8

            flex
            h-24
            w-24

            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-cyan-400
            via-sky-500
            to-blue-600

            text-3xl
            font-bold
            text-white

            shadow-[0_0_35px_rgba(34,211,238,0.35)]
          "
        >
          MP
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white">
          Oops!
        </h1>

        {/* Description */}
        <p
          className="
            mt-5

            leading-7

            text-slate-400
          "
        >
          Something unexpected happened while loading the
          portfolio.
          <br />
          Please refresh the page and try again.
        </p>

        {/* Button */}
        <button
          onClick={resetErrorBoundary}
          className="
            mt-8

            rounded-full

            bg-gradient-to-r
            from-cyan-500
            to-blue-500

            px-7
            py-3

            font-medium

            text-white

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-[0_0_30px_rgba(34,211,238,.35)]

            active:scale-95
          "
        >
          Reload Portfolio
        </button>
      </div>
    </div>
  );
}