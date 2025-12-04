export type Stat = {
  value: string
  label: string
}

export type StatsProps = {
  items: Stat[]
  background?: 'light' | 'dark' | 'primary'
}

export default function Stats({ items, background = 'light' }: StatsProps) {
  const bgClasses = {
    light: 'bg-white text-gray-900',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary text-white'
  }

  return (
    <section className={`py-16 ${bgClasses[background]}`}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {items.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm md:text-base opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
