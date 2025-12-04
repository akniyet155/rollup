export type Testimonial = {
  name: string
  role?: string
  text: string
  avatar?: string
}

export type TestimonialsProps = {
  heading?: string
  items: Testimonial[]
}

export default function Testimonials({ heading = 'Отзывы', items }: TestimonialsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        {heading && <h2 className="text-3xl font-bold mb-8 text-center">{heading}</h2>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                {t.avatar && (
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold">{t.name}</div>
                  {t.role && <div className="text-sm text-gray-600">{t.role}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
