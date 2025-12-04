import { createContext, useContext } from 'react'

type EditContextType = {
  editMode: boolean
  onEdit: (path: string, value: string) => void
}

export const EditContext = createContext<EditContextType>({
  editMode: false,
  onEdit: () => {},
})

export const useEdit = () => useContext(EditContext)

type EditableTextProps = {
  path: string
  value: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
  className?: string
  placeholder?: string
}

export function EditableText({ path, value, as: Component = 'div', className = '', placeholder }: EditableTextProps) {
  const { editMode, onEdit } = useEdit()

  if (!editMode) {
    return <Component className={className}>{value}</Component>
  }

  return (
    <Component
      className={`${className} ${editMode ? 'cursor-text hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-offset-2 transition-all' : ''}`}
      contentEditable={editMode}
      suppressContentEditableWarning
      onBlur={(e) => {
        const newValue = e.currentTarget.textContent || ''
        if (newValue !== value) {
          onEdit(path, newValue)
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()
          e.currentTarget.blur()
        }
      }}
      data-placeholder={placeholder}
    >
      {value}
    </Component>
  )
}
