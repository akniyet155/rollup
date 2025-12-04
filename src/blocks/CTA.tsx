import { EditableText } from '../components/EditableText'

export type CTAProps = { title: string; buttonText: string; buttonHref?: string }

export default function CTA({ title, buttonText, buttonHref = '#' }: CTAProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <EditableText 
          path="cta.title"
          value={title}
          as="h2"
          className="text-3xl md:text-4xl font-bold text-white"
        />
        <a
          href={buttonHref}
          className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <EditableText 
            path="cta.buttonText"
            value={buttonText}
            as="span"
          />
        </a>
      </div>
    </section>
  )
}
