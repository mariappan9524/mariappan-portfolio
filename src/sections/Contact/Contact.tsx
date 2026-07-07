import ContactHeader from "./ContactHeader";
import ContactContent from "./ContactContent";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative

        overflow-hidden

           pt-3
pb-20

        scroll-mt-24
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
        <ContactHeader />

        <div className="mt-6">
          <ContactContent />
        </div>
      </div>
    </section>
  );
}