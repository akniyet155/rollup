import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditableText } from '../components/EditableText';
export default function Footer({ links = [], copyright = '© 2025' }) {
    return (_jsx("footer", { className: "py-10 bg-gray-900 text-gray-300", children: _jsxs("div", { className: "container flex flex-col md:flex-row items-center justify-between gap-4", children: [_jsx("nav", { className: "flex gap-4 flex-wrap", children: links.map((l, i) => (_jsx("a", { href: l.href, className: "hover:text-white", children: _jsx(EditableText, { path: `footer.links.${i}.label`, value: l.label, as: "span" }) }, i))) }), _jsx(EditableText, { path: "footer.copyright", value: copyright, as: "div", className: "text-sm" })] }) }));
}
