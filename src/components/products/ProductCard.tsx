import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import type { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
  onViewDetails: (product: Product) => void;
};

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const hasImage = Boolean(product.image);

  return (
    <article className="group flex min-h-[560px] flex-col overflow-hidden rounded-[34px] border border-black/10 bg-white shadow-[0_18px_50px_rgba(16,32,20,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(16,32,20,0.14)]">
      <div className="relative h-56 overflow-hidden bg-[#F7F2E8]">
        {hasImage ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : null}

        <div className="absolute inset-0 bg-gradient-to-t from-[#102014]/45 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 max-w-[70%] rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#0B5D35] shadow-sm backdrop-blur">
          {product.category}
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-[#102014] shadow-sm backdrop-blur">
          {product.uom}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/80">
            {product.origin || "Fresh Produce"}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div>
          <h3 className="text-3xl font-black leading-none tracking-[-0.05em] text-[#102014]">
            {product.name}
          </h3>

          {product.sinhalaName && (
            <p className="mt-2 text-sm font-semibold text-black/45">
              {product.sinhalaName}
            </p>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.suitableFor.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/10 bg-[#F7F2E8] px-3 py-1.5 text-xs font-bold text-black/60"
            >
              {item}
            </span>
          ))}

          {product.storage && (
            <span className="rounded-full border border-black/10 bg-[#F7F2E8] px-3 py-1.5 text-xs font-bold text-black/60">
              {product.storage}
            </span>
          )}
        </div>

        <div className="mt-6 space-y-3">
          {product.nutritionHighlights.slice(0, 3).map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 text-sm leading-6 text-black/65"
            >
              <FiCheckCircle className="shrink-0 text-[#0B5D35]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="flex w-full items-center justify-between rounded-2xl bg-[#102014] px-5 py-4 text-sm font-black text-white transition group-hover:bg-[#0B5D35]"
          >
            View Product Details
            <FiArrowRight />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;