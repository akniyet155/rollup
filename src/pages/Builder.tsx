import { useMemo, useState } from 'react'
import { templates, type TemplateDef } from '../templates/templates'

export default function Builder() {
  const [selectedId, setSelectedId] = useState(templates[0].id)
  const selected: TemplateDef | undefined = useMemo(
    () => templates.find(t => t.id === selectedId),
    [selectedId]
  )
  const [propsState, setPropsState] = useState<Record<string, any>>(selected?.defaultProps ?? {})

  const handlePropsChange = (path: string, value: any) => {
    setPropsState(prev => {
      const next = structuredClone(prev)
      const parts = path.split('.')
      let cur: any = next
      for (let i = 0; i < parts.length - 1; i++) {
        cur[parts[i]] = cur[parts[i]] ?? {}
        cur = cur[parts[i]]
      }
      cur[parts[parts.length - 1]] = value
      return next
    })
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Конструктор</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="font-semibold mb-2">Шаблоны</h2>
          <div className="space-y-2">
            {templates.map(t => (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedId(t.id)
                  setPropsState(t.defaultProps)
                }}
                className={`w-full text-left px-3 py-2 rounded border ${
                  selectedId === t.id ? 'bg-primary text-white' : 'bg-white'
                }`}
              >
                <div className="font-medium">{t.name}</div>
                <div className="text-xs opacity-70">{t.description}</div>
              </button>
            ))}
          </div>

          <h2 className="font-semibold mt-6 mb-2">Параметры</h2>
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm">Hero: заголовок</span>
              <input
                className="mt-1 w-full border rounded px-2 py-1"
                value={propsState.hero?.title ?? ''}
                onChange={e => handlePropsChange('hero.title', e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-sm">Hero: подзаголовок</span>
              <input
                className="mt-1 w-full border rounded px-2 py-1"
                value={propsState.hero?.subtitle ?? ''}
                onChange={e => handlePropsChange('hero.subtitle', e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-sm">CTA: заголовок</span>
              <input
                className="mt-1 w-full border rounded px-2 py-1"
                value={propsState.cta?.title ?? ''}
                onChange={e => handlePropsChange('cta.title', e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="md:col-span-2 border rounded-lg overflow-hidden">
          <div className="bg-gray-50 border-b px-3 py-2 text-sm">Предпросмотр</div>
          <div>
            {selected && <selected.component {...propsState} />}
          </div>
        </div>
      </div>
    </div>
  )
}
