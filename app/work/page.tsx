import type { Metadata } from "next";
import CaseStudies from "@/pages/case-studies";

export const metadata: Metadata = {
    title: "Our Work | veri—able studio",
    description: "Explore our portfolio of high-performance websites, mobile applications, and digital products.",
};

export default function WorkPage() {
    return <CaseStudies />;
}
