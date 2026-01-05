import { useState } from 'react'
import MobileMenu from './components/MobileMenu'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const cardClass = isDarkMode
    ? 'rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.35)]'
    : 'rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.06)]'
  const bodyText = isDarkMode ? 'text-white/70' : 'text-neutral-700'
  const headingText = isDarkMode ? 'text-white' : 'text-neutral-900'
  const imageFrame = isDarkMode
    ? 'mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg'
    : 'mt-4 overflow-hidden rounded-xl border border-neutral-200/70 bg-white shadow-lg'

  return (
    <div className={isDarkMode ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-neutral-900'}>
      <main className="mx-auto max-w-3xl px-6 pb-32 pt-12 space-y-6">
        <div className="sticky top-4 z-20 flex justify-center">
          <button
            type="button"
            onClick={() => setIsDarkMode((v) => !v)}
            className="flex items-center gap-2 rounded-full border border-neutral-300/60 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm backdrop-blur transition hover:bg-white/90 hover:shadow"
          >
            {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          </button>
        </div>

        <header className="space-y-3 text-center sm:text-left">
          <h1 className="text-3xl font-semibold tracking-tight">
            Explore a modern “Split Glass” navigation for mobile PWAs
          </h1>
          <p className={isDarkMode ? 'text-base text-white/70' : 'text-base text-neutral-600'}>
            Built with React and Tailwind CSS, this bottom nav mimics a native iOS feel in the browser with dynamic
            transparency and crisp icons. Toggle the theme above to see it hold up in both light and dark.
          </p>
        </header>

        <section className="space-y-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <article key={i} className={cardClass}>
              <h2 className={`text-xl font-semibold ${headingText}`}>Avsnitt {i + 1}</h2>
              <p className={`mt-3 text-sm leading-relaxed ${bodyText}`}>
                I takt med att team växer blir tydlig arkitektur och små, återanvändbara komponenter viktigare.
                Håll prop-gränssnitt snäva, låt state ägas nära den kod som behöver det och dela hellre data via
                kontext eller hooks än via långa prop-kedjor. Prestanda kommer ofta av enkla principer: mät, memoisa
                där det gör skillnad och skjut på laddning (lazy) av det som inte behövs direkt. Tänk också på
                tillgänglighet – semantiska element och fokusflöden sparar tid för alla användare.
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${bodyText}`}>
                Bygg för läsbarhet först. En ren mappstruktur, tests för känsliga flöden och tydliga tokens (färg,
                spacing, typografi) gör att UI:t kan utvecklas utan att tappa konsistens. När du arbetar med API:er,
                kapsla nätverksanrop i små klienter så att UI:t kan mockas enkelt i tester. Leverera snabbt, men
                refaktorera regelbundet så att skulden inte hinner växa.
              </p>
              {i === 2 && (
                <div className={imageFrame}>
                  <img
                    src="/origin-portal.png"
                    alt="Origin kundportal login UI"
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </div>
              )}
            </article>
          ))}
        </section>
      </main>

      <MobileMenu isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
