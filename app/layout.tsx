import type { Metadata } from 'next';
import "@/index.css";
import { Providers } from './providers';

export const metadata: Metadata = {
    metadataBase: new URL('https://veriable.xyz'),
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
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
