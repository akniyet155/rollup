import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
export const EditContext = createContext({
    editMode: false,
    onEdit: () => { },
});
export const useEdit = () => useContext(EditContext);
export function EditableText({ path, value, as: Component = 'div', className = '', placeholder }) {
    const { editMode, onEdit } = useEdit();
    if (!editMode) {
        return _jsx(Component, { className: className, children: value });
    }
    return (_jsx(Component, { className: `${className} ${editMode ? 'cursor-text hover:outline hover:outline-2 hover:outline-blue-400 hover:outline-offset-2 transition-all' : ''}`, contentEditable: editMode, suppressContentEditableWarning: true, onBlur: (e) => {
            const newValue = e.currentTarget.textContent || '';
            if (newValue !== value) {
                onEdit(path, newValue);
            }
        }, onKeyDown: (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                e.currentTarget.blur();
            }
        }, "data-placeholder": placeholder, children: value }));
}
