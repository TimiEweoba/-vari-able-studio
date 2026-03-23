import type { Metadata } from "next";
import Home from "@/pages/home";

export const metadata: Metadata = {
    title: "veri—able studio | Launch Fast",
    description: "An end-to-end digital product studio. We build beautiful, fast websites and applications in record time — now with autonomous AI agents. Complete with payments, hosting, and 30 days of hands-on support.",
    openGraph: {
        title: "veri—able studio",
        description: "An end-to-end digital product studio — now with autonomous AI agents.",
        url: "https://veriable.xyz",
        siteName: "veri—able studio",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "veri—able studio",
        description: "An end-to-end digital product studio — now with autonomous AI agents.",
        images: ["/images/og-image.png"],
    },
};

export default function Page() {
    return <Home />;
}
