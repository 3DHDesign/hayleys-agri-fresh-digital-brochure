import { FiX, FiPlus, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import type { Product } from "../../types/product";
import { useInquiry } from "../../context/InquiryContext";

type ProductDetailModalProps = {
  product: Product | null;
  onClose: () => void;
};

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const { addToInquiry } = useInquiry();

  if (!product) return null;

  const handleAddToInquiry = () => {
    addToInquiry(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex w-full items-center justify-center overflow-x-hidden bg-black/60 p-4 backdrop-blur-sm">
       <div className="max-h-[90vh] w-full max-w-[1024px] overflow-x-auto overflow-y-auto rounded-[36px] bg-[#F7F2E8] p-6 text-[#102014] shadow-2xl [scrollbar-width:none] md:p-8 [&::-webkit-scrollbar]:hidden">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0B5D35]">
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
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-xl shadow-sm"
          >
            <FiX />
          </button>
        </div>

        <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl bg-white p-5">
            <p className="text-xs font-bold uppercase text-black/40">UOM</p>
            <strong className="mt-2 block text-xl">{product.uom}</strong>
          </div>

          <div className="rounded-3xl bg-white p-5">
            <p className="text-xs font-bold uppercase text-black/40">Storage</p>
            <strong className="mt-2 block text-xl">
              {product.storage || "Varies"}
            </strong>
          </div>

          <div className="rounded-3xl bg-white p-5">
            <p className="text-xs font-bold uppercase text-black/40">Origin</p>
            <strong className="mt-2 block text-xl">
              {product.origin || "N/A"}
            </strong>
          </div>

          <div className="rounded-3xl bg-white p-5">
            <p className="text-xs font-bold uppercase text-black/40">
              Suitable For
            </p>
            <strong className="mt-2 block text-xl">
              {product.suitableFor.join(", ")}
            </strong>
          </div>
        </div>

        <div className="mt-6 grid min-w-0 gap-5 lg:grid-cols-2">
          <InfoPanel title="Quality Notes" items={product.qualityNotes} icon="check" />

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

        {product.bestFor && (
          <div className="mt-6 rounded-3xl bg-white p-6">
            <h3 className="text-xl font-black">Best For</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.bestFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#0B5D35]/10 px-4 py-2 text-sm font-bold text-[#0B5D35]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-[#102014] p-5 text-white">
          <div>
            <p className="text-sm font-semibold text-white/60">Inquiry Basket</p>
            <h3 className="text-2xl font-black">
              Add this product to client inquiry
            </h3>
          </div>

          <button
            type="button"
            onClick={handleAddToInquiry}
            className="inline-flex items-center gap-3 rounded-full bg-[#D7A84B] px-6 py-4 text-sm font-black text-[#102014]"
          >
            <FiPlus />
            Add to Inquiry
          </button>
        </div>
      </div>
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

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-black/65">
            {icon === "check" ? (
              <FiCheckCircle className="mt-1 shrink-0 text-[#0B5D35]" />
            ) : (
              <FiAlertCircle className="mt-1 shrink-0 text-[#D7A84B]" />
            )}

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailModal;