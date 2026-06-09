import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display gold-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full btn-gold btn-gold-hover px-6 py-3 text-sm">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full btn-gold btn-gold-hover px-5 py-2.5 text-sm"
          >Try again</button>
          <a href="/" className="rounded-full btn-outline-gold px-5 py-2.5 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

const ldJson = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SITE.name,
  image: "/og-image.jpg",
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ECIL",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  url: "/",
  openingHours: SITE.hoursMachine,
  priceRange: "₹₹",
  sameAs: [SITE.mapsUrl],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dreams Family Salon & Tattoo Studio | Best Salon in ECIL Hyderabad" },
      { name: "description", content: SITE.description },
      { name: "author", content: SITE.name },
      { name: "keywords", content: "Dreams Family Salon, Salon in ECIL Hyderabad, Best Salon ECIL, Tattoo Studio ECIL, Beauty Salon Hyderabad, Hair Salon Hyderabad, Bridal Makeup Hyderabad, Piercing ECIL" },
      { name: "theme-color", content: "#0F0F0F" },
      { property: "og:title", content: "Dreams Family Salon & Tattoo Studio | Best Salon in ECIL Hyderabad" },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE.name },
      { name: "twitter:description", content: SITE.description },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ldJson) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}
