import { PERSONAL_INFO } from "@/data/portfolioData";
import { FileText, Terminal } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070B14]/80 border-b border-slate-800/80">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a
                    href="#"
                    className="text-xl font-bold tracking-tighter flex items-center gap-2"
                >
                    <Terminal className="w-5 h-5 text-emerald-400" />
                    <span>WSD</span>
                    <span className="text-emerald-400">.</span>
                </a>

                <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
                    <a href="#about" className="hover:text-emerald-400 transition-colors">
                        About
                    </a>
                    <a href="#skills" className="hover:text-emerald-400 transition-colors">
                        Skills
                    </a>
                    <a href="#projects" className="hover:text-emerald-400 transition-colors">
                        Projects
                    </a>
                    <a href="#archive" className="hover:text-emerald-400 transition-colors">
                        Archive
                    </a>
                    <a href="#experience" className="hover:text-emerald-400 transition-colors">
                        Experience
                    </a>
                    <a href="#contact" className="hover:text-emerald-400 transition-colors">
                        Contact
                    </a>
                </nav>

                <a
                    href={PERSONAL_INFO.resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-lg hover:bg-emerald-500 hover:text-slate-950 transition-colors flex items-center gap-1.5"
                >
                    <FileText className="w-3.5 h-3.5" />
                    View Resume
                </a>
            </div>
        </header>
    );
}