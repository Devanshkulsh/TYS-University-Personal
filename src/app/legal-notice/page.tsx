import type { Metadata } from "next";
import PageBanner from "@/app/components/about/PageBanner";
import LegalPage from "@/app/components/legal/LegalPage";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/app/lib/seo";
import { legalLastUpdated, legalNoticeSections } from "@/app/data/legalPages";

const pageTitle = "Legal Notice";
const pageDescription =
  "Read the official website legal notice for TYS University, including information accuracy, intellectual property, external links, and governing-law placeholders requiring confirmation.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/legal-notice",
  },
};

export default function LegalNoticePage() {
  const schema = [
    webPageJsonLd({
      name: pageTitle,
      description: pageDescription,
      path: "/legal-notice",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: pageTitle, path: "/legal-notice" },
    ]),
  ];

  return (
    <>
      <JsonLd id="legal-notice-page-jsonld" data={schema} />
      <PageBanner
        eyebrow="Website Notice"
        title="Legal Notice"
        description="Institutional notice for users of the TYS University website, public information, documents, and external links."
      />
      <LegalPage
        title={pageTitle}
        description={pageDescription}
        lastUpdated={legalLastUpdated}
        sections={legalNoticeSections}
      />
    </>
  );
}
