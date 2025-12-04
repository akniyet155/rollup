export type PricePlan = {
  name: string
  price: string
  period?: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
  buttonHref?: string
}

export type PricingProps = {
  heading?: string
  plans: PricePlan[]
}

export default function Pricing({ heading = 'Тарифы', plans }: PricingProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        {heading && <h2 className="text-3xl font-bold mb-8 text-center">{heading}</h2>}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`rounded-lg p-8 ${
                plan.highlighted 
                  ? 'bg-primary text-white shadow-xl scale-105' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-sm opacity-80">/{plan.period}</span>}
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <span className={plan.highlighted ? 'text-white' : 'text-primary'}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.buttonHref || '#'}
                className={`block text-center px-6 py-3 rounded font-semibold ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {plan.buttonText || 'Выбрать'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
