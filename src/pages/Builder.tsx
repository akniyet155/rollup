import { useMemo, useState } from 'react'
import { templates, type TemplateDef } from '../templates/templates'
import { EditContext } from '../components/EditableText'

export default function Builder() {
  const [selectedId, setSelectedId] = useState(templates[0].id)
  const selected: TemplateDef | undefined = useMemo(
    () => templates.find(t => t.id === selectedId),
    [selectedId]
  )
  const [propsState, setPropsState] = useState<Record<string, any>>(selected?.defaultProps ?? {})
  const [editMode, setEditMode] = useState(true)

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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold">Конструктор</h1>
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={editMode}
                onChange={(e) => setEditMode(e.target.checked)}
                className="w-4 h-4"
              />
              <span>Редактирование</span>
            </label>
          </div>
        </div>
      </div>

      <div className="container py-3">
        <div className="bg-white rounded-xl shadow-sm p-3 mb-3">
          <h2 className="font-semibold mb-2 text-sm">Выберите шаблон</h2>
          <div className="grid grid-cols-2 gap-2">
            {templates.map(t => (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedId(t.id)
                  setPropsState(t.defaultProps)
                }}
                className={`text-left px-3 py-2 rounded-lg border transition-all mobile-touch ${
                  selectedId === t.id 
                    ? 'border-primary bg-primary/10 font-semibold' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="text-sm mb-1">{t.name}</div>
                <div className="text-xs text-gray-500 line-clamp-1">{t.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {editMode && (
            <div className="bg-blue-50 px-3 py-2 text-xs text-blue-800">
              💡 Нажмите на текст для редактирования
            </div>
          )}
          <EditContext.Provider value={{ editMode, onEdit: handlePropsChange }}>
            <div className="overflow-auto">
              {selected && <selected.component {...propsState} />}
            </div>
          </EditContext.Provider>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 shadow-lg">
          <button className="w-full tg-button text-center text-sm font-semibold">
            Экспорт HTML
          </button>
        </div>
      </div>
    </div>
  )
}
