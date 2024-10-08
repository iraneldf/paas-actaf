import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/Components/layouts/NavBar";
import Footer from "@/app/Components/layouts/Footer";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Paas Actaf",
    description: "Proyecto de agricultura",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
        <body className={inter.className}>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
