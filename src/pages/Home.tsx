import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient animate-slide-up">
            Конструктор лендингов
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 animate-slide-up">
            Создавайте красивые лендинги из готовых шаблонов за несколько минут.
            <br />
            Просто кликните на текст и отредактируйте его.
          </p>
          <Link 
            to="/builder" 
            className="inline-block bg-gradient-mesh text-white font-bold px-10 py-5 rounded-full shadow-glow hover:shadow-glow-hover transform hover:scale-105 transition-all duration-300 text-lg animate-slide-up"
          >
            Перейти в конструктор →
          </Link>
          
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Готовые шаблоны</h3>
              <p className="text-gray-600">7 шаблонов для разных ниш</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">✏️</div>
              <h3 className="text-xl font-bold mb-2">Inline-редактирование</h3>
              <p className="text-gray-600">Кликните на текст чтобы изменить</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Быстрый старт</h3>
              <p className="text-gray-600">Запуск за 5 минут</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
