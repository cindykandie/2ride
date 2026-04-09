import Image from "next/image";

async function getEvents() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function Home() {
  const events = await getEvents();

  return (
    <main className="bg-black text-white">
      {/* 🔥 HEADER */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="2Ride Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">2Ride</h1>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* 🚴 HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Epic Adventures on 2 Wheels 🚴‍♂️
        </h1>
        <p className="text-gray-400 mb-6">
          Cycling expeditions • Private bookings • Community rides
        </p>

        <a
          href="https://www.instagram.com/2ride_adventures/"
          target="_blank"
          className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold"
        >
          Follow Us on Instagram
        </a>
      </section>

      {/* 📖 ABOUT */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About 2Ride</h2>

        <p className="text-gray-400">
          2Ride Adventures is all about bringing people together through
          unforgettable cycling experiences. From scenic forest trails to epic
          road rides, we create adventures that challenge, excite, and connect
          riders of all levels.
        </p>
      </section>

      {/* 🎟 EVENTS */}
      <section id="events" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {events.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">
              No events yet...
            </p>
          ) : (
            events.map((event: any) => (
              <div
                key={event.id}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-400">{event.date}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 📞 CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 text-center bg-gray-900"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <p className="text-gray-400 mb-4">
          Book a ride or ask anything 👇
        </p>

        <p className="text-xl font-semibold mb-2">
          📞 0757 541 714
        </p>

        <a
          href="https://wa.me/254757541714"
          target="_blank"
          className="inline-block mt-4 bg-green-500 text-black px-6 py-3 rounded-full font-semibold"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* 🦶 FOOTER */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} 2Ride Adventures 🚴‍♂️
      </footer>
    </main>
  );
}