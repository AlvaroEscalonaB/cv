import SectionWrapper from "./section_wrapper"
import SingleExperience from "./single_experience"

export default function LaboralExperience() {
  return (
    <SectionWrapper label="Antecedentes laborales">
      <SingleExperience
        position="Software Developer"
        jobPlace="Externo para Minera Los Pelambres"
        dateStart="Nov 2024"
        dateEnd="Actualidad"
        experiences={[
          "Desarrollo de aplicaciones de reportería con librerías de Plotly-Dash como frontend y backend en FastAPI",
          "Uso de servicios de Azure como CosmosDB, AppServices y DevOps",
          "Manejo de Azure-Databricks para análisis y extracción de datos",
          <span>
            Aplicaciones de <span className="italic">process mining</span> en proceso de Carguío y Transporte de equipos
            CAEX
          </span>,
        ]}
      />
      <SingleExperience
        position="Software Developer"
        jobPlace="en SSIndex"
        dateStart="Jun 2023"
        dateEnd="Feb 2024"
        experiences={[
          "Migración de monolito de rails a aplicación desacoplada de Rails 7 API con react-typescript con deploy con infraestructura como código",
          "Prueba de concepto de AWS Lambdas en Rust con infraestructura como código con Pulumi",
          "Rediseño de la plataforma migrada en Figma",
        ]}
      />
      <SingleExperience
        position="Desarrollador de Software"
        jobPlace="en Nnodes Ltda"
        dateStart="Oct 2022"
        dateEnd="Jun 2023"
        experiences={[
          "Desarrollo de aplicación full responsive en ruby on rails 7",
          "Internacionalización y remodelación de landing page de Nnodes",
          "Modificaciones a aplicaciones de React",
        ]}
      />
    </SectionWrapper>
  )
}
