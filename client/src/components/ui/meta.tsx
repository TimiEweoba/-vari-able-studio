import { useEffect } from "react";

interface MetaProps {
    title?: string;
    description?: string;
}

export function Meta({ title, description }: MetaProps) {
    useEffect(() => {
        const baseTitle = "veri—able studio";
        document.title = title ? `${title} — ${baseTitle}` : baseTitle;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description || "End-to-end digital product studio. Launch in 7–14 days.");
        }
    }, [title, description]);

    return null;
}
