import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const highlights = [
  "Hayleys Retail Network",
  "HORECA Fresh Produce",
  "Quality Graded Products",
  "Nutrition & Wellness Insights",
];

const clientJourneys = [
  {
    title: "Hayleys Retail Network",
    description:
      "View produce categories, quality standards, retail-ready options, and freshness details for internal supermarket supply.",
  },
  {
    title: "Hotel / Restaurant / Chef",
    description:
      "Explore premium produce, herbs, imported fruits, HORECA packs, specifications, and supply options for food service.",
  },
  {
    title: "Premium B2B Customer",
    description:
      "Review product categories, nutrition highlights, wellness notes, quality standards, and inquiry-ready product details.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-primary-dark)] pt-20 text-white">
      <div className="absolute inset-0">
        <img
          src="/images/hero/fresh-produce-hero.jpg"
          alt="Fresh fruits and vegetables"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] via-[rgba(7,21,13,0.86)] to-[rgba(7,21,13,0.25)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)] via-transparent to-transparent" />
      </div>

      <div className="app-container relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="badge-glass mb-5">
            Interactive Digital Produce Portfolio
          </p>

          <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.04em] md:text-7xl xl:text-8xl">
            Fresh Produce for{" "}
            <span className="text-gold">Hayleys Retail</span> & Premium{" "}
            <span className="text-fresh-green">Food Service</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            A tablet-first digital brochure designed to present Hayleys Agri
            Fresh’s fruits, vegetables, herbs, quality standards, nutrition
            highlights, and fresh produce supply capabilities for Hayleys retail
            expansion, hotels, restaurants, and premium food service customers.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary">
              Explore Products
              <FiArrowRight />
            </Link>

            <Link to="/horeca-supply" className="btn-secondary">
              HORECA Supply
              <FiArrowRight />
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="info-pill">
                <FiCheckCircle className="text-[var(--color-fresh-green)]" />
                <span className="text-sm font-semibold text-white/85">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="tablet-card">
            <div className="tablet-screen">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--color-deep-green)]">
                Tablet Presentation Mode
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight">
                Choose the presentation journey
              </h2>

              <div className="mt-6 grid gap-4">
                {clientJourneys.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm"
                  >
                    <p className="text-lg font-black">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-black/60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl bg-[var(--color-deep-green)] p-5 text-white">
                <p className="text-sm font-semibold text-white/70">
                  Smart Catalogue
                </p>
                <h3 className="mt-1 text-2xl font-black">
                  Products + Quality + Wellness
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;