import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Gift, ArrowRight, Loader2, Calendar, Globe, Zap } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Meta } from "@/components/ui/meta";
import { CheckoutDialog } from "@/components/sections/checkout-dialog";

export default function PromoPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number; currency: "USD" | "NGN" } | null>(null);
    const [currency, setCurrency] = useState<"USD" | "NGN">("USD");
    const { toast } = useToast();

    const PROMO_PRICES = {
        monthly: { usd: 10, ngn: 15000 },
        annual: { usd: 100, ngn: 150000 },
    };

    const formatPrice = (plan: "monthly" | "annual") => {
        const prices = PROMO_PRICES[plan];
        if (currency === "USD") {
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
            }).format(prices.usd);
        } else {
            return new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
                maximumFractionDigits: 0,
            }).format(prices.ngn);
        }
    };

    const requestMutation = useMutation({
        mutationFn: async (data: { name: string; email: string; message: string; company: string }) => {
            const res = await apiRequest("POST", "/api/contact", data);
            return res.json();
        },
        onSuccess: () => {
            toast({
                title: "Request Received!",
                description: "We've received your free preview request. Expect an email from us shortly.",
            });
            setName("");
            setEmail("");
            setProjectDesc("");
        },
        onError: (error: Error) => {
            toast({
                title: "Error",
                description: error.message || "Failed to send request.",
                variant: "destructive",
            });
        },
    });

    const handleRequestSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        requestMutation.mutate({
            name,
            email,
            message: `Free Preview Request: ${projectDesc}`,
            company: "Promo Page"
        });
    };

    const handleSubscribe = (plan: "monthly" | "annual") => {
        const price = currency === "USD" ? PROMO_PRICES[plan].usd : PROMO_PRICES[plan].ngn;
        setSelectedPlan({
            name: `${plan.charAt(0).toUpperCase() + plan.slice(1)} Hosting & Domain`,
            price,
            currency,
        });
        setIsCheckoutOpen(true);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0B] text-[#E3DBD8] font-sans relative selection:bg-primary/30">
            <Meta
                title="Free Preview Promo"
                description="Get a free preview of your product. If you like it, you keep it. Simple hosting and domain plans."
            />
            <ParticleBackground />
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Hero Section */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8"
                        >
                            <Gift size={16} />
                            <span className="text-xs font-black uppercase tracking-widest">Limited Time Offer</span>
                        </motion.div>

                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none mb-8"
                        >
                            Free <span className="text-primary italic">Preview</span> Promo 🎁
                        </motion.h1>

                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl mx-auto"
                        >
                            We build it for you first. If you love the result, we'll discuss the perfect home for your new product.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                        {/* Information & Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="space-y-12"
                        >
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-white tracking-tight">How it works</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                                            <Calendar size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">1. Request a Preview</h3>
                                            <p className="text-white/40 leading-relaxed">Tell us about your project idea. We'll review it and get in touch to clarify details.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                                            <Zap size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">2. We Build It</h3>
                                            <p className="text-white/40 leading-relaxed">Our team engineers a high-fidelity preview of your product in record time.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                                            <Globe size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">3. Go Live</h3>
                                            <p className="text-white/40 leading-relaxed">If you're happy with the result, choose a hosting plan and we'll deploy your product to its custom domain.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Card className="bg-white/[0.02] border-white/10 rounded-[2rem] overflow-hidden">
                                <CardContent className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-6">Request Your Free Preview</h3>
                                    <form onSubmit={handleRequestSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="text-white/60">Full Name</Label>
                                            <Input
                                                className="bg-white/5 border-white/10 text-white rounded-xl h-12"
                                                placeholder="John Doe"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-white/60">Email Address</Label>
                                            <Input
                                                className="bg-white/5 border-white/10 text-white rounded-xl h-12"
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-white/60">Your Project Brief</Label>
                                            <textarea
                                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-primary transition-colors text-sm min-h-[120px]"
                                                placeholder="Tell us about the product you want to build..."
                                                required
                                                value={projectDesc}
                                                onChange={(e) => setProjectDesc(e.target.value)}
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full h-14 text-base font-bold rounded-xl"
                                            disabled={requestMutation.isPending}
                                        >
                                            {requestMutation.isPending ? (
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            ) : (
                                                "Submit Request"
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Pricing Plans */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4 mb-12">
                                <h2 className="text-3xl font-bold text-white tracking-tight">Post-Preview Plans</h2>
                                <p className="text-white/40">Once your product is ready, choose a plan to keep it live and secure.</p>

                                {/* Currency Toggle */}
                                <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-full border border-white/10 w-fit">
                                    <button
                                        onClick={() => setCurrency("USD")}
                                        className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${currency === "USD" ? "bg-primary text-white" : "text-white/40 hover:text-white"
                                            }`}
                                    >
                                        USD
                                    </button>
                                    <button
                                        onClick={() => setCurrency("NGN")}
                                        className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${currency === "NGN" ? "bg-primary text-white" : "text-white/40 hover:text-white"
                                            }`}
                                    >
                                        NGN
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {/* Monthly Plan */}
                                <Card className="bg-[#141415] border-white/5 hover:border-primary/50 transition-all rounded-[2rem] overflow-hidden group">
                                    <CardContent className="p-10">
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">Monthly Hosting</h4>
                                                <p className="text-white/40 text-sm">Flexible, cancel anytime.</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-3xl font-bold text-primary">{formatPrice("monthly")}</div>
                                                <div className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-1">Per Month</div>
                                            </div>
                                        </div>

                                        <ul className="space-y-4 mb-10">
                                            <li className="flex gap-3 items-center text-sm text-white/60">
                                                <Check size={18} className="text-primary" />
                                                <span>Custom Domain (.com, .xyz, etc)</span>
                                            </li>
                                            <li className="flex gap-3 items-center text-sm text-white/60">
                                                <Check size={18} className="text-primary" />
                                                <span>Managed Cloud Hosting</span>
                                            </li>
                                            <li className="flex gap-3 items-center text-sm text-white/60">
                                                <Check size={18} className="text-primary" />
                                                <span>SSL Certificate & Security</span>
                                            </li>
                                            <li className="flex gap-3 items-center text-sm text-white/60">
                                                <Check size={18} className="text-primary" />
                                                <span>Email Support</span>
                                            </li>
                                        </ul>

                                        <Button
                                            onClick={() => handleSubscribe("monthly")}
                                            className="w-full h-14 rounded-xl bg-white/[0.03] hover:bg-primary border border-white/10 hover:border-primary text-white font-bold transition-all group/btn"
                                        >
                                            Subscribe Monthly
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Annual Plan */}
                                <Card className="bg-[#141415] border-white/5 border-primary/20 shadow-xl shadow-primary/5 hover:border-primary transition-all rounded-[2rem] overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl tracking-widest uppercase">Best Value</div>
                                    <CardContent className="p-10">
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">Annual Hosting</h4>
                                                <p className="text-white/40 text-sm">Save {currency === "USD" ? "$20" : "₦30,000"} annually.</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-3xl font-bold text-primary">{formatPrice("annual")}</div>
                                                <div className="text-[10px] text-white/20 uppercase tracking-widest font-black mt-1">Per Year</div>
                                            </div>
                                        </div>

                                        <ul className="space-y-4 mb-10 text-sm">
                                            <li className="flex gap-3 items-center text-white/80">
                                                <Check size={18} className="text-primary" />
                                                <span>Everything in Monthly plan</span>
                                            </li>
                                            <li className="flex gap-3 items-center text-white/80">
                                                <Check size={18} className="text-primary" />
                                                <span>2 Months Free</span>
                                            </li>
                                            <li className="flex gap-3 items-center text-white/80">
                                                <Check size={18} className="text-primary" />
                                                <span>Priority 24/7 Support</span>
                                            </li>
                                            <li className="flex gap-3 items-center text-white/80">
                                                <Check size={18} className="text-primary" />
                                                <span>Quarterly Technical Audit</span>
                                            </li>
                                        </ul>

                                        <Button
                                            onClick={() => handleSubscribe("annual")}
                                            className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all group/btn"
                                        >
                                            Subscribe Annually
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />

            {selectedPlan && (
                <CheckoutDialog
                    isOpen={isCheckoutOpen}
                    onClose={() => setIsCheckoutOpen(false)}
                    price={selectedPlan.price}
                    currency={selectedPlan.currency}
                    packageName={selectedPlan.name}
                />
            )}
        </div>
    );
}
