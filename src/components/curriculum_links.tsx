import CopyableResource from "@/ui/copyable_resource"
import LinkToResource from "@/ui/link_to_resource"

export default function CurriculumLinks() {
  return (
    <section className="flex flex-col md:flex-row flex-wrap gap-1.5 justify-between items-center">
      <div className="flex flex-1 justify-center">
        <CopyableResource icon="phone" title="Teléfono Celular" copyableContent="+56945807701">
          <span className="italic">+569&nbsp;4580&nbsp;7701</span>
        </CopyableResource>
      </div>
      <div className="flex flex-1 justify-center">
        <LinkToResource url="mailto:escalona.alvaro.13@gmail.com" title="Email" icon="envelope">
          escalona.alvaro.13@gmail.com
        </LinkToResource>
      </div>
      <div className="flex flex-1 justify-center">
        <LinkToResource url="https://www.linkedin.com/in/alvaroescalona/" title="Linkedin" icon="linkedin">
          AlvaroEscalona
        </LinkToResource>
      </div>
      <div className="flex flex-1 justify-center">
        <LinkToResource url="https://github.com/AlvaroEscalonaB" title="Github Repo" icon="github">
          AlvaroEscalonaB
        </LinkToResource>
      </div>
      <div className="flex flex-1 justify-center">
        <LinkToResource
          url="https://drive.google.com/uc?export=download&id=1vV2CaOzNis6zdqIA6qx09r9xwhjHoOV5"
          target="_blank"
          title="Descargar PDF"
          icon="download"
        >
          Descargar
        </LinkToResource>
      </div>
    </section>
  )
}
