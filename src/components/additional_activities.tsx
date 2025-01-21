import SectionWrapper from "./section_wrapper"

export default function AdditionalActivities() {
  return (
    <SectionWrapper label="Actividades Extracurriculares">
      <article className="flex flex-row">
        <div className="left-min-space">
          <div></div>
        </div>
        <div className="pl-4 flex-1">
          <ul className="list-inside">
            <li>Lectura de blogs de programación, principalmente en Medium</li>
            <li>Aprendiendo Procreate para ilustraciones</li>
            <li>Ejercicio y deportes: Calistenia y tenis de mesa</li>
          </ul>
        </div>
      </article>
    </SectionWrapper>
  )
}
