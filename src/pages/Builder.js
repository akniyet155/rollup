import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { templates } from '../templates/templates';
export default function Builder() {
    const [selectedId, setSelectedId] = useState(templates[0].id);
    const selected = useMemo(() => templates.find(t => t.id === selectedId), [selectedId]);
    const [propsState, setPropsState] = useState(selected?.defaultProps ?? {});
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
    return (_jsxs("div", { className: "container py-10", children: [_jsx("h1", { className: "text-3xl font-bold mb-6", children: "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440" }), _jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "md:col-span-1", children: [_jsx("h2", { className: "font-semibold mb-2", children: "\u0428\u0430\u0431\u043B\u043E\u043D\u044B" }), _jsx("div", { className: "space-y-2", children: templates.map(t => (_jsxs("button", { onClick: () => {
                                        setSelectedId(t.id);
                                        setPropsState(t.defaultProps);
                                    }, className: `w-full text-left px-3 py-2 rounded border ${selectedId === t.id ? 'bg-primary text-white' : 'bg-white'}`, children: [_jsx("div", { className: "font-medium", children: t.name }), _jsx("div", { className: "text-xs opacity-70", children: t.description })] }, t.id))) }), _jsx("h2", { className: "font-semibold mt-6 mb-2", children: "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("label", { className: "block", children: [_jsx("span", { className: "text-sm", children: "Hero: \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" }), _jsx("input", { className: "mt-1 w-full border rounded px-2 py-1", value: propsState.hero?.title ?? '', onChange: e => handlePropsChange('hero.title', e.target.value) })] }), _jsxs("label", { className: "block", children: [_jsx("span", { className: "text-sm", children: "Hero: \u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" }), _jsx("input", { className: "mt-1 w-full border rounded px-2 py-1", value: propsState.hero?.subtitle ?? '', onChange: e => handlePropsChange('hero.subtitle', e.target.value) })] }), _jsxs("label", { className: "block", children: [_jsx("span", { className: "text-sm", children: "CTA: \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A" }), _jsx("input", { className: "mt-1 w-full border rounded px-2 py-1", value: propsState.cta?.title ?? '', onChange: e => handlePropsChange('cta.title', e.target.value) })] })] })] }), _jsxs("div", { className: "md:col-span-2 border rounded-lg overflow-hidden", children: [_jsx("div", { className: "bg-gray-50 border-b px-3 py-2 text-sm", children: "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440" }), _jsx("div", { children: selected && _jsx(selected.component, { ...propsState }) })] })] })] }));
}
