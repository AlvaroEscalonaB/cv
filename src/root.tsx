import CurriculumVitae from "./layouts/curriculum_vitae"

// import { isRouteErrorResponse } from "react-router"

export default function App() {
  return <CurriculumVitae />
}

// export function ErrorBoundary({ error }: any) {
//   let message = "Oops!"
//   let details = "An unexpected error occurred."
//   let stack: string | undefined

//   if (isRouteErrorResponse(error)) {
//     message = error.status === 404 ? "404" : "Error"
//     details = error.status === 404 ? "The requested page could not be found." : error.statusText || details
//   } else if (import.meta.env.DEV && error && error instanceof Error) {
//     details = error.message
//     stack = error.stack
//   }

//   return (
//     <main className="container mx-auto p-4 pt-16">
//       <h1>{message}</h1>
//       <p>{details}</p>
//       {stack && (
//         <pre className="w-full overflow-x-auto p-4">
//           <code>{stack}</code>
//         </pre>
//       )}
//     </main>
//   )
// }
