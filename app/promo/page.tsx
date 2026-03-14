import type { Metadata } from "next";
import Promo from "@/pages/promo";

export const metadata: Metadata = {
    title: "Free Preview Promo | veri—able studio",
    description: "Get a free preview of your product. If you like it, you keep it. Simple hosting and domain plans tailored for rapid iteration.",
};

export default function PromoPage() {
    return <Promo />;
}
