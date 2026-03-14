import type { Metadata } from "next";
import Success from "@/pages/success";

export const metadata: Metadata = {
    title: "Payment Successful | veri—able studio",
};

import { Suspense } from "react";

export default function SuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Success />
        </Suspense>
    );
}
