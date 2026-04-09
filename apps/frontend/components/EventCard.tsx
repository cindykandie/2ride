import Image from "next/image";

type EventCardProps = {
  event: {
    id: string | number;
    title: string;
    date: string;
  };
};

function formatEventDate(value: string) {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-yellow-400/50">
      <div className="relative h-44 overflow-hidden">
        <Image
          src="/heroimg.png"
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-bold text-white">{event.title}</h3>
        <p className="inline-flex rounded-full border border-green-400/40 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-300">
          {formatEventDate(event.date)}
        </p>

        <a
          href="https://wa.me/254757541714"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-black transition hover:bg-yellow-300"
        >
          Book Now
        </a>
      </div>
    </article>
  );
}
