import Hero from '../blocks/Hero'
import Features from '../blocks/Features'
import CTA from '../blocks/CTA'
import Footer from '../blocks/Footer'

export type SimpleLandingProps = {
  hero: { title: string; subtitle?: string; ctaText?: string; ctaHref?: string }
  features: { heading?: string; items: { title: string; text: string }[] }
  cta: { title: string; buttonText: string; buttonHref?: string }
  footer: { links?: { label: string; href: string }[]; copyright?: string }
}

export default function SimpleLanding(props: SimpleLandingProps) {
  return (
    <>
      <Hero {...props.hero} />
      <Features {...props.features} />
      <CTA {...props.cta} />
      <Footer {...props.footer} />
    </>
  )
}
