import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function AwarenessInitiative() {
  return (
    <section
      aria-labelledby="awareness-heading"
      className="bg-[#F4F1EC] px-5 py-14 text-[#0E0D0F] md:px-10 md:py-18 lg:px-16"
    >
      <div className="mx-auto grid max-w-350 items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
        <div className="relative w-full overflow-hidden rounded-lg border border-[#D4C9B8] bg-white p-3 shadow-[0_18px_55px_rgba(14,13,15,0.10)]">
          <div className="relative aspect-[1.88/1] overflow-hidden rounded-md bg-[#F8F5EF]">
            <Image
              src="/awareness/awareness-page-4.jpg"
              alt="Dainik Jagran clipping about the TYS University employment fair and worker health camp"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex flex-col gap-2 border-t border-[#D4C9B8] pt-3 text-xs text-[#5A5248] sm:flex-row sm:items-center sm:justify-between">
            <span>Dainik Jagran, Kanpur edition</span>
            <span>28 September 2026</span>
          </div>
        </div>

        <div className="flex h-full flex-col justify-center">
          <p className="text-sm font-bold uppercase text-[#8B2C2C]">
            Awareness & Community Support
          </p>

          <h2
            id="awareness-heading"
            className="mt-3 max-w-3xl font-display text-3xl font-black leading-tight text-[#0A0905] sm:text-4xl lg:text-5xl"
          >
            Employment fair and worker welfare camp recognized in the press
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#4A4438] sm:text-lg sm:leading-8">
            The clipping highlights a service initiative connected with Thakur
            Yugraj Singh University, featuring a career counselling workshop,
            employment registrations, job placements, and free health support
            for labourers.
          </p>

          <div className="mt-8 flex">
            <Link
              href="/awareness/awareness.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#8B2C2C] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#6F2222] sm:w-auto"
            >
              <FileText size={18} />
              View newspaper clipping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
