import {
  FiArrowRight,
  FiBox,
  FiCalendar,
  FiCheckCircle,
  FiPackage,
  FiShoppingCart,
  FiTrendingUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const retailFeatures = [
  {
    icon: FiShoppingCart,
    title: "Daily Supermarket Supply",
    description:
      "Consistent supply of fresh fruits and vegetables for supermarket shelves with reliable replenishment cycles.",
  },
  {
    icon: FiPackage,
    title: "Retail-ready SKUs",
    description:
      "Loose, pre-packed, graded, and value-added packs designed for modern retail display and customer convenience.",
  },
  {
    icon: FiCheckCircle,
    title: "Grading & Sorting",
    description:
      "Produce selected based on freshness, appearance, size, maturity, cleanliness, and defect-free quality.",
  },
  {
    icon: FiTrendingUp,
    title: "Seasonal Promotions",
    description:
      "Support for promotional planning, seasonal assortments, and high-traffic produce category planning.",
  },
];

const supplyPoints = [
  "Fresh fruits and vegetables across all key categories",
  "Standardized grading, sorting, and packaging",
  "Daily replenishment and demand-based supply planning",
  "Private label and branded produce options",
  "Retail display-friendly product presentation",
  "Support for loss-leader and high-volume produce strategy",
];

const SupermarketSupply = () => {
  return (
    <main className="min-h-screen bg-[#F7F2E8] pt-28 text-[#102014]">
      <section className="mx-auto w-full max-w-[1500px] px-6 py-12 lg:px-10">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#0B5D35]">
              Modern Retail Supply
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Fresh produce solutions for supermarket growth.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60">
              Hayleys Agri Fresh supports modern retail networks with
              consistent fresh produce supply, retail-ready packaging, grading,
              sorting, daily replenishment, and category planning for
              supermarket operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 rounded-full bg-[#D7A84B] px-7 py-4 text-sm font-black text-[#102014] transition hover:-translate-y-0.5 hover:bg-[#e7bb60]"
              >
                Explore Product Catalogue
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
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D7A84B]">
                Supermarket Model
              </p>

              <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em]">
                Farm-to-shelf freshness
              </h2>

              <div className="mt-8 grid gap-4">
                {[
                  "Farmer Network",
                  "Collection & Quality Check",
                  "Grading / Sorting / Packing",
                  "Retail Shelf Delivery",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-3xl bg-white p-4 text-[#102014]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0B5D35] text-sm font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong className="text-base">{item}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {retailFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[32px] bg-white p-6 shadow-[0_18px_60px_rgba(16,32,20,0.08)]"
              >
                <div className="grid h-13 w-13 place-items-center rounded-2xl bg-[#0B5D35]/10 text-2xl text-[#0B5D35]">
                  <Icon />
                </div>

                <h3 className="mt-5 text-xl font-black tracking-[-0.03em]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/55">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[36px] bg-white p-8 shadow-[0_18px_60px_rgba(16,32,20,0.08)]">
            <FiBox className="text-4xl text-[#0B5D35]" />
            <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.05em]">
              Retail supply capabilities
            </h2>
            <p className="mt-5 text-base leading-8 text-black/60">
              Built for supermarket buyers who need freshness, consistency,
              category depth, and dependable supply planning.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {supplyPoints.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-3xl bg-white p-5 shadow-sm"
              >
                <FiCheckCircle className="mt-1 shrink-0 text-[#0B5D35]" />
                <span className="text-sm font-semibold leading-6 text-black/65">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[36px] bg-[#0B5D35] p-8 text-white md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <FiCalendar className="text-4xl text-[#D7A84B]" />
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">
                Designed for daily supermarket operations.
              </h2>
              <p className="mt-4 max-w-3xl text-white/70">
                From basic vegetables to premium fruits and specialty produce,
                the platform helps present the complete retail supply story in a
                clear, tablet-friendly format.
              </p>
            </div>

            <Link
              to="/inquiry"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D7A84B] px-7 py-4 text-sm font-black text-[#102014]"
            >
              Create Retail Inquiry
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupermarketSupply;