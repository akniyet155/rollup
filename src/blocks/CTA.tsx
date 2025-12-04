import { EditableText } from '../components/EditableText'

export type CTAProps = { title: string; buttonText: string; buttonHref?: string }

export default function CTA({ title, buttonText, buttonHref = '#' }: CTAProps) {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <EditableText 
          path="cta.title"
          value={title}
          as="h2"
          className="text-2xl md:text-3xl font-bold"
        />
        <a
          href={buttonHref}
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
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
