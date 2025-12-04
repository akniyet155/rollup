import { EditableText } from '../components/EditableText'

export type CTAProps = { title: string; buttonText: string; buttonHref?: string }

export default function CTA({ title, buttonText, buttonHref = '#' }: CTAProps) {
  return (
    <section className="py-8 bg-gradient-tg">
      <div className="container text-center text-white space-y-4">
        <EditableText 
          path="cta.title"
          value={title}
          as="h2"
          className="text-2xl font-bold"
        />
        <a
          href={buttonHref}
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-xl shadow-lg mobile-touch"
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
