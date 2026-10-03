import type { Metadata } from "next";
import PageBanner from "@/app/components/about/PageBanner";
import LegalPage from "@/app/components/legal/LegalPage";
import {
  JsonLd,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/app/lib/seo";
import { legalLastUpdated, privacyPolicySections } from "@/app/data/legalPages";

const pageTitle = "Privacy Policy";
const pageDescription =
  "Learn how TYS University handles personal information collected through its website, admission enquiry form, recruitment form, and related online services.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const schema = [
    webPageJsonLd({
      name: pageTitle,
      description: pageDescription,
      path: "/privacy-policy",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: pageTitle, path: "/privacy-policy" },
    ]),
  ];

  return (
    <>
      <JsonLd id="privacy-policy-page-jsonld" data={schema} />
      <PageBanner
        eyebrow="Website Policy"
        title="Privacy Policy"
        description="Plain-English privacy information for visitors, applicants, recruitment candidates, and other users of the TYS University website."
      />
      <LegalPage
        title={pageTitle}
        description={pageDescription}
        lastUpdated={legalLastUpdated}
        sections={privacyPolicySections}
      />
    </>
  );
}
