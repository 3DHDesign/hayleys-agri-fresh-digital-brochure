import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiCoffee,
  FiScissors,
  FiStar,
  FiTruck,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const horecaSolutions = [
  {
    icon: FiCoffee,
    title: "Hotels & Restaurants",
    description:
      "Consistent fresh produce supply for hotel kitchens, restaurants, cafés, and premium food service operations.",
  },
  {
    icon: FiScissors,
    title: "Pre-processing Options",
    description:
      "Cut, peeled, washed, portion-controlled, and ready-to-cook options for faster kitchen operations.",
  },
  {
    icon: FiTruck,
    title: "Scheduled Delivery",
    description:
      "Reliable delivery planning for kitchen demand, menu requirements, and daily procurement cycles.",
  },
  {
    icon: FiStar,
    title: "Premium Produce Range",
    description:
      "Access to herbs, imported fruits, exotic vegetables, salad items, mushrooms, and specialty produce.",
  },
];

const horecaNeeds = [
  "Bulk supply with customized specifications",
  "Consistent quality for menu standardization",
  "Contract pricing and volume-based agreements",
  "Cold chain and delivery scheduling support",
  "Specialty and imported produce sourcing",
  "Value-added packs for kitchen efficiency",
];

const HorecaSupply = () => {
  return (
    <main className="min-h-screen bg-[#07150D] pt-28 text-white">
      <section className="mx-auto w-full max-w-[1500px] px-6 py-12 lg:px-10">
        <div className="grid gap-10 xl:grid-cols-[1fr_1fr] xl:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D7A84B]">
              HORECA Supply
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Premium produce supply for professional kitchens.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              A dedicated produce supply experience for hotels, restaurants,
              cafés, catering teams, chefs, and procurement managers who need
              quality, consistency, customized specifications, and dependable
              delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 rounded-full bg-[#D7A84B] px-7 py-4 text-sm font-black text-[#102014] transition hover:-translate-y-0.5 hover:bg-[#e7bb60]"
              >
                View HORECA Products
                <FiArrowRight />
              </Link>

              <Link
                to="/inquiry"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5"
              >
                Request Supply Quote
                <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="rounded-[42px] border border-white/10 bg-white/10 p-6 shadow-[0_34px_100px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="rounded-[32px] bg-[#F7F2E8] p-6 text-[#102014]">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0B5D35]">
                Chef-friendly supply
              </p>

              <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em]">
                Quality for menu consistency
              </h2>

              <div className="mt-8 grid gap-4">
                {[
                  "Bulk Produce",
                  "Premium Herbs",
                  "Imported Fruits",
                  "Pre-cut HORECA Packs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm"
                  >
                    <strong>{item}</strong>
                    <FiArrowRight className="text-[#0B5D35]" />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl bg-[#0B5D35] p-5 text-white">
                <FiClock className="text-3xl text-[#D7A84B]" />
                <h3 className="mt-3 text-2xl font-black">
                  Scheduled supply for kitchen demand
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {horecaSolutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="grid h-13 w-13 place-items-center rounded-2xl bg-[#D7A84B] text-2xl text-[#102014]">
                  <Icon />
                </div>

                <h3 className="mt-5 text-xl font-black tracking-[-0.03em]">
                  {solution.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[36px] bg-[#F7F2E8] p-8 text-[#102014]">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0B5D35]">
              HORECA Capabilities
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em]">
              Built for food service procurement.
            </h2>
            <p className="mt-5 text-base leading-8 text-black/60">
              Helps the sales team present supply capabilities clearly to hotel
              procurement teams, chefs, and high-end restaurant operators.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {horecaNeeds.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-3xl border border-white/10 bg-white/10 p-5"
              >
                <FiCheckCircle className="mt-1 shrink-0 text-[#D7A84B]" />
                <span className="text-sm font-semibold leading-6 text-white/68">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[36px] bg-[#D7A84B] p-8 text-[#102014] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.05em]">
                Create a customized HORECA inquiry.
              </h2>
              <p className="mt-4 max-w-3xl text-black/65">
                Select products, review nutrition and quality details, and
                prepare a professional request for bulk supply or contract-based
                procurement.
              </p>
            </div>

            <Link
              to="/inquiry"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#102014] px-7 py-4 text-sm font-black text-white"
            >
              Prepare Inquiry
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HorecaSupply;