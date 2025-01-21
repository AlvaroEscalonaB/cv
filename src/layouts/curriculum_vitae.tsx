import AdditionalActivities from "@/components/additional_activities"
import CurriculumLinks from "@/components/curriculum_links"
import ProfessionalSkills from "@/components/professional_skills"
import AcademicExperience from "@components/academic_experience"
import LaboralExperience from "@components/laboral_experience"
import Title from "@ui/title"

export default function CurriculumVitae() {
  return (
    <main className="h-full w-full overflow-hidden bg-sky-50 py-2 px-4 sm:px-12 md:px-20 lg:px-32 xl:px-40">
      <div className="max-h-full overflow-auto">
        <div className="flex max-h-full flex-col overflow-auto rounded-2xl bg-white px-16 py-4">
          <Title variant="h1" title="Álvaro Escalona Bustamante" className="pb-1 pt-4 text-center text-sky-800" />
          <Title
            variant="h3"
            title="Ingeniero Civil Industrial PUC"
            className="text-semibold text-center text-gray-500"
          />
          <hr className="mb-4 mt-4 border-t-2 border-gray-400 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16" />
          <CurriculumLinks />
          <section className="flex gap-4">
            <LaboralExperience />
          </section>
          <section className="flex gap-4">
            <AcademicExperience />
          </section>
          <section className="flex gap-4">
            <ProfessionalSkills />
          </section>
          <section className="flex gap-4">
            <AdditionalActivities />
          </section>
        </div>
      </div>
    </main>
  )
}
