import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Hero from '../blocks/Hero';
import Stats from '../blocks/Stats';
import Features from '../blocks/Features';
import Testimonials from '../blocks/Testimonials';
import Pricing from '../blocks/Pricing';
import CTA from '../blocks/CTA';
import Footer from '../blocks/Footer';
export default function FullLanding(props) {
    return (_jsxs(_Fragment, { children: [_jsx(Hero, { ...props.hero }), _jsx(Stats, { ...props.stats }), _jsx(Features, { ...props.features }), _jsx(Testimonials, { ...props.testimonials }), _jsx(Pricing, { ...props.pricing }), _jsx(CTA, { ...props.cta }), _jsx(Footer, { ...props.footer })] }));
}
