import { EditableText } from '../components/EditableText'

export type Feature = { icon?: React.ReactNode; title: string; text: string }
export type FeaturesProps = { heading?: string; items: Feature[] }

export default function Features({ heading = 'Преимущества', items }: FeaturesProps) {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container">
        {heading && (
          <EditableText 
            path="features.heading"
            value={heading}
            as="h2"
            className="text-2xl font-bold mb-4 text-center"
          />
        )}
        <div className="space-y-3">
          {items.map((f, i) => (
            <div 
              key={i} 
              className="tg-card mobile-touch"
            >
              {f.icon && <div className="text-primary mb-2 text-2xl">{f.icon}</div>}
              <EditableText 
                path={`features.items.${i}.title`}
                value={f.title}
                as="h3"
                className="text-lg font-bold mb-2"
              />
              <EditableText 
                path={`features.items.${i}.text`}
                value={f.text}
                as="p"
                className="text-gray-600 text-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
