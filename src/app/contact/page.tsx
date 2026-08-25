export const metadata = {
  title: 'Contact — MAN ON ADVENTURE',
  description:
    'Get in touch for custom itineraries, quotes, and expert safari advice. WhatsApp, email, phone, and our quick inquiry form.',
};

export default function ContactPage() {
  return (
    <div className="container py-14 space-y-10">
      <header>
        <h1 className="text-4xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Contact Us</h1>
        <p className="mt-3 max-w-2xl text-white/80">Your African adventure starts with a conversation. Tell us your dates, interests, and comfort level—we’ll handle the rest.</p>
      </header>
      <section className="grid gap-8 md:grid-cols-2">
        <form className="glass rounded-2xl p-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Thank you! We will reply shortly.');}}>
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus-ring" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus-ring" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 focus-ring" />
          </div>
          <button className="rounded-full bg-accent px-6 py-3 text-black font-medium hover:brightness-110 transition ripple" type="submit">Send Inquiry</button>
          <a className="block text-sm opacity-80 hover:opacity-100" href="https://wa.me/255700000000" target="_blank" rel="noreferrer">WhatsApp us</a>
        </form>
        <div className="glass rounded-2xl p-6 space-y-3 text-sm">
          <p><strong>Email:</strong> hello@manonadventure.com</p>
          <p><strong>Phone:</strong> +255 700 000 000</p>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              title="Office Map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1605.151!2d36.680!3d-3.386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sArusha!5e0!3m2!1sen!2s!4v1600000000000"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}