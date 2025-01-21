interface VerticalRangeDateProps {
  dateStart: string
  dateEnd: string
}

export default function VerticalRangeDate({ dateStart, dateEnd }: VerticalRangeDateProps) {
  return (
    <>
      <div className="flex flex-col left-min-space items-end gap-1.5 text-sky-800">
        <div className="text-sm font-semibold">{dateEnd}</div>
        <div className="relative flex-1 pr-7 text-center">
          <div className="h-full w-0.5 -translate-x-1/2 transform bg-sky-800" />
          <div className="absolute top-0 size-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-sky-800" />
          <div className="absolute bottom-0 size-2 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-sky-800" />
        </div>
        <div className="text-sm font-semibold">{dateStart}</div>
      </div>
    </>
  )
}
