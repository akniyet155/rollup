import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditableText } from '../components/EditableText';
export default function Features({ heading = 'Преимущества', items }) {
    return (_jsx("section", { className: "py-8 bg-gray-50", children: _jsxs("div", { className: "container", children: [heading && (_jsx(EditableText, { path: "features.heading", value: heading, as: "h2", className: "text-2xl font-bold mb-4 text-center" })), _jsx("div", { className: "space-y-3", children: items.map((f, i) => (_jsxs("div", { className: "tg-card mobile-touch", children: [f.icon && _jsx("div", { className: "text-primary mb-2 text-2xl", children: f.icon }), _jsx(EditableText, { path: `features.items.${i}.title`, value: f.title, as: "h3", className: "text-lg font-bold mb-2" }), _jsx(EditableText, { path: `features.items.${i}.text`, value: f.text, as: "p", className: "text-gray-600 text-sm" })] }, i))) })] }) }));
}
