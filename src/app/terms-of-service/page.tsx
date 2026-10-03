import type { Metadata } from "next";
import PageBanner from "@/app/components/about/PageBanner";
import LegalPage from "@/app/components/legal/LegalPage";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/app/lib/seo";
import { legalLastUpdated, termsSections } from "@/app/data/legalPages";

const pageTitle = "Terms of Service";
const pageDescription =
  "Review the terms for using the TYS University website, online admission enquiry forms, recruitment forms, documents, and linked services.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  const schema = [
    webPageJsonLd({
      name: pageTitle,
      description: pageDescription,
      path: "/terms-of-service",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: pageTitle, path: "/terms-of-service" },
    ]),
  ];

  return (
    <>
      <JsonLd id="terms-of-service-page-jsonld" data={schema} />
      <PageBanner
        eyebrow="Website Terms"
        title="Terms of Service"
        description="Terms for lawful use of the TYS University website, forms, public documents, and linked online services."
      />
      <LegalPage
        title={pageTitle}
        description={pageDescription}
        lastUpdated={legalLastUpdated}
        sections={termsSections}
      />
    </>
  );
}
