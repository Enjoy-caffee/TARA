import { createFileRoute } from "@tanstack/react-router";
import {
  Cookie,
  CupSoda,
  Coffee,
  Citrus,
  MapPin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "../components/Reveal";

import logoAsset from "../assets/tara-logo.jpg.asset.json";
import cookieClassic from "../assets/menu/cookie-classic.jpg";
import cookieRedVelvet from "../assets/menu/cookie-redvelvet.jpg";
import cookiePistachio from "../assets/menu/cookie-pistachio.jpg";
import cookieLotus from "../assets/menu/cookie-lotus.jpg";
import coldIceLatte from "../assets/menu/cold-icelatte.jpg";
import coldIceMocha from "../assets/menu/cold-icemocha.jpg";
import coldFrappe from "../assets/menu/cold-frappe.jpg";
import hotChocolate from "../assets/menu/hot-chocolate.jpg";
import hotLatte from "../assets/menu/hot-latte.jpg";
import hotCappuccino from "../assets/menu/hot-cappuccino.jpg";
import mojitoClassic from "../assets/menu/mojito-classic.jpg";
import mojitoStrawberry from "../assets/menu/mojito-strawberry.jpg";
import mojitoBlue from "../assets/menu/mojito-blue.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tara Café | منيو الكوكيز والمشروبات" },
      {
        name: "description",
        content:
          "كافيه Tara المختص بالكوكيز — تصفح منيو الكوكيز والمشروبات الباردة والساخنة والموهيتو. One bite is never enough!",
      },
      { property: "og:title", content: "Tara Café | منيو الكوكيز والمشروبات" },
      {
        property: "og:description",
        content: "منيو كافيه Tara — كوكيز، مشروبات باردة وساخنة، وموهيتو. One bite is never enough!",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ar_AR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ */
/* بيانات مؤقتة — تُستبدل بالأسعار والأصناف الأصلية عند توفرها          */
/* ------------------------------------------------------------------ */

type MenuItem = { name: string; price: string; image: string };
type MenuSection = {
  id: string;
  title: string;
  icon: typeof Cookie;
  tint: string;
  chip: string;
  items: MenuItem[];
};

const SECTIONS: MenuSection[] = [
  {
    id: "cookies",
    title: "كوكيز",
    icon: Cookie,
    tint: "bg-pastel-pink",
    chip: "bg-pastel-pink-deep",
    items: [
      { name: "كوكيز شوكولاتة كلاسيك", price: "25,000", image: cookieClassic },
      { name: "M&M's", price: "30,000", image: cookieClassic },
      { name: "لوتس", price: "30,000", image: cookieLotus },
      { name: "دوبل شوكو", price: "30,000", image: cookieClassic },
      { name: "ريد فيلفت", price: "30,000", image: cookieRedVelvet },
      { name: "شوفان", price: "28,000", image: cookieClassic },
      { name: "بستاشيو", price: "35,000", image: cookiePistachio },
      { name: "بيرث داي", price: "35,000", image: cookieRedVelvet },
      { name: "أوريو", price: "30,000", image: cookieClassic },
      { name: "سمورز", price: "32,000", image: cookieLotus },
      { name: "شوكو البندق", price: "32,000", image: cookiePistachio },
      { name: "كراميل", price: "30,000", image: cookieLotus },
      { name: "كندر", price: "35,000", image: cookieClassic },
      { name: "فراولة", price: "30,000", image: cookieRedVelvet },
      { name: "مونستر", price: "38,000", image: cookiePistachio },
    ],
  },
  {
    id: "cold-drinks",
    title: "مشروبات باردة",
    icon: CupSoda,
    tint: "bg-baby-blue",
    chip: "bg-baby-blue-deep",
    items: [
      { name: "لاتيه فراولة", price: "30,000", image: coldFrappe },
      { name: "ماتشا كوكب الأرض", price: "35,000", image: coldIceLatte },
      { name: "لاتيه ماتشا", price: "32,000", image: coldIceLatte },
      { name: "لاتيه بستاشيو", price: "35,000", image: coldIceMocha },
      { name: "لاتيه فانيليا", price: "30,000", image: coldIceLatte },
      { name: "كراميل ماكياتو", price: "32,000", image: coldIceMocha },
      { name: "سبانيش لاتيه", price: "32,000", image: coldIceLatte },
      { name: "لاتيه تيراميسو", price: "35,000", image: coldIceMocha },
      { name: "لاتيه الموز", price: "32,000", image: coldFrappe },
      { name: "لاتيه ماتشا بالفراولة", price: "35,000", image: coldFrappe },
    ],
  },
  {
    id: "hot-drinks",
    title: "مشروبات ساخنة",
    icon: Coffee,
    tint: "bg-soft-green",
    chip: "bg-soft-green-deep",
    items: [
      { name: "لاتيه بستاشيو", price: "32,000", image: hotLatte },
      { name: "لاتيه", price: "26,000", image: hotLatte },
      { name: "موكا", price: "28,000", image: hotChocolate },
      { name: "لاتيه فانيليا", price: "28,000", image: hotLatte },
      { name: "لاتيه ماتشا", price: "30,000", image: hotLatte },
      { name: "هوت شوكلت", price: "28,000", image: hotChocolate },
      { name: "كابتشينو", price: "26,000", image: hotCappuccino },
      { name: "إسبريسو", price: "22,000", image: hotCappuccino },
      { name: "أمريكانو", price: "24,000", image: hotCappuccino },
    ],
  },
  {
    id: "mojito",
    title: "موهيتو",
    icon: Citrus,
    tint: "bg-pastel-pink",
    chip: "bg-pastel-pink-deep",
    items: [
      { name: "بلوبيري موهيتو", price: "33,000", image: mojitoBlue },
      { name: "ستروبيري موهيتو", price: "33,000", image: mojitoStrawberry },
      { name: "رمان موهيتو", price: "33,000", image: mojitoStrawberry },
      { name: "بلو كوكونت موهيتو", price: "35,000", image: mojitoBlue },
      { name: "توت موهيتو", price: "33,000", image: mojitoStrawberry },
      { name: "ليمون موهيتو", price: "30,000", image: mojitoClassic },
      { name: "باشن فروت موهيتو", price: "35,000", image: mojitoClassic },
      { name: "أناناس موهيتو", price: "33,000", image: mojitoClassic },
    ],
  },
];

const CONTACT = {
  instagram: "https://instagram.com/tara_cookies",
  whatsapp: "https://wa.me/963900000000",
  phone: "tel:+963900000000",
  email: "mailto:hello@tara-cafe.com",
  maps: "https://maps.google.com/?q=Tara+Cookies",
};

function Index() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <Hero />
      <main>
        {SECTIONS.map((section) => (
          <MenuSectionBlock key={section.id} section={section} />
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------------------------- Header ---------------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img
            src={logoAsset.url}
            alt="شعار كافيه Tara"
            className="h-11 w-11 rounded-full object-cover"
            width={44}
            height={44}
          />
          <span className="font-display text-2xl font-bold text-soft-green-deep">Tara</span>
        </a>
        <nav aria-label="أقسام المنيو" className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <s.icon className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">{s.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ----------------------------------- Hero ----------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-pastel-pink">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-16 text-center sm:py-24">
        <Reveal>
          <img
            src={logoAsset.url}
            alt="شعار كافيه Tara مع كوكيز الفراولة"
            className="logo-float h-44 w-44 rounded-full object-cover shadow-pink ring-4 ring-card sm:h-56 sm:w-56"
            width={224}
            height={224}
          />
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 font-display text-5xl font-extrabold text-soft-green-deep sm:text-6xl">
            Tara
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-3 text-lg font-medium text-foreground/70" dir="ltr">
            One bite is never enough
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cookies"
              className="rounded-full bg-primary px-8 py-3 font-display text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              تصفح المنيو
            </a>
            <a
              href="#visit-us"
              className="rounded-full bg-card px-8 py-3 font-display text-lg font-bold text-soft-green-deep shadow-lg transition-transform hover:scale-105"
            >
              زورونا
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Menu sections ------------------------------ */

function MenuSectionBlock({ section }: { section: MenuSection }) {
  const Icon = section.icon;
  return (
    <section id={section.id} className="scroll-mt-20 py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="flex items-center gap-3">
            <span
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${section.tint} text-foreground`}
            >
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{section.title}</h2>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {section.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <article className="menu-card group flex min-h-32 overflow-hidden rounded-3xl border border-pastel-pink/60 bg-card p-3 shadow-pink transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-strong">
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-32">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 p-3">
                  <h3 className="font-display text-lg font-bold leading-snug">{item.name}</h3>
                  <span
                    className={`w-fit shrink-0 rounded-full px-3 py-1 text-sm font-bold text-primary-foreground ${section.chip}`}
                  >
                    {item.price} ل.س
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer ---------------------------------- */

function SiteFooter() {
  return (
    <footer id="visit-us" className="scroll-mt-20 bg-soft-green py-14 sm:py-16">
      <Reveal>
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
          <img
            src={logoAsset.url}
            alt="شعار Tara"
            className="h-24 w-24 rounded-full object-cover shadow-pink ring-2 ring-card"
            loading="lazy"
            width={96}
            height={96}
          />
          <h2 className="mt-4 font-display text-3xl font-bold text-soft-green-deep">Tara</h2>
          <p className="mt-1 text-sm text-foreground/70" dir="ltr">
            One bite is never enough
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href={CONTACT.maps} target="_blank" rel="noreferrer" className="footer-link">
              <MapPin className="h-5 w-5" aria-hidden />
              موقعنا
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="footer-link">
              <Instagram className="h-5 w-5" aria-hidden />
              Instagram
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="footer-link">
              <MessageCircle className="h-5 w-5" aria-hidden />
              WhatsApp
            </a>
          </div>
          <p className="mt-9 text-xs text-foreground/55">جميع الحقوق محفوظة © Tara Café</p>
        </div>
      </Reveal>
    </footer>
  );
}
