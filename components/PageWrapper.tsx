"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            easing: "ease-out-cubic",
            offset: 60,
        });
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
            <Footer />
        </>
    );
}
