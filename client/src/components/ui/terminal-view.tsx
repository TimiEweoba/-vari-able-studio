import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Command } from "lucide-react";
import { cn } from "@/lib/utils";

const SYSTEM_LOGS = [
    "// VARIABLE_STUDIO_OS v4.0.2",
    "// INITIALIZING_CORE_ENGINE...",
    "// LOADING_TEMPLATES_COLLECTION...",
    "// CONNECTING_STRIPE_API_GATEWAY...",
    "// SYNCING_DEPLOYMENT_LAYERS...",
    "// AUTHENTICATING_MAKERS_V_07...",
    "// SYSTEM_READY: READY_TO_SHIP",
    "// ",
    "> vari-able --status",
    "Status: Productizing Agency Services...",
    "Uptime: 2026.01.07.19.45",
    "Payload: High-Fidelity UI/UX",
    "> vari-able --stack",
    "Core: Vite, React 19, TS",
    "Motion: Framer Motion + GSAP",
    "Styling: Tailwind 4.0 (Engineered)",
    "DB: Drizzle + Neon (Serverless)",
    "> vari-able --deploy",
    "Deploying to 'LAGOS_NODE_01'...",
    "Success: MVP launched in 14 days.",
    "> vari-able --help",
    "Available modules: --status, --stack, --deploy, --team, --labs",
];

export function TerminalView() {
    const [isOpen, setIsOpen] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const logIndexRef = useRef(0);

    useEffect(() => {
        const handleToggle = () => setIsOpen(prev => !prev);
        window.addEventListener('toggle-terminal', handleToggle);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === '`') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('toggle-terminal', handleToggle);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        let interval: any;
        if (isOpen) {
            setLogs([]);
            logIndexRef.current = 0;

            // Artificial delay before starting logs
            const startTimeout = setTimeout(() => {
                interval = setInterval(() => {
                    if (logIndexRef.current < SYSTEM_LOGS.length) {
                        const nextLog = SYSTEM_LOGS[logIndexRef.current];
                        setLogs(prev => [...prev, nextLog]);
                        logIndexRef.current += 1;
                    } else {
                        clearInterval(interval);
                    }
                }, 100);
            }, 300);

            return () => {
                clearTimeout(startTimeout);
                if (interval) clearInterval(interval);
            };
        }
    }, [isOpen]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-12 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="w-full max-w-2xl bg-[#0F1011] border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                                </div>
                                <div className="flex items-center gap-2 text-[10px] tracking-widest font-black uppercase text-white/40">
                                    <TerminalIcon className="w-3 h-3 text-primary" />
                                    Studio Core Console
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Console Body */}
                        <div
                            ref={scrollRef}
                            className="p-8 h-[350px] md:h-[400px] overflow-y-auto font-mono text-[13px] md:text-sm space-y-1.5 scrollbar-hide"
                        >
                            {logs.map((log, idx) => (
                                <div key={idx} className={cn(
                                    "flex items-start gap-3",
                                    log?.startsWith(">") ? "text-primary" : "text-white/60"
                                )}>
                                    {log?.startsWith(">") && <span className="text-primary font-bold">λ</span>}
                                    <span className="break-all">{log}</span>
                                </div>
                            ))}
                            <div className="w-2 h-4 md:h-5 bg-primary/40 inline-block align-middle animate-pulse" />
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-3 border-t border-white/5 bg-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
                            <div className="flex items-center gap-2 text-[10px] text-white/20 font-black uppercase tracking-widest">
                                <Command className="w-3 h-3" />
                                Ctrl + ` to toggle
                            </div>
                            <div className="text-[10px] text-white/20 font-black uppercase tracking-widest">
                                System: Connected // Node_Lagos_01
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
