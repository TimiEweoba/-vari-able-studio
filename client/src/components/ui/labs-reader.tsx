import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, User, Share2, Bookmark, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface LabsReaderProps {
    isOpen: boolean;
    onClose: () => void;
    article: {
        title: string;
        author: string;
        authorImage?: string;
        date: string;
        image: string;
        content?: string;
    } | null;
}

export function LabsReader({ isOpen, onClose, article }: LabsReaderProps) {
    const { toast } = useToast();
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleShare = async () => {
        if (!article) return;

        const shareData = {
            title: article.title,
            text: `Read "${article.title}" by ${article.author} on vari—able Labs.`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                toast({
                    title: "Link copied",
                    description: "Article link copied to clipboard.",
                });
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        toast({
            title: isBookmarked ? "Removed from reading list" : "Saved to reading list",
            description: isBookmarked ? "Article removed." : "Article saved for later.",
        });
    };

    if (!article) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[250]"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[600px] lg:w-[800px] bg-[#0F1011] z-[260] overflow-y-auto border-l border-white/5 shadow-2xl"
                    >
                        {/* Header Controls */}
                        <div className="sticky top-0 w-full flex justify-between items-center p-6 bg-[#0F1011]/80 backdrop-blur-xl z-10 border-b border-white/5">
                            <div className="flex gap-4">
                                <button onClick={handleShare} className="text-white/40 hover:text-white transition-colors" title="Share Article">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button onClick={handleBookmark} className={`transition-colors ${isBookmarked ? 'text-primary' : 'text-white/40 hover:text-white'}`} title="Bookmark">
                                    {isBookmarked ? <Check className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                                </button>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Article Content */}
                        <article className="p-8 md:p-16">
                            <div className="flex items-center gap-4 text-primary text-[10px] uppercase tracking-[0.3em] font-black mb-6">
                                <div className="w-8 h-px bg-primary" />
                                Case Study
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
                                {article.title}
                            </h1>

                            <div className="flex flex-wrap gap-8 items-center mb-12 py-8 border-y border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-white/10">
                                        {article.authorImage ? (
                                            <img src={article.authorImage} alt={article.author} className="w-full h-full object-cover" />
                                        ) : (
                                            <User className="w-5 h-5 text-primary" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase font-black text-white/20 tracking-widest">Author</div>
                                        <div className="text-sm font-bold text-white/80">{article.author}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase font-black text-white/20 tracking-widest">Published</div>
                                        <div className="text-sm font-bold text-white/80">{article.date}</div>
                                    </div>
                                </div>
                            </div>

                            <img
                                src={article.image}
                                className="w-full aspect-video object-cover rounded-2xl mb-12 border border-white/5"
                                alt={article.title}
                            />

                            <div className="prose prose-invert max-w-none space-y-6 text-white/60 leading-relaxed text-lg">
                                {article.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: article.content }} />
                                ) : (
                                    <>
                                        <p>
                                            Engineering rapid product launches isn't just about speed; it's about the <span className="text-white font-bold italic">architecture of predictability</span>.
                                            When we set out to build this module, we didn't start with code—we started with an interface for failure.
                                        </p>

                                        <h3 className="text-white text-2xl font-bold mt-12 mb-4">The Technical Backbone</h3>
                                        <p>
                                            Most agency builds fail because they reinvent the wheel for every client. We productized the common patterns into a proprietary template-first stack.
                                        </p>

                                        {/* Code Block Example */}
                                        <div className="my-10 p-6 bg-black rounded-xl border border-white/10 font-mono text-sm overflow-hidden relative group">
                                            <div className="absolute top-0 right-0 p-2 text-[10px] font-black text-white/10 uppercase tracking-widest group-hover:text-primary transition-colors">
                                                TypeScript
                                            </div>
                                            <div className="text-primary/40 mb-4">{"//"} Rapid Deployment Hook</div>
                                            <pre className="text-white/80 overflow-x-auto scrollbar-hide">
                                                {`export function useRapidDeploy(config) {
          const [status, setStatus] = useState('IDLE');
          
          const ship = async (payload) => {
            setStatus('SYNCING_LAYERS');
            const res = await variableCore.deploy({
              region: 'LAGOS_NODE_01',
              layers: ['AUTH', 'BILLING', 'DASHBOARD'],
              ...payload
            });
            return res.status === 200 ? 'SUCCESS' : 'FAILED';
          };

          return { ship, status };
        }`}
                                            </pre>
                                        </div>

                                        <p>
                                            By abstracting the boring parts (auth, payments, infra) into these hooks, we reduce total development time by 70%.
                                            This is how we ship real products in 14 days without sacrificing the quality of a custom build.
                                        </p>
                                    </>
                                )}
                            </div>
                        </article>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
