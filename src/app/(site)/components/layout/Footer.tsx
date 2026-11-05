import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20">
      <div className="mx-auto max-w-4xl pt-10 pb-8 text-center space-y-2">
        <div className="flex justify-center">
          <Link href="/" className="text-center leading-none">
            <span className="font-accent text-5xl text-primary block">Vera Rose</span>
            <span className="uppercase tracking-logo text-xs text-foreground/70 block mt-1">Studio · New York</span>
          </Link>
        </div>

        <div className="flex justify-center gap-1 text-sm pt-2">
          <Link className="hover:text-foreground/50" href="/privacy-policy">Privacy ·</Link>
          <Link className="hover:text-foreground/50" href="/terms-service">Terms</Link>
        </div>

        <p className="text-xs text-foreground/80">
          Portrait &amp; brand photography · By appointment only
        </p>

        <div className="md:items-end flex justify-center text-xs text-foreground/65">
          <p>©{new Date().getFullYear()} Vera Rose Studio</p>
        </div>
      </div>
    </footer>
  );
}
