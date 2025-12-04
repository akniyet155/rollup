import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Hero from '../blocks/Hero';
import Features from '../blocks/Features';
import CTA from '../blocks/CTA';
import Footer from '../blocks/Footer';
export default function SimpleLanding(props) {
    return (_jsxs(_Fragment, { children: [_jsx(Hero, { ...props.hero }), _jsx(Features, { ...props.features }), _jsx(CTA, { ...props.cta }), _jsx(Footer, { ...props.footer })] }));
}
