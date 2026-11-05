export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <div className="mx-auto max-w-3xl px-6 py-45">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-header tracking-wide">
            Terms of Service
          </h1>
          <p className="mt-4 text-md text-foreground/70 leading-relaxed">
            Welcome to this website. By using it, you agree to the terms below.
            <br></br>
            The intention here is simple: clarity, respect, and a great session for everyone involved.
          </p>
        </header>

        {/* Section 1 */}
        <section className="space-y-3 mb-10">
          <h2 className="text-xl font-header tracking-wider">
            1. Who this is for
          </h2>
          <p className="text-md text-foreground/80 leading-relaxed">
            This website presents the portrait and brand photography services of
            Vera Rose Studio and is intended for prospective and current clients.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10 text-md">
          <h2 className="text-xl font-header tracking-wider mb-3">
            2. Bookings &amp; retainers
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Submitting an inquiry does not reserve a date. A session is confirmed
            only when the studio replies with confirmation and the retainer is received.
          </p>
          <ul className="list-disc pl-5 text-foreground/80 space-y-1 mt-2">
            <li>Retainers apply in full to your session fee</li>
            <li>One complimentary reschedule is included with at least 48 hours’ notice</li>
            <li>Session fees and deliverables are as described on the Investment page at the time of booking</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-header tracking-wider mb-3">
            3. Respectful use
          </h2>
          <p className="text-md text-foreground/80 mb-3">
            This space is built on mutual respect. You agree not to:
          </p>
          <ul className="list-disc pl-5 text-md text-foreground/80 space-y-1">
            <li>Harass, spam, or behave inappropriately</li>
            <li>Submit false or misleading information</li>
            <li>Attempt to misuse or disrupt the website</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-header tracking-wider mb-3">
            4. Inquiries &amp; communication
          </h2>
          <p className="text-md text-foreground/80 leading-relaxed">
            When you send an inquiry, you may voluntarily provide information such as your message,
            contact details, and session preferences. Submitting an inquiry does not guarantee
            a response or availability.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-header tracking-wider mb-3">
            5. Images &amp; licensing
          </h2>
          <p className="text-md text-foreground/80 leading-relaxed">
            The studio retains copyright in all images it creates. Clients receive the
            usage license described for their session — personal use for portrait sessions,
            and a commercial license for brand and editorial sessions. Images may not be
            resold or substantially altered without written permission.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-header tracking-wider mb-3">
            6. Content &amp; ownership
          </h2>
          <p className="text-md text-foreground/80 leading-relaxed">
            All branding, text, and visual materials on this site belong to the website owner unless stated otherwise.
            Please do not copy or reuse content without permission.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-xl font-header tracking-wider mb-3">
            7. Boundaries of liability
          </h2>
          <p className="text-md text-foreground/80 leading-relaxed mb-3">
            By using this website, you understand that you are doing so at your own discretion.
            We are not responsible for:
          </p>
          <ul className="list-disc pl-5 text-md text-foreground/80 space-y-1">
            <li>Misuse of the site</li>
            <li>Technical issues</li>
            <li>Third-party interference</li>
            <li>Any indirect damages or misunderstandings</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-16">
          <h2 className="text-xl font-header tracking-wider mb-3">
            8. Updates
          </h2>
          <p className="text-md text-foreground/80 leading-relaxed">
            These terms may be updated occasionally to reflect changes in services or policies.
            <br></br>
            Continued use of the site means you accept those updates.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-foreground/50">
          Last updated: November 2026
        </footer>

      </div>
    </main>
  );
}
