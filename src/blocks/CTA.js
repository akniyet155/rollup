import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditableText } from '../components/EditableText';
export default function CTA({ title, buttonText, buttonHref = '#' }) {
    return (_jsx("section", { className: "py-8 bg-gradient-tg", children: _jsxs("div", { className: "container text-center text-white space-y-4", children: [_jsx(EditableText, { path: "cta.title", value: title, as: "h2", className: "text-2xl font-bold" }), _jsx("a", { href: buttonHref, className: "inline-block bg-white text-primary font-semibold px-6 py-3 rounded-xl shadow-lg mobile-touch", children: _jsx(EditableText, { path: "cta.buttonText", value: buttonText, as: "span" }) })] }) }));
}
