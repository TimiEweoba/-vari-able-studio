import { ClientWrapper } from "../components/client-wrapper";

export function generateStaticParams() {
    return [{ slug: [] }];
}

export default function Page() {
    return <ClientWrapper />;
}
