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
    <section className="py-20 bg-white">
      <div className="container">
        {heading && <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">{heading}</h2>}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? 'bg-gradient-mesh text-white shadow-2xl scale-105 hover:scale-110' 
                  : 'bg-gray-50 border-2 border-gray-200 hover:border-primary hover:shadow-xl hover:-translate-y-2'
              }`}
            >
              <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-sm opacity-80 ml-2">/{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <span className={`text-xl ${plan.highlighted ? 'text-white' : 'text-primary'}`}>✓</span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.buttonHref || '#'}
                className={`block text-center px-6 py-4 rounded-full font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl'
                    : 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
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
