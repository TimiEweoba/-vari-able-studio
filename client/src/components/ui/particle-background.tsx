import { useEffect, useRef } from "react";

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Mouse state
        const mouse = {
            x: -1000,
            y: -1000,
            isActive: false
        };

        // Configuration
        const particleCount = 200; // Increased count for better effect
        const connectionDistance = 100;
        const mouseDistance = 200;

        interface Particle {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            size: number;
            density: number;
            color: string;
            angle: number;
            speed: number;
        }

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            particles = [];
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                particles.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size: Math.random() * 2 + 0.5,
                    density: (Math.random() * 20) + 1,
                    color: "rgba(255, 255, 255, 0.4)",
                    angle: Math.random() * 360,
                    speed: Math.random() * 0.5 + 0.2
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];

                // Interaction with mouse
                // "Uniquely beautiful unified fashion" - smooth swarming
                if (mouse.isActive) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseDistance) {
                        // Calculate force direction
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;

                        // Force strength - closer = stronger
                        const force = (mouseDistance - distance) / mouseDistance;

                        // Soft drift towards mouse
                        const directionX = forceDirectionX * force * p.density;
                        const directionY = forceDirectionY * force * p.density;

                        p.x += directionX;
                        p.y += directionY;
                    }
                }

                // Natural organic movement (floating)
                p.x += Math.sin(p.angle) * 0.2;
                p.y += Math.cos(p.angle) * 0.2;
                // p.angle += 0.02; // Spiral slightly? No, keeping it subtle

                // Return to base position or drift continuously?
                // Let's make them flow nicely. 
                // If they go off screen, wrapping around looks glitchy with mouse interaction.
                // Instead, let's have them be "base" positioned relative to a flowing grid 
                // OR just free float with boundary bounce.

                // Let's go with "Free Float with Mouse Attraction" + "Wave flow"
                // Move generally right
                p.x += p.speed;

                // Wrap around screen
                if (p.x > width) {
                    p.x = 0;
                    // When wrapping, reset to random Y to avoid horizontal banding
                    p.y = Math.random() * height;
                }
                if (p.x < 0) p.x = width;
                if (p.y > height) p.y = 0;
                if (p.y < 0) p.y = height;

                // Draw particle
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Optional: Connect particles close to mouse for that "network" feel 
                // matching the "constellation" vibe of Framer sites
                if (mouse.isActive) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.strokeStyle = `rgba(250, 110, 67, ${1 - dist / 120})`; // Primary color highlight
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        // Event Listeners
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.isActive = true;
        };

        const handleTouchMove = (e: TouchEvent) => {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
            mouse.isActive = true;
        };

        const handleLeave = () => {
            mouse.isActive = false;
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("mouseout", handleLeave);
        window.addEventListener("touchend", handleLeave);
        window.addEventListener("resize", init);

        init();
        draw();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("mouseout", handleLeave);
            window.removeEventListener("touchend", handleLeave);
            window.removeEventListener("resize", init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.8 }} // Increased opacity slightly
        />
    );
}
