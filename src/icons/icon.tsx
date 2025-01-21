import RightArrow from "./right_arrow"
import Envelope from "@/icons/envelope"
import Github from "@/icons/github"
import Linkedin from "@/icons/linkedin"
import Phone from "@/icons/phone"

export type LinkIcon = "envelope" | "linkedin" | "phone" | "rightArrow" | "github"

interface IconProps {
  icon: LinkIcon
  className?: string
}

export default function Icon({ icon, className = "" }: IconProps) {
  return {
    envelope: <Envelope />,
    linkedin: <Linkedin />,
    phone: <Phone />,
    rightArrow: <RightArrow />,
    github: <Github />,
  }[icon]
}
