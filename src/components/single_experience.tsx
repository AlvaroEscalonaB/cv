import HorizontalRangeDate from "./horizontal_range_date"
import VerticalRangeDate from "./vertical_range_date"

type DateRangeTypeShow = "verticalRange" | "horizontalRange"

interface SingleExperienceProps {
  position: string
  jobPlace: string
  experiences: string[]
  dateStart: string
  dateEnd: string
  typeShow?: DateRangeTypeShow
}

export default function SingleExperience({
  position,
  jobPlace,
  experiences,
  dateStart,
  dateEnd,
  typeShow = "verticalRange",
}: SingleExperienceProps) {
  return (
    <article className="flex flex-row gap-4 py-2">
      {
        {
          verticalRange: <VerticalRangeDate dateEnd={dateEnd} dateStart={dateStart} />,
          horizontalRange: <HorizontalRangeDate dateEnd={dateEnd} dateStart={dateStart} />,
        }[typeShow]
      }
      <div className="flex flex-col">
        <div>
          <span className="mr-1.5 font-bold">{position}</span>
          {jobPlace}
        </div>
        <div>
          <ul className="list-inside list-disc">
            {experiences.map((experience, index) => (
              <li key={index}>{experience}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
