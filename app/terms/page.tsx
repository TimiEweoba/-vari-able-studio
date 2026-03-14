import type { Metadata } from "next";
import Terms from "@/pages/terms";

export const metadata: Metadata = {
    title: "Terms of Service | veri—able studio",
};

export default function TermsPage() {
    return <Terms />;
}
