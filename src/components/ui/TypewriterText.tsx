import { TypeAnimation } from "react-type-animation";

interface TypewriterTextProps {
    className?: string;
}

export default function TypewriterText({
    className = "",
}: TypewriterTextProps) {
    return (
        <TypeAnimation
            sequence={[
                "Senior Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Angular Developer",
                2000,
                "Flutter Developer",
                2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className={className}
        />
    );
}