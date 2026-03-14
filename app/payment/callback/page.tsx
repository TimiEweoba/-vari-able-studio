import type { Metadata } from "next";
import PaymentCallback from "@/pages/payment-callback";

export const metadata: Metadata = {
    title: "Processing Payment | veri—able studio",
};

export default function CallbackPage() {
    return <PaymentCallback />;
}
