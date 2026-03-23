"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ArrowRight } from "lucide-react";

interface CheckoutDialogProps {
    isOpen: boolean;
    onClose: () => void;
    price: number;
    currency: "USD" | "NGN";
    packageName: string;
}

export function CheckoutDialog({ isOpen, onClose, price, currency, packageName }: CheckoutDialogProps) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast({
                title: "Error",
                description: "Please enter your email to continue.",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);
        try {
            // Free reservation — submit as a contact/reservation request
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    name,
                    message: `[FREE RESERVATION] Package: ${packageName}. Project brief: ${description || 'Not provided'}`,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to submit reservation");
            }

            toast({
                title: "Slot Reserved! 🎉",
                description: "Your free reservation is confirmed. We'll reach out within 24 hours to kick things off.",
            });
            onClose();
        } catch (error: any) {
            toast({
                title: "Reservation Error",
                description: error.message || "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[95vw] sm:max-w-[480px] bg-[#0A0A0B] border-white/10 text-white rounded-[2rem] p-0 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] focus:outline-none flex flex-col max-h-[90vh]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />

                <div className="p-6 md:p-10 overflow-y-auto scrollbar-hide flex-1">
                    <DialogHeader className="mb-8 items-center text-center">
                        <div className="w-16 h-1 bg-primary/40 rounded-full mb-8" />
                        <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tighter mb-4 uppercase">Secure Your Slot</DialogTitle>
                        <DialogDescription className="text-white/50 text-sm md:text-base leading-relaxed max-w-[320px]">
                            Reserve the <span className="text-primary font-bold italic">{packageName}</span> package for free — no deposit required.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleCheckout} className="space-y-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:ring-0 text-white rounded-2xl px-6 transition-all placeholder:text-white/10"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-14 bg-white/[0.03] border-white/5 focus:border-primary/40 focus:ring-0 text-white rounded-2xl px-6 transition-all placeholder:text-white/10"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Project Brief</Label>
                                <textarea
                                    id="description"
                                    placeholder="What's on your mind? Briefly describe your vision..."
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl p-6 focus:border-primary/40 text-white outline-none text-sm transition-all resize-none placeholder:text-white/10"
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative inline-flex items-center gap-8 glass-panel rounded-full px-8 py-5 transition-all overflow-hidden w-full justify-center shadow-2xl interactive cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <span className="text-white font-black text-sm md:text-base tracking-tight relative z-10 uppercase flex items-center gap-2">
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Reserving...
                                        </>
                                    ) : (
                                        <>
                                            RESERVE SLOT
                                        </>
                                    )}
                                </span>
                                {!isLoading && (
                                    <div className="w-10 h-10 shrink-0 bg-primary rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-500 relative z-10 shadow-xl shadow-primary/40">
                                        <ArrowRight className="w-5 h-5 leading-none" />
                                    </div>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-[9px] font-bold text-green-500/80 uppercase tracking-widest">Free Reservation</p>
                        </div>
                        <p className="text-[10px] text-white/20 font-medium font-mono uppercase tracking-widest">No payment required</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}



