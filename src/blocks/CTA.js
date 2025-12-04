import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditableText } from '../components/EditableText';
export default function CTA({ title, buttonText, buttonHref = '#' }) {
    return (_jsx("section", { className: "py-16 bg-primary text-white", children: _jsxs("div", { className: "container flex flex-col md:flex-row items-center justify-between gap-4", children: [_jsx(EditableText, { path: "cta.title", value: title, as: "h2", className: "text-2xl md:text-3xl font-bold" }), _jsx("a", { href: buttonHref, className: "inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-gray-100", children: _jsx(EditableText, { path: "cta.buttonText", value: buttonText, as: "span" }) })] }) }));
}
