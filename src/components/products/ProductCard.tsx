import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import type { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
  onViewDetails: (product: Product) => void;
};

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  return (
    <article className="group rounded-[32px] border border-black/10 bg-white p-5 shadow-[0_18px_50px_rgba(16,32,20,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(16,32,20,0.14)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-[#0B5D35]/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#0B5D35]">
            {product.category}
          </span>

          <h3 className="mt-5 text-2xl font-black leading-none tracking-[-0.04em] text-[#102014]">
            {product.name}
          </h3>

          {product.sinhalaName && (
            <p className="mt-2 text-sm font-semibold text-black/45">
              {product.sinhalaName}
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-[#F7F2E8] px-3 py-2 text-xs font-black text-[#102014]">
          {product.uom}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.suitableFor.map((item) => (
          <span
            key={item}
            className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-bold text-black/55"
          >
            {item}
          </span>
        ))}

        {product.origin && (
          <span className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-bold text-black/55">
            {product.origin}
          </span>
        )}
      </div>

      <div className="mt-6 space-y-3">
        {product.nutritionHighlights.slice(0, 3).map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-black/65">
            <FiCheckCircle className="shrink-0 text-[#0B5D35]" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onViewDetails(product)}
        className="mt-7 flex w-full items-center justify-between rounded-2xl bg-[#102014] px-5 py-4 text-sm font-black text-white transition group-hover:bg-[#0B5D35]"
      >
        View Product Details
        <FiArrowRight />
      </button>
    </article>
  );
};

export default ProductCard;