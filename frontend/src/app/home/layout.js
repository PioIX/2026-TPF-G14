import { Suspense } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Suspense es necesario porque Navbar y las páginas usan useSearchParams():
// sin esto "npm run build" falla al generar las páginas.
export default function HomeLayout({ children }) {
  return (
    <div>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <main>
        <Suspense fallback={<div style={{ padding: "40px 24px" }}>Cargando...</div>}>
          {children}
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
