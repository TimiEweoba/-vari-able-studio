
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Loader2, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function PaymentCallback() {
    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const [status, setStatus] = useState<"loading" | "success" | "failed" | "cancelled">("loading");
    const [message, setMessage] = useState("Verifying payment...");

    // Check if we are currently in the process of redirecting to a payment gateway.
    // This prevents a "glimpse" of the cancellation UI during history manipulation.
    const [isRedirecting, setIsRedirecting] = useState(() => {
        const ts = sessionStorage.getItem("payment_redirect_ts");
        if (!ts) return false;
        // If the redirect was initiated less than 5 seconds ago, block the UI
        return Date.now() - parseInt(ts) < 5000;
    });

    useEffect(() => {
        if (isRedirecting) {
            const timer = setTimeout(() => setIsRedirecting(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [isRedirecting]);

    useEffect(() => {
        // If we are still in the redirect grace period, do nothing.
        if (isRedirecting) return;

        const searchParams = new URLSearchParams(window.location.search);
        const tx_ref = searchParams.get("tx_ref");
        const transaction_id = searchParams.get("transaction_id");
        const statusParam = searchParams.get("status");

        console.log("Payment Callback Params:", { tx_ref, transaction_id, status: statusParam });

        if (statusParam === "cancelled") {
            setStatus("cancelled");
            setMessage("Payment was cancelled by the user.");
            return;
        }

        if (statusParam === "successful" || statusParam === "completed") {
            verifyPayment(tx_ref, transaction_id);
        } else {
            // Sometimes status might not be explicitly passed, but we have a ref
            if (tx_ref) {
                verifyPayment(tx_ref, transaction_id);
            } else {
                setStatus("failed");
                setMessage("Invalid payment response. No reference found.");
            }
        }
    }, []);

    useEffect(() => {
        if (status === "cancelled") {
            const timer = setTimeout(() => {
                window.location.href = "/#pricing";
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const verifyPayment = async (tx_ref: string | null, transaction_id: string | null) => {
        if (!tx_ref) {
            setStatus("failed");
            setMessage("Missing transaction reference.");
            return;
        }

        try {
            // Call your backend verification endpoint
            // In Next.js, API routes are served from the same origin
            const response = await fetch(`/api/payments/verify/${tx_ref}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();

            if (response.ok && data.status === 'success') {
                setStatus("success");
                toast({
                    title: "Payment Successful",
                    description: "Your transaction has been verified.",
                });
                // Redirect to success page or show success state
                setTimeout(() => {
                    setLocation(`/success?reference=${tx_ref}`); // Pass ref for success page
                }, 1000);
            } else {
                setStatus("failed");
                setMessage(data.message || "Payment verification failed.");
                toast({
                    variant: "destructive",
                    title: "Verification Failed",
                    description: data.message || "Could not verify payment.",
                });
            }
        } catch (error) {
            console.error("Verification error:", error);
            setStatus("failed");
            setMessage("Network error occurred during verification.");
        }
    };

    if (status === "loading" || isRedirecting) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                    <p className="text-lg text-muted-foreground">Verifying your payment...</p>
                </div>
            </div>
        );
    }

    if (status === "success") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                    <p className="text-lg text-green-500 font-medium">Payment Verified! Redirecting...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md border-destructive/20 bg-card/50 backdrop-blur-xl">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full bg-destructive/10 p-3">
                            {status === "cancelled" ? (
                                <AlertCircle className="w-12 h-12 text-orange-500" />
                            ) : (
                                <XCircle className="w-12 h-12 text-destructive" />
                            )}
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">
                        {status === "cancelled" ? "Payment Cancelled" : "Payment Failed"}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                        {message}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => window.location.href = "/"}
                    >
                        Return Home
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
