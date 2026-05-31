import {
  FiAlertCircle,
  FiArrowRight,
  FiCheckCircle,
  FiPackage,
  FiShield,
  FiThermometer,
  FiTruck,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const standards = [
  {
    icon: FiShield,
    title: "Quality Assurance",
    description:
      "Freshness, appearance, size, maturity, cleanliness, and defect checks before supply.",
  },
  {
    icon: FiThermometer,
    title: "Temperature Awareness",
    description:
      "Storage guidance based on produce type including leafy greens, fruits, vegetables, and imported items.",
  },
  {
    icon: FiPackage,
    title: "Packaging Options",
    description:
      "Crates, polybags, sacks, bulk HORECA supply, pre-packed retail SKUs, and value-added packs.",
  },
  {
    icon: FiTruck,
    title: "Reliable Distribution",
    description:
      "Collection hubs, cold storage support, delivery scheduling, and island-wide supply planning.",
  },
];

const checklist = [
  "Fresh, clean, firm, and suitable maturity level",
  "Free from decay, pest damage, bruises, and visible defects",
  "Graded and sorted based on product-specific standards",
  "Packed according to supermarket or HORECA requirements",
  "Handled with attention to freshness and shelf life",
  "Storage guidance provided for better product performance",
];

const nutritionRules = [
  "Use wellness-support wording, not medical cure claims",
  "Highlight nutrition such as fibre, Vitamin C, Vitamin A, antioxidants, and hydration",
  "Add 'Use with care' notes for special dietary requirements",
  "Recommend professional dietary advice for restricted medical diets",
];

const QualityStandards = () => {
  return (
    <main className="min-h-screen bg-[#F7F2E8] pt-28 text-[#102014]">
      <section className="mx-auto w-full max-w-[1500px] px-6 py-12 lg:px-10">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.9fr] xl:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#0B5D35]">
              Quality Standards
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Freshness, grading, nutrition and supply confidence.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              The digital brochure presents product quality standards together
              with storage guidance, packaging details, nutrition highlights,
              wellness support, and responsible use-with-care notes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 rounded-full bg-[#D7A84B] px-7 py-4 text-sm font-black text-[#102014] transition hover:-translate-y-0.5 hover:bg-[#e7bb60]"
              >
                View Product Standards
                <FiArrowRight />
              </Link>

              <Link
                to="/inquiry"
                className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-black text-[#102014] transition hover:-translate-y-0.5"
              >
                Prepare Inquiry
                <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="rounded-[42px] bg-[#102014] p-6 text-white shadow-[0_34px_100px_rgba(16,32,20,0.22)]">
            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6">
              <FiShield className="text-5xl text-[#D7A84B]" />
              <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.05em]">
                Quality-led digital product presentation
              </h2>
              <p className="mt-5 text-white/60">
                Each product can be shown with quality notes, storage, UOM,
                nutrition highlights, wellness support, and safe-use guidance.
              </p>

              <div className="mt-8 grid gap-3">
                {["Quality", "Freshness", "Nutrition", "Wellness"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 px-5 py-4 text-sm font-black"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {standards.map((standard) => {
            const Icon = standard.icon;

            return (
              <div
                key={standard.title}
                className="rounded-[32px] bg-white p-6 shadow-[0_18px_60px_rgba(16,32,20,0.08)]"
              >
                <div className="grid h-13 w-13 place-items-center rounded-2xl bg-[#0B5D35]/10 text-2xl text-[#0B5D35]">
                  <Icon />
                </div>

                <h3 className="mt-5 text-xl font-black tracking-[-0.03em]">
                  {standard.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/55">
                  {standard.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[36px] bg-white p-8 shadow-[0_18px_60px_rgba(16,32,20,0.08)]">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0B5D35]">
              Produce Quality Checklist
            </p>

            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em]">
              What the buyer can trust.
            </h2>

            <div className="mt-8 space-y-4">
              {checklist.map((item) => (
                <div key={item} className="flex gap-3">
                  <FiCheckCircle className="mt-1 shrink-0 text-[#0B5D35]" />
                  <span className="text-sm font-semibold leading-6 text-black/65">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[36px] bg-[#102014] p-8 text-white shadow-[0_18px_60px_rgba(16,32,20,0.18)]">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D7A84B]">
              Nutrition & Wellness Guidance
            </p>

            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em]">
              Responsible wellness communication.
            </h2>

            <p className="mt-5 text-white/60">
              The brochure should highlight nutrition and wellness value without
              making medical treatment or cure claims.
            </p>

            <div className="mt-8 space-y-4">
              {nutritionRules.map((item) => (
                <div key={item} className="flex gap-3">
                  <FiAlertCircle className="mt-1 shrink-0 text-[#D7A84B]" />
                  <span className="text-sm font-semibold leading-6 text-white/68">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[36px] bg-[#0B5D35] p-8 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.05em]">
                Quality details built into every product profile.
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                Product cards and detail modals can show freshness standards,
                packaging, storage, nutrition highlights, wellness support, and
                use-with-care notes for premium customer presentations.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D7A84B] px-7 py-4 text-sm font-black text-[#102014]"
            >
              Explore Products
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QualityStandards;