import Icon from "@/icons/icon"

interface HorizontalRangeDateProps {
  dateStart: string
  dateEnd: string
}

export default function HorizontalRangeDate({ dateStart, dateEnd }: HorizontalRangeDateProps) {
  return (
    <div className="left-min-space flex flex-row justify-end items-center gap-1.5 text-sky-800">
      <div className="text-sm font-semibold">{dateStart}</div>
      <div>
        <Icon icon="rightArrow" />
      </div>
      <div className="text-sm font-semibold">{dateEnd}</div>
    </div>
  )
}
