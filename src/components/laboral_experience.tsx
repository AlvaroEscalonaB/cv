import SectionWrapper from "./section_wrapper"
import SingleExperience from "./single_experience"

export default function LaboralExperience() {
  return (
    <SectionWrapper label="Antecedentes laborales">
      <SingleExperience
        position="Software Developer"
        jobPlace="Externo de Global Conexus para Minera Los Pelambres"
        dateStart="Nov 2024"
        dateEnd="Actualidad"
        experiences={[
          "Desarrollo de backend en FastAPI para cálculos de KPIs sobre datos ingestados en SQL Server",
          "Desarrollo de aplicación de reportería con librerías de Plotly-Dash",
          "Manejo de Azure-Databricks para análisis y extracción de datos",
          "Uso de servicios de Azure como CosmosDB, AppServices y DevOps",
        ]}
      />
      <SingleExperience
        position="Memorista"
        jobPlace="en Minera Los Pelambres"
        dateStart="Mar 2024"
        dateEnd="Oct 2024"
        experiences={[
          "Aplicaciones de process mining en proceso de Carguío y Transporte de camiones extractores, junto con actividad de equipos de carguío",
        ]}
      />
      <SingleExperience
        position="Software Developer"
        jobPlace="en SSIndex"
        dateStart="Jun 2023"
        dateEnd="Feb 2024"
        experiences={[
          "Migración de monolito de rails a aplicación desacoplada de Rails 7 API con react-typescript con deploy con infraestructura como código",
          "Rediseño de la plataforma migrada en Figma",
          "Proof of Concept de AWS Lambdas con Rust",
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
