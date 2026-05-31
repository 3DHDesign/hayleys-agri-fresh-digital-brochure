import { useMemo, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import ProductDetailModal from "../components/products/ProductDetailModal";
import { categories } from "../data/categories";
import { products } from "../data/products";
import type { Product, ProductCategory } from "../types/product";
import { FiSearch } from "react-icons/fi";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "All">("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.nutritionHighlights.some((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <>
      <main className="min-h-screen bg-[#F7F2E8] pt-28 text-[#102014]">
        <section className="mx-auto w-full max-w-[1500px] px-6 py-12 lg:px-10">
          <div className="mb-10 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#0B5D35]">
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
                className="w-full rounded-full border border-black/10 bg-white py-4 pl-12 pr-5 text-sm font-semibold outline-none transition focus:border-[#0B5D35]"
              />
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[320px_1fr]">
            <aside className="h-fit rounded-[32px] bg-white p-5 shadow-[0_18px_50px_rgba(16,32,20,0.08)] xl:sticky xl:top-28">
              <button
                type="button"
                onClick={() => setSelectedCategory("All")}
                className={`mb-3 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                  selectedCategory === "All"
                    ? "bg-[#102014] text-white"
                    : "bg-[#F7F2E8] text-[#102014] hover:bg-[#0B5D35]/10"
                }`}
              >
                All Products
                <span>{products.length}</span>
              </button>

              <div className="space-y-2">
                {categories.map((category) => {
                  const count = products.filter(
                    (product) => product.category === category.title
                  ).length;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.title)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                        selectedCategory === category.title
                          ? "bg-[#0B5D35] text-white"
                          : "bg-[#F7F2E8] text-[#102014] hover:bg-[#0B5D35]/10"
                      }`}
                    >
                      <span>{category.title}</span>
                      <span>{count}</span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-sm font-bold text-black/50">
                  Showing{" "}
                  <span className="font-black text-[#102014]">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </p>

                <p className="rounded-full bg-white px-4 py-2 text-xs font-black text-[#0B5D35]">
                  {selectedCategory}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={setActiveProduct}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="rounded-[32px] bg-white p-10 text-center">
                  <h3 className="text-2xl font-black">No products found</h3>
                  <p className="mt-2 text-black/55">
                    Try another category or search keyword.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </>
  );
};

export default Products;