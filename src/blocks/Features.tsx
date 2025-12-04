import { EditableText } from '../components/EditableText'

export type Feature = { icon?: React.ReactNode; title: string; text: string }
export type FeaturesProps = { heading?: string; items: Feature[] }

export default function Features({ heading = 'Преимущества', items }: FeaturesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {heading && (
          <EditableText 
            path="features.heading"
            value={heading}
            as="h2"
            className="text-3xl font-bold mb-8"
          />
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((f, i) => (
            <div key={i} className="border rounded-lg p-6 shadow-sm">
              {f.icon && <div className="text-primary mb-3">{f.icon}</div>}
              <EditableText 
                path={`features.items.${i}.title`}
                value={f.title}
                as="h3"
                className="text-xl font-semibold mb-2"
              />
              <EditableText 
                path={`features.items.${i}.text`}
                value={f.text}
                as="p"
                className="text-gray-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
