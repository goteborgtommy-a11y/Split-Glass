import { useState } from 'react'
import {
  BellIcon as BellOutline,
  ChatBubbleOvalLeftEllipsisIcon as ChatOutline,
  HomeIcon as HomeOutline,
  PlusIcon as PlusOutline,
  UserIcon as UserOutline,
} from '@heroicons/react/24/outline'
import {
  BellIcon as BellSolid,
  ChatBubbleOvalLeftEllipsisIcon as ChatSolid,
  HomeIcon as HomeSolid,
  UserIcon as UserSolid,
} from '@heroicons/react/24/solid'

type MobileMenuProps = {
  isDarkMode?: boolean
}

const MobileMenu = ({ isDarkMode = false }: MobileMenuProps) => {
  const navItems = [
    { name: 'Jobb', icon: HomeOutline, activeIcon: HomeSolid },
    { name: 'Planera', icon: ChatOutline, activeIcon: ChatSolid },
    { name: 'Kunder', icon: BellOutline, activeIcon: BellSolid },
    { name: 'Profil', icon: UserOutline, activeIcon: UserSolid },
  ] as const

  type TabName = (typeof navItems)[number]['name']

  const [activeTab, setActiveTab] = useState<TabName>('Jobb')

  const themeStyles = isDarkMode
    ? {
        container: 'bg-[rgba(0,0,0,0.03)] border-white/10 ring-white/5',
        textActive: 'text-white',
        textInactive: 'text-gray-400 hover:text-gray-200',
        activeBg: 'bg-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]',
        searchBtn: 'bg-[rgba(0,0,0,0.03)] border-white/10 ring-white/5 text-white hover:bg-white/10',
      }
    : {
        container: 'bg-[rgba(255,255,255,0.03)] border-black/5 ring-black/5',
        textActive: 'text-black',
        textInactive: 'text-gray-500 hover:text-gray-900',
        activeBg: 'bg-white/60 backdrop-blur-md shadow-sm ring-1 ring-white/70',
        searchBtn: 'bg-[rgba(255,255,255,0.03)] border-black/5 ring-black/5 text-gray-900 hover:bg-black/5',
      }

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex items-center justify-center px-4">
      <div className="flex items-center gap-3">
        <nav
          className={`
          flex items-center gap-1 p-1.5 rounded-full backdrop-blur-2xl border shadow-2xl ring-1 
          ${themeStyles.container}
        `}
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.name
            const IconComponent = isActive ? item.activeIcon : item.icon

            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`
                  relative flex flex-col items-center justify-center 
                  w-16 h-14 rounded-full transition-all duration-300 ease-out
                  ${isActive ? themeStyles.textActive : themeStyles.textInactive}
                `}
              >
                {isActive && <div className={`absolute inset-0 rounded-full ${themeStyles.activeBg}`} />}

                <span className="relative z-10 flex flex-col items-center gap-1">
                  <IconComponent
                    className={`h-6 w-6 transition-transform duration-300 ${isActive ? 'scale-105 drop-shadow-sm' : 'scale-100'}`}
                    style={{ shapeRendering: 'geometricPrecision' }}
                  />
                  <span className={`text-[10px] tracking-wide transition-all duration-300 ${isActive ? 'font-semibold' : 'font-medium'}`}>
                    {item.name}
                  </span>
                </span>
              </button>
            )
          })}
        </nav>

        <button
          className={`
          flex items-center justify-center w-[68px] h-[68px] rounded-full backdrop-blur-2xl border shadow-2xl ring-1 transition-colors
          ${themeStyles.searchBtn}
        `}
        >
          <PlusOutline className="h-6 w-6" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
