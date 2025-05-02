import ProductFocusedHero from "@/components/product-focused-hero"
import SupportCategories from "@/components/support-categories"
import SupportContact from "@/components/support-contact"
import SupportOptions from "@/components/support-options"

export default function AlternativeSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <ProductFocusedHero />
      <SupportCategories />
      <SupportContact />
      <SupportOptions />
    </main>
  )
}
