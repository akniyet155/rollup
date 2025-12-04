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
        id: 'saas-product',
        name: 'SaaS продукт',
        description: 'Для облачных сервисов и подписок',
        component: FullLanding,
        defaultProps: {
            hero: {
                title: 'Автоматизируйте свой бизнес',
                subtitle: 'Облачная платформа для управления проектами и командой',
                ctaText: 'Начать бесплатно',
                ctaHref: '#'
            },
            stats: {
                background: 'primary',
                items: [
                    { value: '50K+', label: 'Активных пользователей' },
                    { value: '99.9%', label: 'Uptime' },
                    { value: '24/7', label: 'Поддержка' },
                    { value: '120+', label: 'Стран' },
                ],
            },
            features: {
                heading: 'Всё необходимое в одном месте',
                items: [
                    { title: 'Управление задачами', text: 'Канбан-доски, спринты, отчёты' },
                    { title: 'Командная работа', text: 'Чаты, видеозвонки, общие документы' },
                    { title: 'Интеграции', text: 'Подключайте любимые инструменты' },
                ],
            },
            testimonials: {
                heading: 'Нам доверяют',
                items: [
                    { name: 'Дмитрий Козлов', role: 'CTO, TechStartup', text: 'Увеличили продуктивность на 40% за первый месяц' },
                    { name: 'Елена Смирнова', role: 'Product Owner', text: 'Лучшее решение для удалённых команд' },
                    { name: 'Игорь Волков', role: 'CEO, DigitalAgency', text: 'Простота использования впечатляет' },
                ],
            },
            pricing: {
                heading: 'Прозрачные цены',
                plans: [
                    {
                        name: 'Стартап',
                        price: '₽490',
                        period: 'мес',
                        features: ['До 10 участников', '5 проектов', '10 ГБ хранилища', 'Email поддержка'],
                        buttonText: '14 дней бесплатно'
                    },
                    {
                        name: 'Бизнес',
                        price: '₽1990',
                        period: 'мес',
                        features: ['До 50 участников', 'Безлимит проектов', '100 ГБ хранилища', 'Приоритетная поддержка', 'API доступ'],
                        highlighted: true,
                        buttonText: 'Популярный'
                    },
                    {
                        name: 'Энтерпрайз',
                        price: 'По запросу',
                        features: ['Безлимит участников', 'Безлимит хранилища', 'Выделенный сервер', 'Персональный менеджер', 'SLA 99.99%'],
                        buttonText: 'Связаться'
                    },
                ],
            },
            cta: { title: 'Начните бесплатно уже сегодня', buttonText: 'Создать аккаунт', buttonHref: '#' },
            footer: {
                links: [
                    { label: 'О нас', href: '#' },
                    { label: 'Блог', href: '#' },
                    { label: 'API', href: '#' },
                    { label: 'Поддержка', href: '#' }
                ],
                copyright: '© 2025 YourSaaS'
            },
        },
    },
    {
        id: 'online-course',
        name: 'Онлайн-курс',
        description: 'Для образовательных проектов',
        component: FullLanding,
        defaultProps: {
            hero: {
                title: 'Освойте профессию за 3 месяца',
                subtitle: 'Практический курс с реальными проектами и гарантией трудоустройства',
                ctaText: 'Записаться на курс',
                ctaHref: '#'
            },
            stats: {
                background: 'dark',
                items: [
                    { value: '5000+', label: 'Выпускников' },
                    { value: '92%', label: 'Трудоустроены' },
                    { value: '3 месяца', label: 'Длительность' },
                    { value: '150K ₽', label: 'Средняя зарплата' },
                ],
            },
            features: {
                heading: 'Что вы получите',
                items: [
                    { title: 'Практика', text: '12 реальных проектов в портфолио' },
                    { title: 'Менторство', text: 'Личный наставник на весь период обучения' },
                    { title: 'Карьера', text: 'Помощь с резюме и подготовка к собеседованиям' },
                ],
            },
            testimonials: {
                heading: 'Истории успеха наших студентов',
                items: [
                    { name: 'Анна Петрова', role: 'Junior Developer', text: 'Через 2 месяца после курса получила оффер в IT-компанию' },
                    { name: 'Максим Сидоров', role: 'Freelancer', text: 'Уже зарабатываю на фрилансе больше 100К в месяц' },
                    { name: 'Ольга Иванова', role: 'Frontend Dev', text: 'Сменила профессию в 35 лет. Всё реально!' },
                ],
            },
            pricing: {
                heading: 'Варианты обучения',
                plans: [
                    {
                        name: 'Самостоятельно',
                        price: '₽29 900',
                        features: ['Доступ к урокам 1 год', 'Проверка домашних заданий', 'Чат поддержки', 'Сертификат'],
                        buttonText: 'Выбрать'
                    },
                    {
                        name: 'С наставником',
                        price: '₽69 900',
                        features: ['Всё из тарифа "Самостоятельно"', 'Личный наставник', 'Еженедельные созвоны', 'Помощь с трудоустройством', 'Гарантия возврата'],
                        highlighted: true,
                        buttonText: 'Рекомендуем'
                    },
                    {
                        name: 'VIP',
                        price: '₽129 900',
                        features: ['Всё из тарифа "С наставником"', 'Индивидуальная программа', 'Безлимитные консультации', 'Карьерный коуч', 'Гарантия трудоустройства'],
                        buttonText: 'Выбрать'
                    },
                ],
            },
            cta: { title: 'Начните карьеру в IT прямо сейчас', buttonText: 'Записаться на курс', buttonHref: '#' },
            footer: {
                links: [
                    { label: 'Программа', href: '#' },
                    { label: 'Преподаватели', href: '#' },
                    { label: 'Отзывы', href: '#' },
                    { label: 'Контакты', href: '#' }
                ],
                copyright: '© 2025 IT Academy'
            },
        },
    },
    {
        id: 'mobile-app',
        name: 'Мобильное приложение',
        description: 'Для запуска мобильных приложений',
        component: FullLanding,
        defaultProps: {
            hero: {
                title: 'Ваш фитнес-тренер в кармане',
                subtitle: 'Персональные тренировки, планы питания и трекинг прогресса',
                ctaText: 'Скачать бесплатно',
                ctaHref: '#'
            },
            stats: {
                background: 'primary',
                items: [
                    { value: '1M+', label: 'Загрузок' },
                    { value: '4.9 ⭐', label: 'Рейтинг' },
                    { value: '500+', label: 'Тренировок' },
                    { value: '50K+', label: 'Отзывов' },
                ],
            },
            features: {
                heading: 'Возможности приложения',
                items: [
                    { title: 'Персональные планы', text: 'Программы под ваши цели и уровень подготовки' },
                    { title: 'Видео-инструкции', text: 'HD-видео каждого упражнения с детальными объяснениями' },
                    { title: 'Трекинг прогресса', text: 'Следите за результатами и достижениями' },
                ],
            },
            testimonials: {
                heading: 'Что говорят пользователи',
                items: [
                    { name: 'Сергей К.', role: 'Пользователь', text: 'Сбросил 15 кг за 3 месяца! Приложение просто огонь!' },
                    { name: 'Мария Л.', role: 'Пользователь', text: 'Наконец-то нашла приложение, которое мотивирует' },
                    { name: 'Андрей П.', role: 'Пользователь', text: 'Удобный интерфейс и классные тренировки' },
                ],
            },
            pricing: {
                heading: 'Выберите подписку',
                plans: [
                    {
                        name: 'Месяц',
                        price: '₽599',
                        period: 'мес',
                        features: ['Все тренировки', 'Планы питания', 'Трекинг прогресса', 'Поддержка 24/7'],
                        buttonText: 'Попробовать'
                    },
                    {
                        name: 'Год',
                        price: '₽3990',
                        period: 'год',
                        features: ['Все из месячной подписки', 'Скидка 45%', 'Персональный план', 'Без рекламы'],
                        highlighted: true,
                        buttonText: 'Выгодно!'
                    },
                    {
                        name: 'Навсегда',
                        price: '₽9990',
                        features: ['Все функции навсегда', 'Все будущие обновления', 'Приоритетная поддержка', 'Эксклюзивный контент'],
                        buttonText: 'Купить'
                    },
                ],
            },
            cta: { title: 'Начните трансформацию уже сегодня', buttonText: 'Скачать приложение', buttonHref: '#' },
            footer: {
                links: [
                    { label: 'О приложении', href: '#' },
                    { label: 'Тренеры', href: '#' },
                    { label: 'FAQ', href: '#' },
                    { label: 'Поддержка', href: '#' }
                ],
                copyright: '© 2025 FitApp'
            },
        },
    },
    {
        id: 'agency',
        name: 'Digital агентство',
        description: 'Для веб-студий и маркетинговых агентств',
        component: FullLanding,
        defaultProps: {
            hero: {
                title: 'Создаём сайты, которые продают',
                subtitle: 'Полный цикл digital-услуг от стратегии до запуска',
                ctaText: 'Обсудить проект',
                ctaHref: '#'
            },
            stats: {
                background: 'dark',
                items: [
                    { value: '200+', label: 'Реализованных проектов' },
                    { value: '7 лет', label: 'На рынке' },
                    { value: '50+', label: 'В команде' },
                    { value: '98%', label: 'Довольных клиентов' },
                ],
            },
            features: {
                heading: 'Наши услуги',
                items: [
                    { title: 'Веб-разработка', text: 'Сайты, интернет-магазины, web-приложения' },
                    { title: 'Digital-маркетинг', text: 'SEO, контекстная реклама, SMM' },
                    { title: 'Дизайн', text: 'UX/UI дизайн, брендинг, фирменный стиль' },
                ],
            },
            testimonials: {
                heading: 'Отзывы клиентов',
                items: [
                    { name: 'Олег Кузнецов', role: 'Владелец интернет-магазина', text: 'Увеличили продажи на 250% за полгода работы' },
                    { name: 'Светлана Морозова', role: 'Директор по маркетингу', text: 'Профессиональная команда, отличный результат' },
                    { name: 'Павел Соколов', role: 'CEO, TechCorp', text: 'Сделали сайт быстро и качественно' },
                ],
            },
            pricing: {
                heading: 'Тарифы',
                plans: [
                    {
                        name: 'Лендинг',
                        price: 'от ₽50 000',
                        features: ['Дизайн-макет', 'Адаптивная вёрстка', 'Форма обратной связи', 'Базовое SEO'],
                        buttonText: 'Заказать'
                    },
                    {
                        name: 'Корпоративный сайт',
                        price: 'от ₽150 000',
                        features: ['Уникальный дизайн', 'До 15 страниц', 'CMS для управления', 'SEO-оптимизация', 'Интеграции'],
                        highlighted: true,
                        buttonText: 'Популярный'
                    },
                    {
                        name: 'Интернет-магазин',
                        price: 'от ₽300 000',
                        features: ['Индивидуальный дизайн', 'Каталог товаров', 'Онлайн-оплата', 'CRM интеграция', 'Поддержка 6 мес'],
                        buttonText: 'Заказать'
                    },
                ],
            },
            cta: { title: 'Готовы начать проект?', buttonText: 'Оставить заявку', buttonHref: '#' },
            footer: {
                links: [
                    { label: 'Портфолио', href: '#' },
                    { label: 'Услуги', href: '#' },
                    { label: 'Блог', href: '#' },
                    { label: 'Контакты', href: '#' }
                ],
                copyright: '© 2025 Digital Agency'
            },
        },
    },
    {
        id: 'restaurant',
        name: 'Ресторан/Кафе',
        description: 'Для заведений общепита',
        component: SimpleLanding,
        defaultProps: {
            hero: {
                title: 'Ресторан "Вкусный уголок"',
                subtitle: 'Авторская кухня и уютная атмосфера в центре города',
                ctaText: 'Забронировать столик',
                ctaHref: '#'
            },
            features: {
                heading: 'Почему мы',
                items: [
                    { title: 'Свежие продукты', text: 'Ежедневные поставки от фермеров' },
                    { title: 'Авторская кухня', text: 'Шеф-повар с 15-летним опытом' },
                    { title: 'Уютная атмосфера', text: 'Идеально для свиданий и встреч' },
                ],
            },
            cta: { title: 'Ждём вас каждый день с 12:00 до 23:00', buttonText: 'Забронировать', buttonHref: '#' },
            footer: {
                links: [
                    { label: 'Меню', href: '#' },
                    { label: 'Акции', href: '#' },
                    { label: 'Контакты', href: '#' }
                ],
                copyright: '© 2025 Вкусный уголок'
            },
        },
    },
    {
        id: 'freelancer',
        name: 'Фрилансер',
        description: 'Личный сайт-портфолио',
        component: SimpleLanding,
        defaultProps: {
            hero: {
                title: 'Иван Иванов',
                subtitle: 'Веб-дизайнер и UI/UX специалист с 5-летним опытом',
                ctaText: 'Посмотреть портфолио',
                ctaHref: '#'
            },
            features: {
                heading: 'Чем я занимаюсь',
                items: [
                    { title: 'Веб-дизайн', text: 'Дизайн сайтов и лендингов' },
                    { title: 'UI/UX дизайн', text: 'Дизайн интерфейсов приложений' },
                    { title: 'Брендинг', text: 'Разработка фирменного стиля' },
                ],
            },
            cta: { title: 'Есть проект? Давайте обсудим!', buttonText: 'Написать мне', buttonHref: '#' },
            footer: {
                links: [
                    { label: 'Telegram', href: '#' },
                    { label: 'Behance', href: '#' },
                    { label: 'Instagram', href: '#' }
                ],
                copyright: '© 2025 Иван Иванов'
            },
        },
    },
];
