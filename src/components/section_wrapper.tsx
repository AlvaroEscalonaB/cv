import Title from "@ui/title"
import { type ReactNode } from "react"

interface SectionWrapperProps {
  label: string
  children?: ReactNode
}

export default function SectionWrapper({ label, children }: SectionWrapperProps) {
  return (
    <article className="mt-6 flex flex-col">
      <div className="flex w-full flex-row items-center gap-4 py-2">
        <div className="left-min-space h-2 bg-sky-800"></div>
        <div>
          <Title variant="h3" title={label} />
        </div>
      </div>
      {children}
    </article>
  )
}
