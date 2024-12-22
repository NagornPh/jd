"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../styles/footer_styles.css";

export default function Footer() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return document.body.getAttribute("data-theme") || "light";
        }
        return "light"; 
    });

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <footer className="Footer">
            <center className="text-footer">
                <Link href="/">© 2024 Junior Dev. All rights reserved.</Link>
            </center>
        </footer>
    );
}
