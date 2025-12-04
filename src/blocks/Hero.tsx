import { EditableText } from '../components/EditableText'

export type HeroProps = {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

export default function Hero({ title, subtitle, ctaText = 'Начать', ctaHref = '#' }: HeroProps) {
  return (
    <section className="relative gradient-primary text-white py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>
      <div className="container text-center relative z-10">
        <EditableText 
          path="hero.title"
          value={title}
          as="h1"
          className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up"
        />
        {subtitle && (
          <EditableText 
            path="hero.subtitle"
            value={subtitle}
            as="p"
            className="text-xl md:text-2xl opacity-95 mb-10 max-w-3xl mx-auto animate-slide-up"
          />
        )}
        {ctaText && (
          <a
            href={ctaHref}
            className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full shadow-glow hover:shadow-glow-hover transform hover:scale-105 transition-all duration-300 animate-slide-up"
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
