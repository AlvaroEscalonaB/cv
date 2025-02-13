import SectionWrapper from "./section_wrapper"
import ChipSkill, { type ChipSkillProps } from "@/ui/chip_skill"

const skills: ChipSkillProps[][] = [
  [
    { className: "bg-[#61DBFB]", label: "React" },
    { className: "bg-[#F0DB4F]", label: "Javascript" },
    { className: "bg-[#3178C6] text-white", label: "Typescript" },
    { className: "bg-[#663399] text-white", label: "CSS" },
    { className: "bg-[#0BA5E9] text-white", label: "Tailwind" },
  ],
  [{ className: "bg-[#AE1401] text-white", label: "Ruby on Rails" }],
  [
    { className: "bg-[#2B5A83] text-white", label: "Python" },
    { className: "bg-[#009485] text-white", label: "FastApi" },
  ],
  [{ className: "bg-[#F57805] text-white", label: "Matlab" }],
]

export default function ProfessionalSkills() {
  return (
    <SectionWrapper label="Competencias Profesionales">
      <article className="flex flex-row">
        <div className="left-min-space flex justify-end">
          <span className="font-bold text-sm">Programación</span>
        </div>
        <div className="flex-1 flex flex-col gap-1 pl-4">
          {skills.map((rowSkills, index) => (
            <div className="flex flex-row flex-wrap gap-1.5" key={index}>
              {rowSkills.map(({ label, className }) => (
                <ChipSkill label={label} className={className} key={label} />
              ))}
            </div>
          ))}
        </div>
      </article>
      <article className="flex flex-row pt-4">
        <div className="left-min-space flex justify-end">
          <span className="font-bold text-sm">Software</span>
        </div>
        <div className="flex-1 flex flex-col gap-1 pl-4">Figma para diseño de páginas web</div>
      </article>
      <article className="flex flex-row pt-4">
        <div className="left-min-space flex justify-end">
          <span className="font-bold text-sm">Idiomas</span>
        </div>
        <div className="flex-1 flex flex-col gap-1 pl-4">Inglés nivel B1</div>
      </article>
    </SectionWrapper>
  )
}
