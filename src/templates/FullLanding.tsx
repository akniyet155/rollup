import Hero from '../blocks/Hero'
import Stats from '../blocks/Stats'
import Features from '../blocks/Features'
import Testimonials from '../blocks/Testimonials'
import Pricing from '../blocks/Pricing'
import CTA from '../blocks/CTA'
import Footer from '../blocks/Footer'

export type FullLandingProps = {
  hero: { title: string; subtitle?: string; ctaText?: string; ctaHref?: string }
  stats: { items: { value: string; label: string }[]; background?: 'light' | 'dark' | 'primary' }
  features: { heading?: string; items: { title: string; text: string }[] }
  testimonials: { heading?: string; items: { name: string; role?: string; text: string }[] }
  pricing: { heading?: string; plans: { name: string; price: string; period?: string; features: string[]; highlighted?: boolean }[] }
  cta: { title: string; buttonText: string; buttonHref?: string }
  footer: { links?: { label: string; href: string }[]; copyright?: string }
}

export default function FullLanding(props: FullLandingProps) {
  return (
    <>
      <Hero {...props.hero} />
      <Stats {...props.stats} />
      <Features {...props.features} />
      <Testimonials {...props.testimonials} />
      <Pricing {...props.pricing} />
      <CTA {...props.cta} />
      <Footer {...props.footer} />
    </>
  )
}
