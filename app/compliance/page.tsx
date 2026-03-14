import type { Metadata } from "next";
import Compliance from "@/pages/compliance";

export const metadata: Metadata = {
    title: "Compliance | veri—able studio",
};

export default function CompliancePage() {
    return <Compliance />;
}
