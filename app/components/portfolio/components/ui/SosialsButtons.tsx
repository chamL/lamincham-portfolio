import { Mail, Phone, Newspaper } from "lucide-react";
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import { IconButton } from "./IconButton";

function SosialsButtons() {
    return (
        <div className="flex justify-center pointer-events-auto gap-4 mt-2">

            <IconButton
                icon={<FaGithub size={20} />}
                href="https://github.com/ChamL"
                color="hover:text-white"
                label="GitHub"
            />

            <IconButton
                icon={<FaLinkedin size={20} />}
                href="https://www.linkedin.com/in/lamin-cham-8986a132a/"
                color="hover:text-blue-400"
                label="LinkedIn"
            />

            <IconButton
                icon={<Mail size={20} />}
                href="mailto:..."
                color="hover:text-yellow-400"
                label="Email"
            />

            <IconButton
                icon={<Phone size={20} />}
                href="tel:..."
                color="hover:text-green-400"
                label="+47 45 485 535"
            />

            <IconButton
                icon={<FaRegFileAlt size={20} />}
                href="/cv.pdf"
                color="hover:text-purple-400"
                download
                label="Download CV"
            />

        </div>
    );
}

export default SosialsButtons;