import SimpleLanding from './SimpleLanding';
import FullLanding from './FullLanding';
export const templates = [
    {
        id: 'simple-landing',
        name: 'Простой лендинг',
        description: 'Hero + Features + CTA + Footer',
        component: SimpleLanding,
        defaultProps: {
            hero: { title: 'Ваш продукт', subtitle: 'Короткое УТП', ctaText: 'Попробовать', ctaHref: '#' },
            features: {
                heading: 'Почему мы',
                items: [
                    { title: 'Быстро', text: 'Запуск за минуты' },
                    { title: 'Просто', text: 'Интуитивный конструктор' },
                    { title: 'Эффективно', text: 'Конверсия выше' },
                ],
            },
            cta: { title: 'Готовы начать?', buttonText: 'Зарегистрироваться', buttonHref: '#' },
            footer: { links: [{ label: 'Контакты', href: '#' }, { label: 'Политика', href: '#' }], copyright: '© 2025' },
        },
    },
    {
        id: 'full-landing',
        name: 'Полный лендинг',
        description: 'Hero + Stats + Features + Testimonials + Pricing + CTA + Footer',
        component: FullLanding,
        defaultProps: {
            hero: {
                title: 'Профессиональный продукт',
                subtitle: 'Всё что нужно для успеха вашего бизнеса',
                ctaText: 'Начать бесплатно',
                ctaHref: '#'
            },
            stats: {
                background: 'primary',
                items: [
                    { value: '10K+', label: 'Довольных клиентов' },
                    { value: '99%', label: 'Удовлетворённость' },
                    { value: '24/7', label: 'Поддержка' },
                    { value: '50+', label: 'Стран' },
                ],
            },
            features: {
                heading: 'Возможности',
                items: [
                    { title: 'Быстро', text: 'Запуск за минуты без технических знаний' },
                    { title: 'Надёжно', text: 'Гарантия безопасности и uptime 99.9%' },
                    { title: 'Масштабируемо', text: 'Растёт вместе с вашим бизнесом' },
                ],
            },
            testimonials: {
                heading: 'Что говорят наши клиенты',
                items: [
                    { name: 'Иван Петров', role: 'CEO, StartupX', text: 'Лучшее решение на рынке. Рекомендую!' },
                    { name: 'Мария Сидорова', role: 'Маркетолог', text: 'Увеличили конверсию на 300%' },
                    { name: 'Алексей Иванов', role: 'Предприниматель', text: 'Простота и качество - это про них' },
                ],
            },
            pricing: {
                heading: 'Выберите свой тариф',
                plans: [
                    {
                        name: 'Старт',
                        price: '₽990',
                        period: 'мес',
                        features: ['До 100 пользователей', 'Базовая поддержка', '1 ГБ хранилища'],
                        buttonText: 'Попробовать'
                    },
                    {
                        name: 'Бизнес',
                        price: '₽2990',
                        period: 'мес',
                        features: ['До 1000 пользователей', 'Приоритетная поддержка', '10 ГБ хранилища', 'API доступ'],
                        highlighted: true,
                        buttonText: 'Выбрать'
                    },
                    {
                        name: 'Корпоративный',
                        price: '₽9990',
                        period: 'мес',
                        features: ['Безлимит пользователей', '24/7 поддержка', 'Безлимит хранилища', 'Персональный менеджер'],
                        buttonText: 'Связаться'
                    },
                ],
            },
            cta: { title: 'Готовы начать?', buttonText: 'Зарегистрироваться сейчас', buttonHref: '#' },
            footer: {
                links: [
                    { label: 'О нас', href: '#' },
                    { label: 'Контакты', href: '#' },
                    { label: 'Политика', href: '#' },
                    { label: 'Условия', href: '#' }
                ],
                copyright: '© 2025 Ваша Компания'
            },
        },
    },
];
