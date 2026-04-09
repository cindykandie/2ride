import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden">
      <Image
        src="/heroimg.png"
        alt="Cyclists on an outdoor adventure"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 text-center md:px-12">
        <div className="max-w-3xl pt-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400 md:text-base">
            Cycling Adventures Company
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
            Ride Further.
            <span className="block text-yellow-400">Discover Wilder Routes.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Community rides, private expeditions, and unforgettable weekend
            escapes built for riders who want energy, connection, and premium
            outdoor experiences.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#events"
              className="w-full rounded-full bg-yellow-400 px-8 py-3 text-center text-base font-bold text-black transition hover:bg-yellow-300 sm:w-auto"
            >
              View Events
            </a>
            <a
              href="https://wa.me/254757541714"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-white/50 bg-black/35 px-8 py-3 text-center text-base font-bold text-white transition hover:border-green-400 hover:text-green-300 sm:w-auto"
            >
              Join WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
