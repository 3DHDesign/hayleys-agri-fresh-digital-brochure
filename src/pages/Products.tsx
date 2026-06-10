import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProductCard from "../components/products/ProductCard";
import ProductDetailModal from "../components/products/ProductDetailModal";
import { categories } from "../data/categories";
import { categorySpecifications, products } from "../data/products";
import type { Product, ProductCategory } from "../types/product";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    ProductCategory | "All"
  >("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const selectedCategorySpecification =
    selectedCategory === "All" ? null : categorySpecifications[selectedCategory];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.nutritionHighlights.some((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-[#F7F2E8] pt-28 text-[#102014]">
        <section className="mx-auto w-full max-w-[1500px] px-6 py-12 lg:px-10">
          <div className="mb-10 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[var(--color-deep-green)]">
                Smart Produce Catalogue
              </p>

              <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl">
                Fresh produce with quality, nutrition and wellness insights.
              </h1>
            </div>

            <div className="relative w-full max-w-md">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-black/35" />

              <input
                type="text"
                placeholder="Search products, nutrition, categories..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-full border border-black/10 bg-white py-4 pl-12 pr-5 text-sm font-semibold outline-none transition focus:border-[var(--color-deep-green)]"
              />
            </div>
          </div>

          <div className="grid min-w-0 gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="h-fit rounded-[32px] bg-white p-5 shadow-[0_18px_50px_rgba(16,32,20,0.08)] xl:sticky xl:top-28">
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className={`mb-3 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                  selectedCategory === "All"
                    ? "bg-[#102014] text-white"
                    : "bg-[#F7F2E8] text-[#102014] hover:bg-[var(--color-deep-green)]/10"
                }`}
              >
                All Products
                <span>{products.length}</span>
              </button>

              <div className="space-y-2">
                {categories.map((category) => {
                  const count = products.filter(
                    (product) => product.category === category.title,
                  ).length;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.title)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                        selectedCategory === category.title
                          ? "bg-[var(--color-deep-green)] text-white"
                          : "bg-[#F7F2E8] text-[#102014] hover:bg-[var(--color-deep-green)]/10"
                      }`}
                    >
                      {category.title}
                      <span>{count}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="min-w-0">
              {selectedCategorySpecification && (
                <section className="mb-10 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_24px_70px_rgba(16,32,20,0.08)] md:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--color-deep-green)]">
                    Category Specification
                  </p>

                  <h2 className="mt-3 text-3xl font-black leading-tight text-[var(--color-text-dark)]">
                    {selectedCategorySpecification.title}
                  </h2>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-black/55">
                    {selectedCategorySpecification.description}
                  </p>

                  <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {selectedCategorySpecification.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-2xl border border-black/5 bg-[var(--color-cream)] px-4 py-4"
                      >
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--color-deep-green)]">
                          {spec.label}
                        </p>

                        <p className="mt-2 text-sm font-semibold leading-6 text-black/65">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-black/45">
                  {filteredProducts.length} Products Found
                </p>

                {selectedCategory !== "All" && (
                  <p className="text-sm font-bold text-[var(--color-deep-green)]">
                    Showing: {selectedCategory}
                  </p>
                )}
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid min-w-0 gap-6 md:grid-cols-3 2xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={setActiveProduct}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-[32px] bg-white p-10 text-center shadow-[0_18px_50px_rgba(16,32,20,0.08)]">
                  <h2 className="text-2xl font-black text-[#102014]">
                    No products found
                  </h2>

                  <p className="mt-3 text-sm font-semibold text-black/55">
                    Try changing the category or search keyword.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {activeProduct && (
        <ProductDetailModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </>
  );
};

export default Products;