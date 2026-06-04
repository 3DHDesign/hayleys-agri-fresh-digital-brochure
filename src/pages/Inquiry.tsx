import {  FiTrash2, FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useInquiry } from "../context/InquiryContext";

const Inquiry = () => {
  const { items, removeFromInquiry, clearInquiry, totalItems } =
    useInquiry();

  return (
    <main className="min-h-screen bg-[#F7F2E8] pt-28 text-[#102014]">
      <section className="mx-auto w-full max-w-[1500px] px-6 py-12 lg:px-10">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0B5D35]">
              Client Inquiry
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl">
              Inquiry Basket
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-black/60">
              Review selected produce items and prepare a client inquiry for
              supermarkets, hotels, restaurants, or premium B2B buyers.
            </p>
          </div>

          <div className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#0B5D35] shadow-sm">
            {totalItems} selected item{totalItems === 1 ? "" : "s"}
          </div>
        </div>

        {items.length === 0 ? (
          <div className="rounded-[36px] bg-white p-10 text-center shadow-[0_20px_70px_rgba(16,32,20,0.08)]">
            <h2 className="text-3xl font-black">No products added yet</h2>

            <p className="mx-auto mt-3 max-w-xl text-black/55">
              Go to the products page, open a product, and click “Add to
              Inquiry” to build the client inquiry basket.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#D7A84B] px-7 py-4 text-sm font-black text-[#102014]"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 xl:grid-cols-[1fr_440px]">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="rounded-[30px] bg-white p-5 shadow-[0_18px_50px_rgba(16,32,20,0.08)]"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#0B5D35]">
                        {item.product.category}
                      </p>

                      <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">
                        {item.product.name}
                      </h3>

                      {item.product.sinhalaName && (
                        <p className="mt-1 text-sm font-semibold text-black/45">
                          {item.product.sinhalaName}
                        </p>
                      )}

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#F7F2E8] px-3 py-1.5 text-xs font-bold text-black/55">
                          UOM: {item.product.uom}
                        </span>

                        {item.product.storage && (
                          <span className="rounded-full bg-[#F7F2E8] px-3 py-1.5 text-xs font-bold text-black/55">
                            Storage: {item.product.storage}
                          </span>
                        )}

                        <span className="rounded-full bg-[#F7F2E8] px-3 py-1.5 text-xs font-bold text-black/55">
                          {item.product.suitableFor.join(", ")}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-[var(--color-deep-green)]/10 px-4 py-2 text-sm font-black text-[var(--color-deep-green)]">
                        Selected
                      </span>

                      <button
                        type="button"
                        onClick={() => removeFromInquiry(item.product.id)}
                        className="grid h-12 w-12 place-items-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100"
                        aria-label={`Remove ${item.product.name} from inquiry`}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-[36px] bg-[#102014] p-6 text-white shadow-[0_24px_80px_rgba(16,32,20,0.2)] xl:sticky xl:top-28">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#D7A84B]">
                Inquiry Details
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                Send client request
              </h2>

              <form className="mt-6 grid gap-4">
                <input
                  type="text"
                  placeholder="Client / Company Name"
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-white outline-none placeholder:text-white/45 focus:border-[#D7A84B]"
                />

                <input
                  type="text"
                  placeholder="Contact Person"
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-white outline-none placeholder:text-white/45 focus:border-[#D7A84B]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-white outline-none placeholder:text-white/45 focus:border-[#D7A84B]"
                />

                <select className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-white outline-none focus:border-[#D7A84B]">
                  <option className="text-black">Supermarket</option>
                  <option className="text-black">Hotel / Restaurant</option>
                  <option className="text-black">Catering</option>
                  <option className="text-black">Premium B2B Buyer</option>
                </select>

                <textarea
                  placeholder="Additional message / product requirements"
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold text-white outline-none placeholder:text-white/45 focus:border-[#D7A84B]"
                />

                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#D7A84B] px-6 py-4 text-sm font-black text-[#102014]"
                >
                  <FiSend />
                  Prepare Inquiry
                </button>

                <button
                  type="button"
                  onClick={clearInquiry}
                  className="text-sm font-bold text-white/55 transition hover:text-white"
                >
                  Clear Basket
                </button>
              </form>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
};

export default Inquiry;