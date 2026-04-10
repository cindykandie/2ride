/* eslint-disable @next/next/no-img-element */

type EventCardProps = {
  event: {
    id: string | number;
    title: string;
    description?: string;
    image?: string;
    location?: string;
    date: string;
    time?: string;
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
  const imageSrc = event.image?.trim() || "/heroimg.png";

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-yellow-400/50">
      <div className="relative h-44 overflow-hidden">
        <img
          src={imageSrc}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-bold text-white">{event.title}</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          <p className="inline-flex rounded-full border border-green-400/40 bg-green-500/10 px-3 py-1 font-medium text-green-300">
            {formatEventDate(event.date)}
          </p>
          {event.time ? (
            <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-500/10 px-3 py-1 font-medium text-yellow-200">
              {event.time}
            </p>
          ) : null}
        </div>

        {event.location ? <p className="text-sm text-white/70">{event.location}</p> : null}
        {event.description ? <p className="text-sm leading-6 text-white/75">{event.description}</p> : null}

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
