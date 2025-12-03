import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-4">Конструктор лендингов</h1>
      <p className="text-gray-700 mb-8">Собирайте страницы из готовых шаблонов и блоков.</p>
      <Link to="/builder" className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark">
        Перейти в конструктор
      </Link>
    </div>
  )
}
