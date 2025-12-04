import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Stats({ items, background = 'light' }) {
    const bgClasses = {
        light: 'bg-white text-gray-900',
        dark: 'bg-gray-900 text-white',
        primary: 'bg-primary text-white'
    };
    return (_jsx("section", { className: `py-16 ${bgClasses[background]}`, children: _jsx("div", { className: "container", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: items.map((stat, i) => (_jsxs("div", { children: [_jsx("div", { className: "text-4xl md:text-5xl font-bold mb-2", children: stat.value }), _jsx("div", { className: "text-sm md:text-base opacity-80", children: stat.label })] }, i))) }) }) }));
}
