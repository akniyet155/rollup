import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditableText } from '../components/EditableText';
export default function Hero({ title, subtitle, ctaText = 'Начать', ctaHref = '#' }) {
    return (_jsx("section", { className: "bg-primary text-white py-24", children: _jsxs("div", { className: "container text-center", children: [_jsx(EditableText, { path: "hero.title", value: title, as: "h1", className: "text-4xl md:text-6xl font-bold mb-4" }), subtitle && (_jsx(EditableText, { path: "hero.subtitle", value: subtitle, as: "p", className: "text-lg md:text-xl opacity-90 mb-8" })), ctaText && (_jsx("a", { href: ctaHref, className: "inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-gray-100", children: _jsx(EditableText, { path: "hero.ctaText", value: ctaText, as: "span" }) }))] }) }));
}
