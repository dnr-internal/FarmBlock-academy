import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/thu-vien', label: 'Thư viện kiến thức', end: false },
  { to: '/quiz', label: 'Kiểm tra kiến thức', end: false },
  { to: '/lich-su', label: 'Kết quả của tôi', end: false },
]

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-brand-700">
            <span className="text-2xl">🌱</span>
            <span className="text-lg leading-tight">
              FarmBlock <span className="font-normal text-stone-500">Academy</span>
            </span>
          </NavLink>
          <nav className="hidden gap-1 sm:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-600 text-white'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-stone-100 px-3 py-2 sm:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-600 text-white' : 'bg-stone-100 text-stone-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <Outlet />
      </main>

      <footer className="border-t border-stone-200 bg-white py-6 text-center text-sm text-stone-500">
        <p>
          FarmBlock Academy — nền tảng học tập và kiểm tra kiến thức nông nghiệp, miễn phí cho cộng đồng.
        </p>
      </footer>
    </div>
  )
}
