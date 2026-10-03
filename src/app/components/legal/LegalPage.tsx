import Link from "next/link";
import { AlertCircle, CalendarDays } from "lucide-react";

export type LegalSection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
  subsections?: Array<{
    title: string;
    body?: string[];
    bullets?: string[];
  }>;
};

type LegalPageProps = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <main className="bg-[#F5F1EA] px-5 py-12 sm:px-8 md:py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
        <aside className="lg:sticky lg:top-40">
          <div className="rounded-lg border border-black/10 bg-white p-5 shadow-[0_16px_45px_rgba(20,17,12,0.06)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6B1E23]">
              Contents
            </p>
            <nav aria-label={`${title} contents`} className="mt-5">
              <ol className="space-y-2 text-sm leading-6">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="group grid grid-cols-[1.8rem_1fr] gap-2 rounded-md px-2 py-2 text-[#423B33] transition hover:bg-[#F5F1EA] hover:text-[#6B1E23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B1E23]"
                    >
                      <span className="font-bold text-[#6B1E23]/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </aside>

        <article className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_22px_70px_rgba(20,17,12,0.08)]">
          <header className="border-b border-black/10 bg-white px-5 py-8 sm:px-8 lg:px-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F1EA] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#6B1E23]">
              <CalendarDays className="size-4" aria-hidden="true" />
              Last updated: {lastUpdated}
            </div>
            <h2 className="mt-6 font-display text-3xl font-black leading-tight tracking-tight text-[#171717] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">
              {description}
            </p>

            <div className="mt-6 flex gap-3 rounded-lg border border-[#F2B90D]/45 bg-[#FFF8E1] p-4 text-sm leading-7 text-[#4A3920]">
              <AlertCircle className="mt-1 size-5 shrink-0 text-[#6B1E23]" aria-hidden="true" />
              <p>
                Some institutional legal details are marked for confirmation.
                These placeholders should be replaced only after verification by
                the University.
              </p>
            </div>
          </header>

          <div className="px-5 py-8 sm:px-8 lg:px-10">
            <div className="space-y-10">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-40 border-b border-black/8 pb-10 last:border-b-0 last:pb-0"
                >
                  <h2 className="font-display text-2xl font-black leading-tight text-[#171717]">
                    {section.title}
                  </h2>
                  <LegalText body={section.body} bullets={section.bullets} />

                  {section.subsections ? (
                    <div className="mt-7 space-y-7">
                      {section.subsections.map((subsection) => (
                        <div key={subsection.title}>
                          <h3 className="font-display text-lg font-bold leading-snug text-[#6B1E23]">
                            {subsection.title}
                          </h3>
                          <LegalText
                            body={subsection.body}
                            bullets={subsection.bullets}
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

function LegalText({
  body,
  bullets,
}: {
  body?: string[];
  bullets?: string[];
}) {
  return (
    <>
      {body ? (
        <div className="mt-4 space-y-4 text-base leading-8 text-gray-600">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {bullets ? (
        <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-gray-600 marker:text-[#6B1E23]">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
