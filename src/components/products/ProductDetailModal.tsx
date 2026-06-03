import { FiAlertCircle, FiCheckCircle, FiPlus, FiX } from "react-icons/fi";
import { useInquiry } from "../../context/InquiryContext";
import { categorySpecifications } from "../../data/products";
import type { Product } from "../../types/product";

type ProductDetailModalProps = {
  product: Product | null;
  onClose: () => void;
};

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const { addToInquiry } = useInquiry();

  if (!product) return null;

  const categorySpecification = categorySpecifications[product.category];

  const handleAddToInquiry = () => {
    addToInquiry(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex w-full items-center justify-center overflow-x-hidden bg-black/60 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-[1024px] overflow-x-auto overflow-y-auto rounded-[36px] bg-[#F7F2E8] p-6 text-[#102014] shadow-2xl [scrollbar-width:none] md:p-8 [&::-webkit-scrollbar]:hidden">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--color-deep-green)]">
              {product.category}
            </p>

            <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.05em] md:text-6xl">
              {product.name}
            </h2>

            {product.sinhalaName && (
              <p className="mt-2 text-lg font-semibold text-black/45">
                {product.sinhalaName}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-xl shadow-sm transition hover:bg-[var(--color-deep-green)] hover:text-white"
          >
            <FiX />
          </button>
        </div>

        <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ProductMetaCard label="UOM" value={product.uom} />
          <ProductMetaCard label="Storage" value={product.storage || "Varies"} />
          <ProductMetaCard label="Origin" value={product.origin || "N/A"} />
          <ProductMetaCard
            label="Suitable For"
            value={product.suitableFor.join(", ")}
          />
        </div>

        {categorySpecification && (
          <section className="mt-6 rounded-3xl bg-white p-6">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--color-deep-green)]">
              Category Specification
            </p>

            <h3 className="mt-3 text-2xl font-black leading-tight text-[#102014]">
              {categorySpecification.title}
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-black/55">
              {categorySpecification.description}
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {categorySpecification.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-2xl border border-black/5 bg-[#F7F2E8] px-4 py-3"
                >
                  <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[var(--color-deep-green)]">
                    {spec.label}
                  </p>

                  <p className="mt-1.5 text-sm font-semibold leading-6 text-black/65">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-6 grid min-w-0 gap-5 lg:grid-cols-2">
          <InfoPanel
            title="Quality Notes"
            items={product.qualityNotes}
            icon="check"
          />

          <InfoPanel
            title="Nutrition Highlights"
            items={product.nutritionHighlights}
            icon="check"
          />

          <InfoPanel
            title="Wellness Support"
            items={product.wellnessSupport}
            icon="check"
          />

          <InfoPanel
            title="Use With Care"
            items={
              product.useWithCare || [
                "Consume as part of a balanced diet",
                "For special medical diets, follow professional dietary advice",
              ]
            }
            icon="alert"
          />
        </div>

        {product.bestFor && product.bestFor.length > 0 && (
          <div className="mt-6 rounded-3xl bg-white p-6">
            <h3 className="text-xl font-black">Best For</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[var(--color-deep-green)]/10 px-4 py-2 text-sm font-bold text-[var(--color-deep-green)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-[#102014] p-5 text-white">
          <div>
            <p className="text-sm font-semibold text-white/60">
              Inquiry Basket
            </p>

            <h3 className="text-2xl font-black">
              Add this product to client inquiry
            </h3>
          </div>

          <button
            type="button"
            onClick={handleAddToInquiry}
            className="inline-flex items-center gap-3 rounded-full bg-[var(--color-fresh-green)] px-6 py-4 text-sm font-black text-[#102014] transition hover:bg-[var(--color-lime-green)]"
          >
            <FiPlus />
            Add to Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductMetaCard = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div className="rounded-3xl bg-white p-5">
      <p className="text-xs font-bold uppercase text-black/40">{label}</p>
      <strong className="mt-2 block text-xl">{value}</strong>
    </div>
  );
};

const InfoPanel = ({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: "check" | "alert";
}) => {
  return (
    <div className="rounded-3xl bg-white p-6">
      <h3 className="text-xl font-black">{title}</h3>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-black/65"
          >
            {icon === "check" ? (
              <FiCheckCircle className="mt-1 shrink-0 text-[var(--color-deep-green)]" />
            ) : (
              <FiAlertCircle className="mt-1 shrink-0 text-[var(--color-gold)]" />
            )}

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailModal;