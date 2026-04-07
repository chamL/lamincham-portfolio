import { Mail, Phone, Newspaper } from "lucide-react";
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { IconButton } from "./IconButton";

function SosialsButtons() {
    return (
        <div className="flex justify-center gap-4 mt-4 flex-wrap px-2">
            <IconButton
                icon={<FaGithub size={22} />}
                href="https://github.com/ChamL"
                label="GitHub"
            />

            <IconButton
                icon={<FaLinkedin size={22} />}
                href="https://www.linkedin.com/in/lamin-cham-8986a132a/"
                label="LinkedIn"
            />

            <IconButton
                icon={<Mail size={22} />}
                href="mailto:..."
                label="Email"
            />

            <IconButton
                icon={<Phone size={22} />}
                href="tel:..."
                label="Call"
            />

            <IconButton
                icon={<FaRegFileAlt size={22} />}
                href="/cv/Lamin_CV.pdf"
                download
                label="CV"
            />
        </div>
    );
}

export default SosialsButtons;
