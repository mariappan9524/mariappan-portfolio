import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <footer
      className="
        relative

        overflow-hidden

        border-t
        border-white/10

        bg-slate-950

        pt-20
        pb-10
      "
    >
      {/* Background */}

      <div className="absolute inset-0 bg-slate-950" />

      <div
        className="
          absolute

          inset-0

          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_65%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <FooterContent />
      </div>
    </footer>
  );
}