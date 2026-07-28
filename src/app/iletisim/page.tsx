import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: pageMeta.iletisim.title },
  description: pageMeta.iletisim.description,
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: pageMeta.iletisim.title,
    description: pageMeta.iletisim.description,
    url: "/iletisim",
  },
};

export default function IletisimPage() {
  return <ContactSection titleAs="h1" />;
}
