import SimpleLanding from './SimpleLanding';
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
];
