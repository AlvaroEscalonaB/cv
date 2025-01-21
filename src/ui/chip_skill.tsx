export interface ChipSkillProps {
  className: string
  label: string
}

export default function ChipSkill({ label, className = "" }: ChipSkillProps) {
  return <div className={`${className} text-sm font-semibold px-3 py-0.5 rounded-2xl`}>{label}</div>
}
