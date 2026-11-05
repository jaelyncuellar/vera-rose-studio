export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-body">
      <div className="mx-auto max-w-3xl px-6 py-45">

        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-header tracking-wide">
            Privacy Policy
          </h1>
          <p className="mt-4 text-md text-foreground/70">
            Your privacy matters here. This policy explains what is collected and why.
          </p>
        </header>

        {/* Section 1 */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl font-header tracking-wider">
            1. Information that may be collected
          </h2>

          <h3 className="font-medium">Information you choose to provide</h3>
          <ul className="list-disc pl-5 text-md leading-relaxed text-foreground/80 space-y-1">
            <li>Full name</li>
            <li>Contact details (email/phone)</li>
            <li>Session details you share in your inquiry (date, session type, references)</li>
            <li>Any additional details you choose to share</li>
          </ul>

          <h3 className="font-medium mt-4">Automatic information</h3>
          <ul className="list-disc pl-5 text-md leading-relaxed text-foreground/80 space-y-1">
            <li>Time and date of visit or submission</li>
            <li>General usage data</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 mb-10">
          <h2 className="text-xl font-header tracking-wider">
            2. How your information is used
          </h2>
          <ul className="list-disc pl-5 text-md text-foreground/80 space-y-1">
            <li>Responding to inquiries and scheduling sessions</li>
            <li>Delivering your private gallery and finished images</li>
            <li>Maintaining site security</li>
            <li>Preventing fraud or misuse</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-header tracking-wider mb-3">
            3. Your images
          </h2>
          <p className="text-md text-foreground/80 leading-relaxed">
            Your photographs are never sold, and they are never shared publicly
            without your written permission. Client galleries are password
            protected, and you may ask for your gallery to be removed at any time.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-header tracking-wider mb-3">
            4. Information sharing
          </h2>
          <p className="text-md text-foreground/80 leading-relaxed">
            Your information is not sold or shared for marketing purposes.
            It may only be shared if required by law, necessary for fraud prevention,
            or to protect rights and security.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-16">
          <h2 className="text-xl font-header tracking-wider mb-3">
            5. Contact
          </h2>
          <p className="text-md text-foreground/80 leading-relaxed">
            Questions about this policy, or a request to update or delete your
            information, can be sent through the Reserve page.
          </p>
        </section>

        <footer className="text-center text-sm text-foreground/50">
          Last updated: November 2026
        </footer>
      </div>
    </main>
  );
}
