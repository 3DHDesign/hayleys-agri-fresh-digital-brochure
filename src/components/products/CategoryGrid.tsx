import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { categories } from "../../data/categories";

const categoryThemes = [
  "from-[#0B5D35] to-[#123C2A]",
  "from-[#31572C] to-[#132A13]",
  "from-[#588157] to-[#1B4332]",
  "from-[#7F5539] to-[#3E2723]",
  "from-[#D97706] to-[#7C2D12]",
  "from-[#7C3AED] to-[#312E81]",
  "from-[#2D6A4F] to-[#081C15]",
  "from-[#006466] to-[#001219]",
  "from-[#B08968] to-[#432818]",
];

const CategoryGrid = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#f7f2e8_0%,#fffaf0_100%)] py-24 text-[#102014]">
      <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-10">
        <div className="grid gap-12 xl:grid-cols-[0.85fr_1.35fr]">
          <div className="h-fit rounded-[36px] border border-black/10 bg-white/75 p-8 shadow-[0_30px_90px_rgba(16,32,20,0.08)] backdrop-blur xl:sticky xl:top-28">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--color-deep-green)]">
              Product Portfolio
            </p>

            <p className="mt-5 text-sm font-black uppercase tracking-[0.22em] text-[var(--color-leaf-green)]">
              Farm Fresh — Grown with Trust
            </p>

            <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[var(--color-text-dark)] sm:text-5xl lg:text-[56px]">
              A premium fresh produce range for retail and food service.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
              Explore Hayleys Agri Fresh’s complete produce portfolio covering vegetables,
              fruits, herbs, specialty produce, and value-added HORECA packs for hotels,
              restaurants, cafés, catering teams, and premium food service customers.
            </p>

            <div className="my-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-black/5 bg-[#f1eadc] p-4">
                <strong className="block text-lg font-black text-[#0B5D35]">
                  09
                </strong>
                <span className="mt-1 block text-xs font-bold text-black/50">
                  Core Categories
                </span>
              </div>

              <div className="rounded-3xl border border-black/5 bg-[#f1eadc] p-4">
                <strong className="block text-lg font-black text-[#0B5D35]">
                  Retail
                </strong>
                <span className="mt-1 block text-xs font-bold text-black/50">
                  Hayleys Network
                </span>
              </div>

              <div className="rounded-3xl border border-black/5 bg-[#f1eadc] p-4">
                <strong className="block text-lg font-black text-[#0B5D35]">
                  HORECA
                </strong>
                <span className="mt-1 block text-xs font-bold text-black/50">
                  Bulk Supply Ready
                </span>
              </div>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D7A84B] px-7 py-4 text-sm font-black text-[#102014] shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#e7bb60]"
            >
              View Full Catalogue
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${encodeURIComponent(category.title)}`}
                className={`group relative min-h-[300px] overflow-hidden rounded-[34px] bg-gradient-to-br p-6 text-white shadow-[0_24px_70px_rgba(16,32,20,0.16)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_90px_rgba(16,32,20,0.26)] ${categoryThemes[index] || "from-[#0B5D35] to-[#102014]"
                  }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(215,168,75,0.22),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_50%)]" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-white/15 px-3 py-2 text-xs font-black backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/15 px-3 py-2 text-xs font-black text-white/75 backdrop-blur">
                    Retail / HORECA
                  </span>
                </div>

                <div className="relative z-10 mt-20">
                  <h3 className="max-w-md text-3xl font-black leading-none tracking-[-0.05em] md:text-4xl">
                    {category.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                    {category.description}
                  </p>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-white/70">
                    Explore Category
                  </span>

                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#D7A84B] text-[#102014] transition group-hover:translate-x-1">
                    <FiArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;