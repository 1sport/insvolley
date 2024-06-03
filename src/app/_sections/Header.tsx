import Logo from '@/shared/images/logo.svg'

export const Header = () => {
  return (
    <div className="container py-10 flex justify-between items-end">
      <Logo />
      <ul className="text-white flex gap-9">
        <li>Новости</li>
        <li>Календарь</li>
        <li>Турниры</li>
        <li>Сборные</li>
        <li>Клубы</li>
      </ul>
      <div className="w-40" />
    </div>
  )
}