import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { templates } from '../templates/templates';
import { EditContext } from '../components/EditableText';
export default function Builder() {
    const [selectedId, setSelectedId] = useState(templates[0].id);
    const selected = useMemo(() => templates.find(t => t.id === selectedId), [selectedId]);
    const [propsState, setPropsState] = useState(selected?.defaultProps ?? {});
    const [editMode, setEditMode] = useState(true);
    const handlePropsChange = (path, value) => {
        setPropsState(prev => {
            const next = structuredClone(prev);
            const parts = path.split('.');
            let cur = next;
            for (let i = 0; i < parts.length - 1; i++) {
                cur[parts[i]] = cur[parts[i]] ?? {};
                cur = cur[parts[i]];
            }
            cur[parts[parts.length - 1]] = value;
            return next;
        });
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "bg-white border-b sticky top-0 z-50 shadow-sm", children: _jsxs("div", { className: "container py-3 flex items-center justify-between", children: [_jsx("h1", { className: "text-lg font-bold", children: "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440" }), _jsx("div", { className: "flex items-center gap-2", children: _jsxs("label", { className: "flex items-center gap-2 cursor-pointer text-sm", children: [_jsx("input", { type: "checkbox", checked: editMode, onChange: (e) => setEditMode(e.target.checked), className: "w-4 h-4" }), _jsx("span", { children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435" })] }) })] }) }), _jsxs("div", { className: "container py-3", children: [_jsxs("div", { className: "bg-white rounded-xl shadow-sm p-3 mb-3", children: [_jsx("h2", { className: "font-semibold mb-2 text-sm", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: templates.map(t => (_jsxs("button", { onClick: () => {
                                        setSelectedId(t.id);
                                        setPropsState(t.defaultProps);
                                    }, className: `text-left px-3 py-2 rounded-lg border transition-all mobile-touch ${selectedId === t.id
                                        ? 'border-primary bg-primary/10 font-semibold'
                                        : 'border-gray-200 bg-white'}`, children: [_jsx("div", { className: "text-sm mb-1", children: t.name }), _jsx("div", { className: "text-xs text-gray-500 line-clamp-1", children: t.description })] }, t.id))) })] }), _jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden", children: [editMode && (_jsx("div", { className: "bg-blue-50 px-3 py-2 text-xs text-blue-800", children: "\uD83D\uDCA1 \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0442\u0435\u043A\u0441\u0442 \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F" })), _jsx(EditContext.Provider, { value: { editMode, onEdit: handlePropsChange }, children: _jsx("div", { className: "overflow-auto", children: selected && _jsx(selected.component, { ...propsState }) }) })] }), _jsx("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t p-3 shadow-lg", children: _jsx("button", { className: "w-full tg-button text-center text-sm font-semibold", children: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 HTML" }) })] })] }));
}
