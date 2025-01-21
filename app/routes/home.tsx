import type { Route } from "./+types/home"
import CurriculumVitae from "src/layouts/curriculum_vitae"

export function meta({}: Route.MetaArgs) {
  return [{ title: "CV Álvaro Escalona" }, { name: "description", content: "CV Álvaro Escalona" }]
}

export default function Home() {
  return <CurriculumVitae />
}
