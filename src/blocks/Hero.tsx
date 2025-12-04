import { EditableText } from '../components/EditableText'

export type HeroProps = {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

export default function Hero({ title, subtitle, ctaText = 'Начать', ctaHref = '#' }: HeroProps) {
  return (
    <section className="bg-primary text-white py-24">
      <div className="container text-center">
        <EditableText 
          path="hero.title"
          value={title}
          as="h1"
          className="text-4xl md:text-6xl font-bold mb-4"
        />
        {subtitle && (
          <EditableText 
            path="hero.subtitle"
            value={subtitle}
            as="p"
            className="text-lg md:text-xl opacity-90 mb-8"
          />
        )}
        {ctaText && (
          <a
            href={ctaHref}
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
          >
            <EditableText 
              path="hero.ctaText"
              value={ctaText}
              as="span"
            />
          </a>
        )}
      </div>
    </section>
  )
}
