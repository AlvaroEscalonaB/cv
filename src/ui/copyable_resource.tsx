import Icon from "@/icons/icon"
import type { LinkIcon } from "@/icons/icon"
import { useRef, type ReactNode } from "react"

interface CopyableResourceProps {
  children: ReactNode
  copyableContent: string
  title?: string
  icon?: LinkIcon
  className?: string
}

const TOTAL_SECONDS_TO_SHOW = 2500

export default function CopyableResource({
  icon,
  copyableContent,
  children,
  className,
  title = "no-content",
}: CopyableResourceProps) {
  const copiedPopoverRef = useRef<HTMLDivElement>(null)
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(copyableContent)

    if (copiedPopoverRef.current) {
      const element = copiedPopoverRef.current
      element.classList.remove("opacity-0")

      setTimeout(() => {
        element.classList.add("opacity-0")
      }, TOTAL_SECONDS_TO_SHOW)
    }
  }
  return (
    <button
      onClick={handleCopyToClipboard}
      className={`${className} relative flex flex-row items-center gap-1.5 rounded-full px-4 py-1 font-medium text-gray-500 no-underline duration-300 hover:bg-gray-100`}
      title={title}
    >
      {icon && <div>{<Icon icon="phone" />}</div>}
      {children}
      <div
        className="absolute opacity-0 top-0 left-full transform translate-x-1 bg-sky-100 px-3 py-1 rounded-full transition-opacity duration-200"
        ref={copiedPopoverRef}
      >
        Copiado!
      </div>
    </button>
  )
}
