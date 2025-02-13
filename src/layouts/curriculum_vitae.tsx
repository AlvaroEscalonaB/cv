import AcademicBackground from "@/components/academic_background"
import CurriculumLinks from "@/components/curriculum_links"
import ProfessionalProfile from "@/components/professional_profile"
import ProfessionalSkills from "@/components/professional_skills"
import LaboralExperience from "@components/laboral_experience"
import Title from "@ui/title"

export default function CurriculumVitae() {
  return (
    <main className="flex justify-center h-full w-full overflow-hidden bg-sky-50 py-3 px-4">
      <div className="max-h-full overflow-auto">
        <div className="flex max-h-full flex-col overflow-auto rounded-2xl bg-white px-8 sm:px-12 md:px-16 py-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <Title variant="h1" title="Álvaro Escalona Bustamante" className="pb-1 pt-4 text-center text-sky-800" />
          <Title
            variant="h4"
            title="Ingeniero Civil Industrial - Universidad Católica de Chile"
            className="text-medium mt-2 text-center text-gray-500"
          />
          <hr className="mb-4 mt-4 border-t-2 border-gray-400 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16" />
          <CurriculumLinks />
          <section className="flex gap-4">
            <ProfessionalProfile />
          </section>
          <section className="flex gap-4">
            <LaboralExperience />
          </section>
          <section className="flex gap-4">
            <AcademicBackground />
          </section>
          <section className="flex gap-4">
            <ProfessionalSkills />
          </section>
        </div>
      </div>
    </main>
  )
}
