import type { LinkIcon } from "@/icons/icon"
import Icon from "@/icons/icon"

interface LinkToResourceProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  url: string
  title?: string
  icon?: LinkIcon
  className?: string
}

export default function LinkToResource({
  url,
  icon,
  children,
  className,
  title = "no-content",
  ...props
}: LinkToResourceProps) {
  return (
    <a
      href={url}
      target="_blank"
      className={`${className} flex flex-row items-center gap-1.5 rounded-full px-4 py-1 font-medium text-gray-500 no-underline duration-300 hover:bg-gray-100`}
      title={title}
      {...props}
    >
      {icon && <Icon icon={icon} />}
      {children}
    </a>
  )
}
