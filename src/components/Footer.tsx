import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
            © 2026 {PERSONAL_INFO.name}. Built with Next.js,
            Tailwind CSS, and GSAP.
        </footer>
    );
}