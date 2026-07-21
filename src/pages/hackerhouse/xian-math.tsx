import React from "react"
import scrollIntoView from "scroll-into-view-if-needed"
import Header from "../../components/site-header"
import SEO from "../../components/seo"
import Footer from "../../components/footer"
import { Subheader } from "../../components/subheader"
import { Hero } from "../../components/xian-math/hero"
import { InViewSection } from "../../components/in-view-section"
import { ActiveAnchorProvider } from "../../components/providers/active-anchor"
import { FadeIn } from "../../components/fade-in"

export const Head = () => (
  <SEO
    title="ZKP × Math – Formal Methods in Practice | Xi'an"
    description="A week-long hacker house in Xi'an exploring zero-knowledge proofs and formal methods, hosted by Coset."
    image="/images/hackerhouse/xian-math-poster.svg"
  />
)

const context = { index: 0 }
export default function XianMath() {
  React.useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const activeSlug = location.hash.slice(1)
    if (!activeSlug) {
      return
    }
    setTimeout(() => {
      const section = document.querySelector(`#${activeSlug}`)
      if (section) {
        scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "start",
          scrollMode: "always",
        })
      }
    }, 300)
  }, [])

  return (
    <ActiveAnchorProvider>
      <Header />
      <main className="font-inter bg-web-tile">
        <Subheader />
        <InViewSection id="overview" context={context}>
          <FadeIn>
            <Hero />
          </FadeIn>
        </InViewSection>
      </main>
      <Footer />
    </ActiveAnchorProvider>
  )
}
