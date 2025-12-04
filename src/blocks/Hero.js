import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditableText } from '../components/EditableText';
export default function Hero({ title, subtitle, ctaText = 'Начать', ctaHref = '#' }) {
    return (_jsx("section", { className: "relative gradient-tg text-white py-12 px-4", children: _jsxs("div", { className: "container text-center relative z-10", children: [_jsx(EditableText, { path: "hero.title", value: title, as: "h1", className: "text-3xl font-bold mb-3" }), subtitle && (_jsx(EditableText, { path: "hero.subtitle", value: subtitle, as: "p", className: "text-base opacity-90 mb-6" })), ctaText && (_jsx("a", { href: ctaHref, className: "inline-block bg-white text-primary font-semibold px-6 py-3 rounded-xl shadow-lg mobile-touch", children: _jsx(EditableText, { path: "hero.ctaText", value: ctaText, as: "span" }) }))] }) }));
}
