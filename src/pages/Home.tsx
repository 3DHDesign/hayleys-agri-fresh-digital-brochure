 
// import HeroSection from "../components/home/HeroSection";
import CategoryGrid from "../components/products/CategoryGrid";

const getYouTubeEmbedUrl = (url: string) => {
  const videoId =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/)?.[1] ?? "";

  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
};


const companyVideoUrl = "https://www.youtube.com/watch?v=vERYxuPdsaM";

const Home = () => {
  return (
    <>
      
      <main>
        {/* <HeroSection /> */}
        <CategoryGrid />
        <section className="bg-[var(--color-cream)] py-16">
  <div className="app-container">
    <div className="grid items-center gap-10 rounded-[40px] bg-white p-6 shadow-[0_24px_80px_rgba(16,32,20,0.08)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
      <div className="overflow-hidden rounded-[32px] bg-[#102014]">
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <iframe
            src={getYouTubeEmbedUrl(companyVideoUrl)}
            title="Hayleys Agri Fresh company video"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--color-deep-green)]">
          Company Video
        </p>

        <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[var(--color-text-dark)] md:text-5xl">
          Farm fresh produce, grown with trust.
        </h2>

        <p className="mt-5 text-base leading-8 text-black/60">
          Discover the Hayleys Agri Fresh story — from sourcing and quality
          standards to reliable fresh produce supply for supermarkets, HORECA,
          and professional food service customers.
        </p>

        <a
          href={companyVideoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center justify-center rounded-full bg-[var(--color-fresh-green)] px-7 py-4 text-sm font-black text-[var(--color-text-dark)] transition hover:bg-[var(--color-lime-green)]"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  </div>
</section>
      </main>
    </>
  );
};

export default Home;