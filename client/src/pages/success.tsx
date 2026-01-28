import { useEffect } from "react";
import { useLocation } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Success() {
    const [location, setLocation] = useLocation();
    const searchParams = new URLSearchParams(window.location.search);
    const checkoutId = searchParams.get("reference") || searchParams.get("trxref") || searchParams.get("checkout_id");

    useEffect(() => {
        // Pro-tip: You could verify the status here via an API call
        console.log("Payment successful for checkout:", checkoutId);
    }, [checkoutId]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="w-full max-w-md border-primary/20 bg-card/50 backdrop-blur-xl">
                    <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                            <div className="rounded-full bg-primary/10 p-3">
                                <CheckCircle2 className="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <CardTitle className="text-3xl font-bold tracking-tight">Success Confirmed</CardTitle>
                        <CardDescription className="text-lg mt-2 font-medium text-foreground/80">
                            Thank you for partnering with veri—able studio.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-sm text-center text-muted-foreground">
                                Your payment was successful. We've sent a detailed receipt to your email address along with the next steps for your project.
                            </p>
                        </div>
                        <div className="rounded-xl bg-primary/5 p-4 border border-primary/10">
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Transaction ID</p>
                            <p className="font-mono text-sm break-all font-medium">{checkoutId || "Processing..."}</p>
                        </div>
                        <Button
                            className="w-full group"
                            size="lg"
                            onClick={() => setLocation("/")}
                        >
                            Return Home
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
