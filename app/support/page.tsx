import SupportHero from "@/components/support-hero"
import SupportCategories from "@/components/support-categories"
import SupportContact from "@/components/support-contact"
import SupportOptions from "@/components/support-options"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <SupportHero />
      <SupportCategories />
      <SupportContact />
      <SupportOptions />
    </main>
  )
}
