import SectionWrapper from "./section_wrapper"
import SingleExperience from "./single_experience"

export default function AcademicBackground() {
  return (
    <SectionWrapper label="Antecedentes Académicos">
      <SingleExperience
        position="Ingeniería Civil en Industrias"
        jobPlace=""
        dateEnd="2022"
        dateStart="2017"
        experiences={["Titulado con distinción máxima en Pontificia Universidad Católica de Chile"]}
        typeShow="horizontalRange"
      />
    </SectionWrapper>
  )
}
