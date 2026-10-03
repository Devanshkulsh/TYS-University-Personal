import type { LegalSection } from "@/app/components/legal/LegalPage";

export const legalLastUpdated = "October 3, 2026";

export const verifiedInstitutionalDetails = {
  institutionName: "Thakur Yugraj Singh University (TYS University)",
  website: "https://tysuniversity.com",
  email: "admissions@tysuniversity.edu.in",
  tollFree: "1800 890 1705",
  admissionDesk: [
    "+91 9194798070",
    "+91 9194798071",
    "+91 9194798072",
    "+91 9194798073",
  ],
  address: "Shanti Nagar, Fatehpur, Uttar Pradesh, India 212601",
};

const contactLine =
  "For general website or privacy queries, users may contact TYS University at admissions@tysuniversity.edu.in or through the published admission/helpdesk numbers. Dedicated privacy, grievance, nodal, or data protection officer details are [UNIVERSITY TO CONFIRM].";

export const privacyPolicySections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: [
      "This Privacy Policy explains how Thakur Yugraj Singh University, also referred to as TYS University, Fatehpur, Uttar Pradesh handles personal information collected through its official website, https://tysuniversity.com.",
      "The policy is intended for website visitors, prospective students, applicants, recruitment candidates, parents or guardians, and other users who interact with the University's online services.",
      "The exact registered legal name, governing Act, and designated privacy or grievance contacts are [UNIVERSITY TO CONFIRM].",
    ],
  },
  {
    id: "scope",
    title: "Scope",
    body: [
      "This policy covers information collected through the public website, online admission enquiry form, recruitment application form, admissions assistant, contact links, document/PDF views, and related website interactions.",
      "It does not describe offline admissions records, student ERP systems, learning management systems, employee systems, payment gateways, or hostel/academic administration systems unless those systems are expressly connected to this website.",
    ],
  },
  {
    id: "information-collected",
    title: "Information We Collect",
    subsections: [
      {
        title: "Information provided directly by users",
        bullets: [
          "Admission enquiry form: student name, email address, mobile number, state, district, preferred discipline, and preferred programme.",
          "Recruitment application form: post details, department, faculty or school, advertisement number, candidate name, date of birth, gender, nationality, Aadhaar number if provided, PAN number if provided, marital status, parent/spouse details, category, domicile, disability information if provided, permanent and mailing address, email address, WhatsApp number, present employment details, educational qualification details, declarations, CV/resume file metadata, date, and place.",
          "Admissions assistant: selected discipline, selected programme, selected enquiry topic, and WhatsApp message text if the user chooses to continue on WhatsApp.",
          "Newsletter footer field: email address entered by the user. In the current codebase, this footer form does not submit to a backend service.",
          "Search box: search query entered by the user. The current implementation redirects the query to Google Search with the phrase TYS University.",
        ],
      },
      {
        title: "Information collected automatically",
        bullets: [
          "The website and its hosting infrastructure may generate ordinary technical information such as IP address, browser type, device information, pages requested, timestamps, referring URLs, and security or error logs.",
          "The audited codebase does not include Google Analytics, Google Tag Manager, Meta Pixel, reCAPTCHA, payment tracking, localStorage, sessionStorage, or direct cookie handling.",
        ],
      },
      {
        title: "Information received from third parties",
        body: [
          "The audited website does not show an integration that imports personal data from a third-party CRM, payment gateway, analytics provider, or student portal. If the University uses such systems outside this website, those details are [UNIVERSITY TO CONFIRM].",
        ],
      },
    ],
  },
  {
    id: "purposes",
    title: "Purpose of Processing",
    bullets: [
      "Responding to admission enquiries and counselling requests.",
      "Helping prospective students select programmes and understand admission steps.",
      "Processing recruitment applications submitted through the website.",
      "Sending or enabling communications through email, phone, WhatsApp, or other user-selected channels.",
      "Maintaining website operations, troubleshooting errors, preventing misuse, and securing online forms.",
      "Generating and maintaining records needed for institutional administration, audit, dispute resolution, and applicable legal or regulatory obligations.",
      "Improving website content, usability, and public information, using only information reasonably necessary for that purpose.",
    ],
  },
  {
    id: "consent",
    title: "Consent and User Choices",
    body: [
      "Where information is submitted through a form, the user provides the information voluntarily for the stated purpose of that form.",
      "The current website does not display a separate cookie-consent banner or marketing-consent workflow. The University should review whether additional consent controls are required if analytics, advertising pixels, cookies, or automated marketing tools are added later.",
      "A user may choose not to submit an online form, but the University may then be unable to respond to the enquiry or process the requested online service.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    body: [
      "The audited codebase does not set application cookies and does not include analytics or advertising scripts. Essential cookies may still be used by hosting, security, embedded document viewers, browser features, or third-party platforms when users follow external links.",
      "The website uses external resources and links including Google Search, WhatsApp, YouTube links, social media links, Cloudinary-hosted images, Unsplash images, Pinterest-hosted imagery, and embedded PDF viewers. Those providers may process technical information under their own policies.",
    ],
  },
  {
    id: "sharing",
    title: "Data Sharing",
    bullets: [
      "Authorized University personnel may access submitted information for admissions, recruitment, administration, technical support, or compliance purposes.",
      "Admission and recruitment submissions are forwarded by the server to configured Google Apps Script endpoints, understood from the codebase to be used for Google Sheets-style records.",
      "Hosting, infrastructure, communication, document, and technology providers may process limited information needed to operate the website.",
      "Information may be disclosed to regulators, courts, government authorities, law-enforcement agencies, or statutory bodies where required by applicable law.",
      "The audited codebase does not indicate that the University sells personal information.",
    ],
  },
  {
    id: "security",
    title: "Data Security",
    body: [
      "The University should use reasonable technical and organisational safeguards appropriate to the nature of the information, including restricted access, secure transmission where available, form validation, technical monitoring, and administrative controls.",
      "No internet transmission or storage system can be guaranteed as completely secure. Users should avoid submitting information that is not requested by the relevant form.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    body: [
      "Information should be retained only for as long as necessary for the purpose for which it was collected, including admissions follow-up, recruitment processing, institutional records, legal compliance, audit, dispute resolution, and security purposes.",
      "Exact retention periods for admission enquiries, recruitment records, server logs, and downloaded backups are [UNIVERSITY TO CONFIRM].",
    ],
  },
  {
    id: "rights",
    title: "Data Principal Rights",
    body: [
      "Subject to applicable Indian law, including the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025 as and when relevant provisions apply or are notified, users may have rights relating to access to information about processing, correction, updating, erasure, withdrawal of consent, and grievance redressal.",
      "Requests may be subject to identity verification, lawful exceptions, institutional record-retention obligations, pending admissions or recruitment processes, legal claims, or regulatory requirements.",
      contactLine,
    ],
  },
  {
    id: "children",
    title: "Children and Minors",
    body: [
      "Because prospective university applicants may include minors, the University should avoid collecting unnecessary information from children and should process information relating to minors only where appropriate for admissions, counselling, lawful institutional purposes, or with valid parental/guardian involvement where required by law.",
      "Any age threshold, parental consent workflow, or child-data handling process required by applicable law is [UNIVERSITY TO CONFIRM].",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    body: [
      "The website links to external platforms such as WhatsApp, Google Search, Facebook, Instagram, YouTube, and the developer's website. External websites and platforms are governed by their own terms and privacy practices.",
    ],
  },
  {
    id: "changes-contact",
    title: "Changes and Contact",
    body: [
      "The University may update this Privacy Policy from time to time. The latest version should be published on this page with an updated effective date.",
      contactLine,
    ],
  },
];

export const legalNoticeSections: LegalSection[] = [
  {
    id: "ownership",
    title: "Website Ownership",
    body: [
      "This website, https://tysuniversity.com, is presented as the official public website of Thakur Yugraj Singh University, also referred to as TYS University, Fatehpur, Uttar Pradesh.",
      "The exact registered legal name, establishment details, governing Act or Ordinance, sponsoring body, and registered office are [UNIVERSITY TO CONFIRM].",
    ],
  },
  {
    id: "institutional-information",
    title: "Institutional Information",
    bullets: [
      "University name used on the website: Thakur Yugraj Singh University. TYS University is the abbreviated name used for the same University.",
      "Campus address published on the website: Shanti Nagar, Fatehpur, Uttar Pradesh, India 212601.",
      "Official website: https://tysuniversity.com.",
      "Published email: admissions@tysuniversity.edu.in.",
      "Published phone numbers: 1800 890 1705, +91 9194798070, +91 9194798071, +91 9194798072, and +91 9194798073.",
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy of Information",
    body: [
      "The University aims to publish accurate and current information. However, academic programmes, admissions, eligibility, fees, calendars, faculty information, vacancies, notices, schedules, facilities, and other institutional details may change.",
      "Users should verify time-sensitive or decision-critical information with the University before acting on it. Official notifications, admission communications, statutory disclosures, and written University communications should prevail where applicable.",
    ],
  },
  {
    id: "academic-admission",
    title: "Academic and Admission Information",
    bullets: [
      "Submission of an online enquiry or application does not guarantee admission, eligibility, seat allocation, scholarship, placement, hostel allotment, or any academic benefit.",
      "Admissions are subject to applicable University rules, eligibility criteria, document verification, programme availability, timelines, and lawful regulatory requirements.",
      "Fees, schedules, programme structures, and admission processes may be revised. The current project does not contain verified fee figures for many programmes.",
    ],
  },
  {
    id: "regulatory-claims",
    title: "Regulatory and Recognition Claims",
    body: [
      "This Legal Notice does not independently assert UGC, State Government, NAAC, AICTE, NCTE, PCI, INC, NCISM, BCI, or other statutory recognition unless such information is separately verified by the University from authoritative sources.",
      "The audited website includes institutional and legacy references, including references to UGC Act Sections 2(f) and 12(B) for the institution that laid the foundation for the University. Those regulatory and legacy details should be verified by the University before being treated as current legal assertions for the University.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: [
      "Unless otherwise stated, website design, text, layout, University names and marks, logos, graphics, photographs, videos, documents, and other University-published materials are protected by applicable intellectual-property laws.",
      "Users may view and download public documents for lawful personal, academic, admission, recruitment, or reference purposes. Unauthorized reproduction, modification, publication, commercial use, or distribution is prohibited except where permitted by law or written University permission.",
      "Third-party logos, social media marks, platform names, images, documents, or embedded materials remain the property of their respective owners.",
    ],
  },
  {
    id: "external-links",
    title: "External Links and Third-Party Content",
    body: [
      "The website may link to external websites or platforms. Such links are provided for convenience and do not automatically mean that the University controls or endorses the external content.",
      "The University is not responsible for third-party website availability, accuracy, privacy practices, security, or terms of use.",
    ],
  },
  {
    id: "availability",
    title: "Website Availability",
    body: [
      "The University may update, suspend, modify, or discontinue any part of the website for maintenance, security, operational, legal, or institutional reasons. Continuous or error-free availability is not guaranteed.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: [
      "To the extent permitted by applicable law, the University is not liable for losses arising solely from reliance on outdated website content, third-party links, technical interruptions, user device issues, or unauthorized use of the website.",
      "Nothing in this notice is intended to exclude liability that cannot be excluded under applicable law or to limit any statutory rights that apply to users.",
    ],
  },
  {
    id: "law-jurisdiction",
    title: "Governing Law and Jurisdiction",
    body: [
      "This Legal Notice is governed by the laws of India.",
      "Competent courts and territorial jurisdiction are [UNIVERSITY TO CONFIRM JURISDICTION / COMPETENT COURTS].",
    ],
  },
  {
    id: "updates-contact",
    title: "Updates and Contact",
    body: [
      "The University may update this Legal Notice from time to time. Users should refer to the latest version published on this page.",
      contactLine,
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: [
      "By accessing or using https://tysuniversity.com, users agree to use the website in accordance with these Terms of Service, the Privacy Policy, the Legal Notice, and applicable law.",
      "If a user does not agree with these terms, the user should not use the website or submit online forms.",
    ],
  },
  {
    id: "website-use",
    title: "Permitted Website Use",
    bullets: [
      "Use the website only for lawful academic, admission, recruitment, informational, or institutional purposes.",
      "Do not attempt unauthorized access, security testing without permission, disruption, reverse engineering, or misuse of website infrastructure.",
      "Do not upload or submit malicious files, false information, impersonation attempts, abusive content, or fraudulent applications.",
      "Do not scrape, copy, or republish website content in a manner that violates applicable law, intellectual-property rights, or reasonable technical restrictions.",
      "Do not interfere with the website, forms, admissions assistant, embedded documents, or external integrations.",
    ],
  },
  {
    id: "forms",
    title: "Admission, Enquiry, and Recruitment Forms",
    body: [
      "Users are responsible for ensuring that information submitted through website forms is accurate, current, and lawfully provided.",
      "Submitting an enquiry, admission form, recruitment form, or WhatsApp message does not guarantee admission, seat allocation, employment, interview call, scholarship, eligibility, placement, fee concession, hostel allotment, or any other academic or institutional benefit.",
      "Recruitment applicants should verify the official advertisement, eligibility, submission instructions, required documents, and deadlines before applying.",
    ],
  },
  {
    id: "academic-information",
    title: "Academic Information",
    body: [
      "Programme names, eligibility details, duration, availability, admission steps, calendars, and institutional notices are published for public information and may change.",
      "Where there is a conflict, official University notifications, statutory disclosures, written communications, and applicable regulations should prevail.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: [
      "University-owned website content may be used only for personal reference, admissions, academic awareness, recruitment, or other lawful non-commercial purposes unless written permission is granted.",
      "Users must not remove copyright notices, misuse the University name or logo, or imply affiliation or endorsement without authorization.",
      "Third-party materials are subject to their own rights and restrictions.",
    ],
  },
  {
    id: "user-submissions",
    title: "User-Submitted Content and Documents",
    body: [
      "The website does not provide a public user-generated-content platform. It does allow users to submit personal information, form responses, and recruitment file metadata for limited institutional purposes.",
      "Users must not submit information or documents that are false, infringing, unlawful, malicious, or not theirs to provide.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    body: [
      "The website uses or links to third-party services including Google Search, Google Apps Script endpoints configured for form submissions, WhatsApp, social media platforms, Cloudinary-hosted images, Unsplash images, Pinterest-hosted imagery, YouTube links, and browser PDF viewers.",
      "Use of those services may be subject to third-party terms, privacy policies, availability, and security practices.",
    ],
  },
  {
    id: "availability-restriction",
    title: "Availability and Restriction of Access",
    body: [
      "The University may restrict, suspend, or block access where reasonably necessary for website security, misuse prevention, legal compliance, maintenance, operational integrity, or protection of University systems and users.",
      "The University does not guarantee uninterrupted, error-free, or always-current access to the website.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: [
      "Website information is provided for general institutional information and should not be treated as a final legal, admission, fee, employment, or regulatory determination unless expressly issued as an official notice or written University communication.",
      "Nothing in these terms excludes obligations or liability that cannot be excluded under applicable law.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Website and Terms",
    body: [
      "The University may update website content, forms, documents, programmes, notices, integrations, and these terms from time to time.",
      "Continued use of the website after publication of updated terms indicates acceptance of the updated terms, subject to applicable law.",
    ],
  },
  {
    id: "law-contact",
    title: "Governing Law and Contact",
    body: [
      "These terms are governed by the laws of India. Competent courts and territorial jurisdiction are [UNIVERSITY TO CONFIRM JURISDICTION / COMPETENT COURTS].",
      contactLine,
    ],
  },
];
