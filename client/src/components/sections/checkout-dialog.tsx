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
            const response = await fetch("/api/payments/initialize", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    name,
                    amount: price, // Use dynamic price from props
                    currency: currency,
                    packageName,
                    description, // Include project description
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to initialize payment");
            }

            // Redirect to Flutterwave checkout
            // The V4 API returns a link in the data.link property or data.data.link
            const checkoutUrl = data.link || (data.data && data.data.link);
            if (checkoutUrl) {
                // Set a timestamp to prevent the cancellation UI from showing during this redirect window
                sessionStorage.setItem("payment_redirect_ts", Date.now().toString());

                // Push the cancellation URL to history so the 'Back' button works
                window.history.pushState(null, "", "/payment/callback?status=cancelled");
                window.location.href = checkoutUrl;
            } else {
                throw new Error("Checkout URL not found in response");
            }
        } catch (error: any) {
            toast({
                title: "Payment Error",
                description: error.message || "Something went wrong. Please try again.",
                variant: "destructive",
            });
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-[#0A0A0B] border-white/10 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Reserve your Slot</DialogTitle>
                    <DialogDescription className="text-white/60">
                        You're {packageName.toLowerCase().includes("hosting") ? "subscribing to" : "reserving"} the <span className="text-primary font-semibold">{packageName}</span> package.
                        Payment of <span className="text-white font-bold">{currency} {price.toLocaleString()}</span> is required to continue.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCheckout} className="space-y-6 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-white/5 border-white/10 focus:border-primary text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/5 border-white/10 focus:border-primary text-white"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-sm font-medium text-white/80">What would you like to build?</Label>
                        <textarea
                            id="description"
                            placeholder="Briefly describe your project idea..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 rounded-md p-2 focus:border-primary text-white outline-none text-sm transition-colors resize-none"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full h-12 text-base font-bold"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                Continue to Payment
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </form>
                <DialogFooter className="flex flex-col items-center gap-2">
                    <p className="text-[10px] text-white/40 text-center">
                        Secure checkout powered by Flutterwave.
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
