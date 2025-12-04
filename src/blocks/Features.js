import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditableText } from '../components/EditableText';
export default function Features({ heading = 'Преимущества', items }) {
    return (_jsx("section", { className: "py-16 bg-white", children: _jsxs("div", { className: "container", children: [heading && (_jsx(EditableText, { path: "features.heading", value: heading, as: "h2", className: "text-3xl font-bold mb-8" })), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: items.map((f, i) => (_jsxs("div", { className: "border rounded-lg p-6 shadow-sm", children: [f.icon && _jsx("div", { className: "text-primary mb-3", children: f.icon }), _jsx(EditableText, { path: `features.items.${i}.title`, value: f.title, as: "h3", className: "text-xl font-semibold mb-2" }), _jsx(EditableText, { path: `features.items.${i}.text`, value: f.text, as: "p", className: "text-gray-700" })] }, i))) })] }) }));
}
