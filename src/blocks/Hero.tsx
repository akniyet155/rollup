import { EditableText } from '../components/EditableText'

export type HeroProps = {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

export default function Hero({ title, subtitle, ctaText = 'Начать', ctaHref = '#' }: HeroProps) {
  return (
    <section className="relative gradient-tg text-white py-12 px-4">
      <div className="container text-center relative z-10">
        <EditableText 
          path="hero.title"
          value={title}
          as="h1"
          className="text-3xl font-bold mb-3"
        />
        {subtitle && (
          <EditableText 
            path="hero.subtitle"
            value={subtitle}
            as="p"
            className="text-base opacity-90 mb-6"
          />
        )}
        {ctaText && (
          <a
            href={ctaHref}
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-xl shadow-lg mobile-touch"
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
