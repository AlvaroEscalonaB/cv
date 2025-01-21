import SectionWrapper from "./section_wrapper"
import SingleExperience from "./single_experience"

export default function LaboralExperience() {
  return (
    <SectionWrapper label="Antecedentes Académicos">
      <SingleExperience
        position="Ingeniería Civil en Industrias,"
        jobPlace="Pontificia Universidad Católica de Chile"
        dateEnd="2017"
        dateStart="2022"
        experiences={[]}
        typeShow="horizontalRange"
      />
    </SectionWrapper>
  )
}
