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
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx("div", { className: "bg-white border-b sticky top-0 z-50 shadow-sm", children: _jsxs("div", { className: "container py-4 flex items-center justify-between", children: [_jsx("h1", { className: "text-2xl font-bold", children: "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u043E\u0432" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: editMode, onChange: (e) => setEditMode(e.target.checked), className: "w-4 h-4" }), _jsx("span", { className: "text-sm", children: "\u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F" })] }), _jsx("button", { className: "bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark", children: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 HTML" })] })] }) }), _jsxs("div", { className: "container py-6", children: [_jsxs("div", { className: "bg-white rounded-lg shadow-sm p-4 mb-6", children: [_jsx("h2", { className: "font-semibold mb-3", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0448\u0430\u0431\u043B\u043E\u043D" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3", children: templates.map(t => (_jsxs("button", { onClick: () => {
                                        setSelectedId(t.id);
                                        setPropsState(t.defaultProps);
                                    }, className: `text-left px-4 py-3 rounded-lg border-2 transition-all ${selectedId === t.id
                                        ? 'border-primary bg-primary/5 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300 bg-white'}`, children: [_jsx("div", { className: "font-medium text-sm mb-1", children: t.name }), _jsx("div", { className: "text-xs text-gray-500 line-clamp-2", children: t.description })] }, t.id))) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: [editMode && (_jsx("div", { className: "bg-blue-50 border-b border-blue-200 px-4 py-2 text-sm text-blue-800", children: "\uD83D\uDCA1 \u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0442\u0435\u043A\u0441\u0442 \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0435\u0433\u043E" })), _jsx(EditContext.Provider, { value: { editMode, onEdit: handlePropsChange }, children: _jsx("div", { className: "overflow-auto max-h-[calc(100vh-200px)]", children: selected && _jsx(selected.component, { ...propsState }) }) })] })] })] }));
}
