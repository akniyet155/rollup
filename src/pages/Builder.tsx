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
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Конструктор лендингов</h1>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={editMode}
                onChange={(e) => setEditMode(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm">Режим редактирования</span>
            </label>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
              Экспорт HTML
            </button>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h2 className="font-semibold mb-3">Выберите шаблон</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {templates.map(t => (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedId(t.id)
                  setPropsState(t.defaultProps)
                }}
                className={`text-left px-4 py-3 rounded-lg border-2 transition-all ${
                  selectedId === t.id 
                    ? 'border-primary bg-primary/5 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="font-medium text-sm mb-1">{t.name}</div>
                <div className="text-xs text-gray-500 line-clamp-2">{t.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {editMode && (
            <div className="bg-blue-50 border-b border-blue-200 px-4 py-2 text-sm text-blue-800">
              💡 Кликните на любой текст чтобы отредактировать его
            </div>
          )}
          <EditContext.Provider value={{ editMode, onEdit: handlePropsChange }}>
            <div className="overflow-auto max-h-[calc(100vh-200px)]">
              {selected && <selected.component {...propsState} />}
            </div>
          </EditContext.Provider>
        </div>
      </div>
    </div>
  )
}
