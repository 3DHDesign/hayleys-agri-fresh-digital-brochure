import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { categories } from "../data/categories";
import { products } from "../data/products";

const Presentation = () => {
  return (
    <main className="min-h-screen bg-[#07150D] pt-28 text-[#102014]">
      <section className="mx-auto w-full max-w-[1400px] px-6 pb-16 lg:px-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
          >
            <FiArrowLeft />
            Back to Catalogue
          </Link>

          <p className="rounded-full bg-[#D7A84B] px-5 py-3 text-sm font-black text-[#102014]">
            Tablet Presentation Mode
          </p>
        </div>

        <div className="flex justify-center">
        <HTMLFlipBook
  width={560}
  height={760}
  size="stretch"
  minWidth={320}
  maxWidth={560}
  minHeight={520}
  maxHeight={760}
  startPage={0}
  drawShadow={true}
  flippingTime={900}
  usePortrait={true}
  startZIndex={0}
  autoSize={true}
  maxShadowOpacity={0.45}
  showCover={true}
  mobileScrollSupport={true}
  clickEventForward={true}
  useMouseEvents={true}
  swipeDistance={30}
  showPageCorners={true}
  disableFlipByClick={false}
  style={{}}
  className="shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
>
            <div className="page cover-page">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-[#F7F2E8] p-10">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#0B5D35]">
                    Hayleys Agri Fresh
                  </p>

                  <h1 className="mt-6 text-6xl font-black leading-none tracking-[-0.06em]">
                    Digital Produce Portfolio
                  </h1>

                  <p className="mt-6 text-lg leading-8 text-black/60">
                    Fresh produce presentation for Hayleys retail network,
                    hotels, restaurants, cafés, catering teams, and premium food
                    service customers.
                  </p>
                </div>

                <div className="rounded-3xl bg-[#0B5D35] p-6 text-white">
                  <p className="text-sm font-semibold text-white/70">
                    Smart Catalogue
                  </p>
                  <h2 className="mt-1 text-3xl font-black">
                    Products + Quality + Wellness
                  </h2>
                </div>
              </div>
            </div>

            <div className="page">
              <PageShell
                kicker="Presentation Journey"
                title="Built for tablet-based client discussions."
                description="The sales team can use this digital brochure to explain produce categories, supply capability, quality standards, nutrition highlights, and inquiry options in a premium presentation format."
              >
                <div className="mt-8 grid gap-4">
                  {[
                    "Hayleys Retail Network",
                    "HORECA Supply",
                    "Premium B2B Customers",
                    "Quality & Wellness Insights",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl bg-white p-5 text-lg font-black shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </PageShell>
            </div>

            <div className="page">
              <PageShell
                kicker="HORECA Supply"
                title="Premium produce supply for professional kitchens."
                description="Designed for hotels, restaurants, cafés, catering teams, chefs, and procurement managers who need fresh, consistent, and high-quality produce."
              >
                <div className="mt-8 grid gap-3">
                  {[
                    "Bulk produce supply",
                    "Herbs and specialty produce",
                    "Imported and premium fruits",
                    "Pre-cut and value-added HORECA packs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-[#0B5D35]/10 px-5 py-4 text-sm font-black text-[#0B5D35]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </PageShell>
            </div>

            <div className="page">
              <PageShell
                kicker="Product Categories"
                title="Complete fresh produce portfolio."
                description="Explore vegetables, fruits, herbs, specialty produce, imported fruits, and value-added HORECA packs."
              >
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {categories.map((category, index) => (
                    <div
                      key={category.id}
                      className="rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <p className="text-xs font-black text-[#0B5D35]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-sm font-black leading-tight">
                        {category.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </PageShell>
            </div>

            <div className="page">
              <PageShell
                kicker="Featured Products"
                title="Quality, nutrition and wellness insights."
                description="Each product profile can show quality notes, nutrition highlights, wellness support, storage, UOM, and best-use recommendations."
              >
                <div className="mt-8 grid gap-3">
                  {products.slice(0, 5).map((product) => (
                    <div
                      key={product.id}
                      className="rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-black">
                            {product.name}
                          </h3>
                          <p className="text-xs font-bold text-black/45">
                            {product.category}
                          </p>
                        </div>

                        <span className="rounded-full bg-[#F7F2E8] px-3 py-1 text-xs font-black">
                          {product.uom}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </PageShell>
            </div>

            <div className="page">
              <PageShell
                kicker="Quality Standards"
                title="Freshness and responsible wellness communication."
                description="The brochure should highlight nutrition and wellness value without making medical cure or treatment claims."
              >
                <div className="mt-8 grid gap-3">
                  {[
                    "Fresh, clean and firm produce",
                    "Free from visible defects and pest damage",
                    "Storage and handling guidance",
                    "Nutrition highlights with safe wording",
                    "Use-with-care notes for special diets",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white p-4 text-sm font-bold text-black/65 shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </PageShell>
            </div>

            <div className="page cover-page">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-[#102014] p-10 text-white">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D7A84B]">
                    Next Step
                  </p>

                  <h2 className="mt-6 text-6xl font-black leading-none tracking-[-0.06em]">
                    Build a client inquiry.
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-white/65">
                    Select products, review quality and nutrition details, then
                    prepare an inquiry for HORECA or premium B2B requirements.
                  </p>
                </div>

                <Link
                  to="/products"
                  className="inline-flex w-fit items-center gap-3 rounded-full bg-[#D7A84B] px-7 py-4 text-sm font-black text-[#102014]"
                >
                  Explore Products
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </HTMLFlipBook>
        </div>
      </section>
    </main>
  );
};

const PageShell = ({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full rounded-2xl bg-[#F7F2E8] p-10">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0B5D35]">
        {kicker}
      </p>

      <h2 className="mt-5 text-5xl font-black leading-none tracking-[-0.06em]">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-black/60">{description}</p>

      {children}
    </div>
  );
};

export default Presentation;