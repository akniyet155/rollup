import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-3 text-gradient">
            Конструктор лендингов
          </h1>
          <p className="text-base text-gray-700 mb-6 px-4">
            Создавайте красивые лендинги из готовых шаблонов за несколько минут.
            Просто нажмите на текст и отредактируйте его.
          </p>
          <Link 
            to="/builder" 
            className="inline-block tg-button text-sm mobile-touch"
          >
            Открыть конструктор →
          </Link>
        </div>
        
        <div className="space-y-3 px-2">
          <div className="tg-card mobile-touch">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="text-base font-bold mb-1">7 готовых шаблонов</h3>
            <p className="text-sm text-gray-600">Для разных ниш и задач</p>
          </div>
          <div className="tg-card mobile-touch">
            <div className="text-3xl mb-2">✏️</div>
            <h3 className="text-base font-bold mb-1">Простое редактирование</h3>
            <p className="text-sm text-gray-600">Нажмите на текст чтобы изменить</p>
          </div>
          <div className="tg-card mobile-touch">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="text-base font-bold mb-1">Быстрый старт</h3>
            <p className="text-sm text-gray-600">Запуск за 5 минут</p>
          </div>
        </div>
      </div>
    </div>
  )
}
