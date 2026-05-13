import Image from "next/image";
import logo from "../../assets/logo.png";

interface LogoProps {
    size?: "sm" | "md" | "lg";
}

const widths = {
    sm: 180,
    md: 220,
    lg: 320,
};

export function Logo({ size = "sm" }: LogoProps) {
    const w = widths[size];
    return (
        <Image
            src={logo}
            alt="NEXOTIC"
            width={w}
            height={0}
            priority
            style={{ width: w, height: "auto" }}
        />
    );
}
