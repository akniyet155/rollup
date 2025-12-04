import { EditableText } from '../components/EditableText'

export type Feature = { icon?: React.ReactNode; title: string; text: string }
export type FeaturesProps = { heading?: string; items: Feature[] }

export default function Features({ heading = 'Преимущества', items }: FeaturesProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {heading && (
          <EditableText 
            path="features.heading"
            value={heading}
            as="h2"
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
          />
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((f, i) => (
            <div 
              key={i} 
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {f.icon && <div className="text-primary mb-4 text-3xl">{f.icon}</div>}
              <EditableText 
                path={`features.items.${i}.title`}
                value={f.title}
                as="h3"
                className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
              />
              <EditableText 
                path={`features.items.${i}.text`}
                value={f.text}
                as="p"
                className="text-gray-600 leading-relaxed"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
