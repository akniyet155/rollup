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
    <section className="py-20 bg-gray-50">
      <div className="container">
        {heading && <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">{heading}</h2>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                {t.avatar && (
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/20"
                  />
                )}
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  {t.role && <div className="text-sm text-gray-500">{t.role}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
