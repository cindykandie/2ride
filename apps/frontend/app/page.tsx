import Image from "next/image";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { EVENTS_API_URL } from "@/lib/api";

type EventItem = {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
  location?: string;
  date: string;
  time?: string;
};

async function getEvents(): Promise<EventItem[]> {
  try {
    const res = await fetch(EVENTS_API_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(
        `Failed to fetch events from ${EVENTS_API_URL} (${res.status} ${res.statusText})${body ? `: ${body}` : ""}`
      );
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

const aboutHighlights = [
  {
    title: "Guided Cycling Routes",
    text: "Curated routes through scenic roads and trails for every rider level.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="6" cy="17" r="3" />
        <circle cx="18" cy="17" r="3" />
        <path d="M6 17l4-8h3l5 8" />
        <path d="M10 9l3 8" />
      </svg>
    ),
  },
  {
    title: "Easy Private Bookings",
    text: "Book your own custom ride experience with a dedicated support team.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 11h18" />
      </svg>
    ),
  },
  {
    title: "Strong Community",
    text: "Ride with a vibrant network of cyclists built on support and adventure.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="9.5" cy="7" r="3" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 4.13a3 3 0 010 5.75" />
      </svg>
    ),
  },
];

export default async function Home() {
  const events = await getEvents();

  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />

      <section id="about" className="relative overflow-hidden px-6 py-20 md:px-12">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-zinc-950/70 to-black" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 sm:h-96">
            <Image
              src="/heroimg.png"
              alt="2Ride community cyclists riding together"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              About 2Ride
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Built for Riders Who Chase Adventure Together
            </h2>
            <p className="mt-5 text-white/75">
              2Ride turns ordinary weekends into high-energy ride stories. We
              bring together newcomers and seasoned cyclists for route-rich,
              premium adventure experiences that are fun, social, and
              unforgettable.
            </p>

            <div className="mt-8 space-y-4">
              {aboutHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="mt-0.5 rounded-lg bg-green-500/15 p-2 text-green-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-6xl px-6 py-20 md:px-12">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Upcoming Events
          </p>
          <h2 className="text-3xl font-black sm:text-4xl">Pick Your Next Ride</h2>
          <a
            href="https://wa.me/254757541714"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-green-400/40 bg-green-500/15 px-5 py-2 text-sm font-semibold text-green-300 transition hover:bg-green-500/25"
          >
            Book a Private Trip
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.length === 0 ? (
            <p className="col-span-full rounded-2xl border border-white/10 bg-zinc-950/70 p-10 text-center text-white/70">
              No events yet. New adventures are being prepared.
            </p>
          ) : (
            events.map((event) => <EventCard key={event.id} event={event} />)
          )}
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Let&apos;s Plan Your Next Cycling Adventure
          </h2>
          <p className="mt-4 text-white/75">
            Reach out for bookings, questions, or custom routes for your group.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+254757541714"
              className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-yellow-400/45"
            >
              <p className="text-sm uppercase tracking-wider text-white/60">Phone</p>
              <p className="mt-2 text-xl font-bold">+254 757 541 714</p>
            </a>

            <a
              href="https://www.instagram.com/2ride_adventures/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-yellow-400/45"
            >
              <p className="text-sm uppercase tracking-wider text-white/60">Instagram</p>
              <p className="mt-2 text-xl font-bold">@2ride_adventures</p>
            </a>
          </div>

          <a
            href="https://wa.me/254757541714"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-green-500 px-8 py-4 text-base font-black text-black transition hover:bg-green-400 sm:w-auto"
          >
            Join WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="2Ride Logo" width={36} height={36} />
            <p className="font-semibold text-white">2Ride Adventures</p>
          </div>

          <p className="text-sm text-white/65">Epic adventures on 2 wheels 🚴‍♂️</p>

          <div className="flex items-center gap-5 text-sm font-semibold">
            <a
              href="https://www.instagram.com/2ride_adventures/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-yellow-400"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/254757541714"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-green-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
