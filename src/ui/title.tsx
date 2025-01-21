interface TitleProps {
  title: string
  variant: "h1" | "h2" | "h3" | "h4" | "h5"
  className?: string
}

const variantMapper = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
} as const

export default function Title({ title, className, variant = "h1" }: TitleProps) {
  return {
    h1: <h1 className={`font-bold ${className} ${variantMapper[variant]}`}>{title}</h1>,
    h2: <h2 className={`font-bold ${className} ${variantMapper[variant]}`}>{title}</h2>,
    h3: <h3 className={`font-bold ${className} ${variantMapper[variant]}`}>{title}</h3>,
    h4: <h4 className={`font-bold ${className} ${variantMapper[variant]}`}>{title}</h4>,
    h5: <h5 className={`font-bold ${className} ${variantMapper[variant]}`}>{title}</h5>,
  }[variant]
}
