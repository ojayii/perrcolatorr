import React, { useRef, useState, useEffect } from "react";
import Short from "./Short";
import shortsData from "../data/shortsData"
import { motion, animate } from "framer-motion";
import BackButton from "./BackButton";
import PageWrapper from "./PageWrapper";
import { useTheme } from "@mui/material";

const ShortsPlayer = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isScrolling = useRef(false);
    const theme = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (isScrolling.current) return;

            const container = containerRef.current;
            if (!container) return;

            const scrollPosition = container.scrollTop;
            const videoHeight = window.innerHeight;
            const currentVideoOffset = currentIndex * videoHeight;

            if (scrollPosition > currentVideoOffset + videoHeight * 0.6) {
                goToNextVideo();
            } else if (scrollPosition < currentVideoOffset - videoHeight * 0.6) {
                goToPrevVideo();
            }
        };

        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [currentIndex, shortsData.length]);

    const goToNextVideo = () => {
        if (currentIndex < shortsData.length - 1) {
            isScrolling.current = true;
            setCurrentIndex((prev) => prev + 1);
            smoothScrollTo(currentIndex + 1);
        }
    };

    const goToPrevVideo = () => {
        if (currentIndex > 0) {
            isScrolling.current = true;
            setCurrentIndex((prev) => prev - 1);
            smoothScrollTo(currentIndex - 1);
        }
    };

    const smoothScrollTo = (index) => {
        animate(containerRef.current, { scrollTop: index * window.innerHeight }, { duration: 0.8, ease: "easeInOut" });
        setTimeout(() => (isScrolling.current = false), 800);
    };

    return (
        <PageWrapper>
            <div
                ref={containerRef}
                style={{
                    height: "100vh",
                    overflowY: "auto",
                    scrollSnapType: "y mandatory",
                    scrollbarWidth: "none",
                    overscrollBehavior: "contain",
                    backgroundColor: theme.palette.background.default,
                }}
            >
                {shortsData.map((short, index) => (
                    <motion.div
                        key={short.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0.5, scale: index === currentIndex ? 1 : 0.9 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            scrollSnapAlign: "start",
                        }}
                    >
                        <Short src={short.src} />
                    </motion.div>
                ))}
            </div>
        </PageWrapper>
    );
};

export default ShortsPlayer;
