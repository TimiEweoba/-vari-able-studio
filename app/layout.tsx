import type { Metadata } from 'next';
import "@/index.css"; // Ensure this path is correct relative to aliases or move css

export const metadata: Metadata = {
    title: 'veri—able studio',
    description: 'Design & Development Studio',
    icons: {
        icon: '/images/logo.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
