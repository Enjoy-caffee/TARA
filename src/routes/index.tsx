import { createFileRoute } from "@tanstack/react-router";
import {
  Cookie,
  CupSoda,
  Coffee,
  Citrus,
  MapPin,
  Phone,
  Mail,
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
      { name: "ريد فيلفت", price: "30,000", image: cookieRedVelvet },
      { name: "بستاشيو", price: "35,000", image: cookiePistachio },
      { name: "لوتس", price: "30,000", image: cookieLotus },
    ],
  },
  {
    id: "cold-drinks",
    title: "مشروبات باردة",
    icon: CupSoda,
    tint: "bg-baby-blue",
    chip: "bg-baby-blue-deep",
    items: [
      { name: "آيس لاتيه", price: "28,000", image: coldIceLatte },
      { name: "آيس موكا", price: "32,000", image: coldIceMocha },
      { name: "فرابيه فراولة", price: "30,000", image: coldFrappe },
    ],
  },
  {
    id: "hot-drinks",
    title: "مشروبات ساخنة",
    icon: Coffee,
    tint: "bg-soft-green",
    chip: "bg-soft-green-deep",
    items: [
      { name: "هوت شوكليت", price: "28,000", image: hotChocolate },
      { name: "لاتيه", price: "26,000", image: hotLatte },
      { name: "كابتشينو", price: "26,000", image: hotCappuccino },
    ],
  },
  {
    id: "mojito",
    title: "موهيتو",
    icon: Citrus,
    tint: "bg-pastel-pink",
    chip: "bg-pastel-pink-deep",
    items: [
      { name: "موهيتو كلاسيك", price: "30,000", image: mojitoClassic },
      { name: "موهيتو فراولة", price: "33,000", image: mojitoStrawberry },
      { name: "بلو موهيتو", price: "33,000", image: mojitoBlue },
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
        <VisitUs />
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
            className="h-44 w-44 rounded-full object-cover shadow-xl ring-4 ring-card sm:h-56 sm:w-56"
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
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <h3 className="min-w-0 font-display text-lg font-bold">{item.name}</h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-sm font-bold text-primary-foreground ${section.chip}`}
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

/* ---------------------------------- Visit us --------------------------------- */

function VisitUs() {
  return (
    <section id="visit-us" className="scroll-mt-20 bg-baby-blue py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">زورونا</h2>
          <p className="mt-3 text-foreground/70">
            يسعدنا استقبالكم في كافيه Tara — المكان الألطف لألذ كوكيز.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT.maps}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              <MapPin className="h-5 w-5" aria-hidden />
              موقعنا على الخريطة
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-card px-6 py-3 font-display font-bold text-pastel-pink-deep shadow-lg transition-transform hover:scale-105"
            >
              <Instagram className="h-5 w-5" aria-hidden />
              Instagram
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-card px-6 py-3 font-display font-bold text-soft-green-deep shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer ---------------------------------- */

function SiteFooter() {
  const iconLink =
    "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-card hover:text-soft-green-deep";
  return (
    <footer className="bg-soft-green py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold">تواصل معنا</h3>
          <div className="mt-4 flex flex-col items-start gap-1">
            <a href={CONTACT.maps} target="_blank" rel="noreferrer" className={iconLink}>
              <MapPin className="h-5 w-5 shrink-0" aria-hidden />
              موقع الكافيه
            </a>
            <a href={CONTACT.phone} className={iconLink}>
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              <span dir="ltr">+963 900 000 000</span>
            </a>
            <a href={CONTACT.email} className={iconLink}>
              <Mail className="h-5 w-5 shrink-0" aria-hidden />
              hello@tara-cafe.com
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">تابعنا</h3>
          <div className="mt-4 flex flex-col items-start gap-1">
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className={iconLink}>
              <Instagram className="h-5 w-5 shrink-0" aria-hidden />
              <span dir="ltr">@tara_cookies</span>
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className={iconLink}>
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              محادثة واتساب مباشرة
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src={logoAsset.url}
            alt="شعار Tara"
            className="h-20 w-20 rounded-full object-cover ring-2 ring-card"
            loading="lazy"
            width={80}
            height={80}
          />
          <p className="mt-3 font-display text-lg font-bold text-soft-green-deep">Tara</p>
          <p className="text-sm text-foreground/70" dir="ltr">
            One bite is never enough
          </p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-foreground/50">
        جميع الحقوق محفوظة © Tara Café
      </p>
    </footer>
  );
}
