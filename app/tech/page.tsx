import type { Metadata } from "next";
import TechStack from "@/pages/tech-stack";

export const metadata: Metadata = {
    title: "What We Build | veri—able studio",
    description: "Our services include full-stack websites, mobile apps, UI/UX design, and 2D/3D animations. We architect digital platforms.",
};

export default function TechPage() {
    return <TechStack />;
}
