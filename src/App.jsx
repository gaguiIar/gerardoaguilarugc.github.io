import React from "react";
import {
  ArrowRight,
  Mail,
  Play,
  Sparkles,
  Layers,
  BarChart3,
  Zap,
  MonitorSmartphone,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const PROFILE = {
  name: "Gerardo Aguilar",
  title: "High-volume UGC creator for tech, finance & lifestyle brands.",
  tagline:
    "I create platform-optimized content that explains product value fast, feels native to the feed, and gives brands repeatable formats they can test at volume.",
  email: "gerardodoesugc@gmail.com",
  location: "Los Angeles, CA",
};

const featuredVideos = [
    {
    eyebrow: "Trust-Driven UGC",
    title: "Native creator story",
    style: "Relatable pain point → personal use case → soft CTA",
    bestFor: "Lifestyle, grooming, wellness, subscriptions, mobile apps",
    outcome: "Best when the brand needs trust, relatability, and watch time.",
    vimeoId: "1192946720",
    reverse: true,
  },
  {
    eyebrow: "Problem-Solution Format",
    title: "The product finally clicks",
    style: "Problem → simple demo → clear reason to try",
    bestFor: "AI tools, finance apps, SaaS, creator tools, productivity apps",
    outcome: "Best when the product is useful, but not instantly obvious.",
    vimeoId: "1192950878",
    reverse: false,
  },
   {
    eyebrow: "Visual Driven Explainer",
    title: "Product Realization Format",
    style: "Curiosity → realization moment → immediate practical value",
    bestFor:
      "AI tools, productivity apps, creator software, modern consumer products",
    outcome:
      "Built to rapidly help viewers emotionally understand why a product matters.",
    vimeoId: "1192137970",
    reverse: true,
  },

  {
    eyebrow: "Scalable Ad System",
    title: "High-volume testing format",
    style: "Fast hook → one clear angle → repeatable production system",
    bestFor: "Performance campaigns, paid social testing, TikTok/Reels volume",
    outcome: "Best when brands need many angles tested without overproducing.",
    vimeoIds: ["1193132132", "1193142664", "1193156269"],
    reverse: false,
    showRemix: true,
  },
];

const topPerformers = [
  {
    rank: "01",
    label: "Top Performer",
    views: "2.2K+",
    note: "Relatable affordability hook",
    vimeoId: "PASTE_VIMEO_ID_4",
  },
  {
    rank: "02",
    label: "Strongest Retention",
    views: "900+",
    note: "Simple text-on-face concept",
    vimeoId: "PASTE_VIMEO_ID_5",
  },
  {
    rank: "03",
    label: "Best Iteration Signal",
    views: "800+",
    note: "Short, emotional, repeatable format",
    vimeoId: "PASTE_VIMEO_ID_6",
  },
];

const services = [
  "UGC video concepts",
  "Scriptwriting + hooks",
  "Product explainers",
  "Organic short-form",
  "Paid social variations",
  "High-volume creative testing",
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function VimeoVideo({ vimeoId, label = "Video sample", showRemix, onRemix }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-slate-200/70 to-white blur-2xl" />

      <div className="relative rounded-[2.75rem] border border-slate-300 bg-slate-950 p-2 shadow-2xl shadow-slate-300/40">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950" />

        <div className="overflow-hidden rounded-[2.2rem] bg-slate-900">
          <iframe
            key={vimeoId}
            title={label}
            src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0`}
            className="aspect-[9/16] h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {showRemix && (
        <button
          type="button"
          onClick={onRemix}
          className="mx-auto mt-5 flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md active:scale-95"
        >
          Remix
        </button>
      )}
    </div>
  );
}

function FeaturedVideoBlock({ video }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const videoList = video.vimeoIds || [video.vimeoId];
  const activeVimeoId = videoList[activeIndex];

  const handleRemix = () => {
    setActiveIndex((current) => (current + 1) % videoList.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className={cn(
        "grid items-center gap-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 md:p-8 lg:p-10",
        video.reverse && "md:[&>*:first-child]:order-2"
      )}
    >
      <VimeoVideo
        vimeoId={activeVimeoId}
        label={video.title}
        showRemix={video.showRemix}
        onRemix={handleRemix}
      />

      <div className="flex flex-col gap-5">
        <div>
          <p className="text-sm font-medium text-slate-500">{video.eyebrow}</p>

          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {video.title}
          </h3>
        </div>

        <div className="grid gap-3">
          <InfoRow
            icon={<Play className="h-4 w-4" />}
            label="Video style"
            value={video.style}
          />

          <InfoRow
            icon={<Layers className="h-4 w-4" />}
            label="Best for"
            value={video.bestFor}
          />

          <InfoRow
            icon={<BadgeCheck className="h-4 w-4" />}
            label="Why it works"
            value={video.outcome}
          />
        </div>
      </div>
    </motion.article>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500">
        {icon}
        {label}
      </div>

      <p className="text-base leading-relaxed text-slate-900">{value}</p>
    </div>
  );
}

function Sidebar() {
  return <div></div>;
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm md:p-10 lg:p-14">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionLabel>Tech • Finance • Lifestyle</SectionLabel>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-slate-950 md:text-7xl">
            {PROFILE.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {PROFILE.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View portfolio
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Email inquiries
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <Stat value="3" label="Core niches" />
            <Stat value="High-volume" label="Creative testing" />
            <Stat value="Conversion" label="First approach" />
          </div>
        </div>

        <div className="relative min-h-[640px]">
          <img
            src="/assets/portrait-1.jpeg"
            alt="Gerardo"
            className="absolute right-10 top-[-10px] z-10 h-[470px] w-auto object-contain mix-blend-normal drop-shadow-[0_35px_80px_rgba(15,23,42,0.18)]"
          />

          <div className="absolute bottom-6 right-2 z-20 w-full max-w-[520px] rounded-[1.75rem] border border-slate-200 bg-slate-50/95 p-3 shadow-2xl backdrop-blur-md">
            <div className="rounded-[1.4rem] bg-white/95 p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-950">
                  Creator positioning
                </p>

                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-slate-200" />
                  <span className="h-3 w-3 rounded-full bg-slate-900" />
                </div>
              </div>

              <div className="space-y-3">
                <PositionCard
                  icon={<MonitorSmartphone />}
                  title="Clear product explainers"
                  text="For apps and tools people need to understand before they buy."
                />

                {/* <PositionCard
                  icon={<BarChart3 />}
                  title="Performance-minded hooks"
                  text="Built for scroll-stopping angles, retention, and iteration."
                />

                <PositionCard
                  icon={<Zap />}
                  title="High-volume output"
                  text="Repeatable formats that can scale across campaigns."
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PositionCard({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-slate-950 shadow-sm">
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>

      <div>
        <h3 className="font-semibold text-slate-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-lg font-semibold text-slate-950">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function TopPerformers() {
  return (
    <section id="performers" className="scroll-mt-6">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <SectionLabel>Top-performing samples</SectionLabel>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Proof in a simple, scrollable format.
          </h2>
        </div>

        <p className="max-w-md text-slate-600">
          A Netflix-style row for your strongest videos. Replace the sample
          Vimeo IDs with your real top three performers.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {topPerformers.map((item) => (
          <motion.article
            key={item.rank}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-slate-950">
                  {item.rank}
                </p>

                <p className="text-sm font-medium text-slate-500">
                  {item.label}
                </p>
              </div>

              <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                {item.views}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] bg-slate-950">
              <iframe
                title={item.label}
                src={`https://player.vimeo.com/video/${item.vimeoId}?title=0&byline=0&portrait=0&badge=0`}
                className="aspect-[9/16] w-full"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              {item.note}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <SectionLabel>What I create</SectionLabel>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
            Content built for testing, learning, and scaling.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white md:p-12"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Ads work better when they feel real.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Send over your product, campaign goal, and the kind of content you
          need. Shoot me an email, I can't wait to love your product as much
          as you do!
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${PROFILE.email}?subject=UGC%20Inquiry%20for%20Gerardo&body=Hi%20Gerardo,%0A%0AI%27m%20reaching%20out%20about...`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Email {PROFILE.name.split(" ")[0]}
            <Mail className="h-4 w-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/gerardo-a-aguilera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-800"
          >
            LinkedIn
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex max-w-[1500px] gap-6 p-4 md:p-6">
        <Sidebar />

        <div className="min-w-0 flex-1 space-y-8">
          <Hero />

          <section id="work" className="scroll-mt-6 space-y-6">
            <div className="max-w-3xl">
              <SectionLabel>Featured portfolio</SectionLabel>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Repeatable formats brands can buy.
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Each format is built to feel native to TikTok while solving a different marketing goal.
              </p>
            </div>

            {featuredVideos.map((video) => (
              <FeaturedVideoBlock key={video.title} video={video} />
            ))}
          </section>

          {/* <TopPerformers /> */}
          <Services />
          <Contact />
        </div>
      </div>
    </main>
  );
}