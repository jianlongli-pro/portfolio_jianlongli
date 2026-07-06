import { Link } from 'react-router-dom';
import { Glass, GlassButton } from './Glass';
import { useLang } from '../context/LangContext';

export default function Nav() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-4 z-20 px-6">
      <Glass className="max-w-4xl mx-auto rounded-full px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm text-white shadow-sm"
            style={{ background: 'linear-gradient(135deg, #0F6E56, #854F0B 50%, #993556)' }}
          >
            JL
          </div>
          <span className="font-data text-xs text-[#8A8272] tracking-wide hidden sm:inline">jianlong.li</span>
        </Link>

        <nav className="hidden sm:flex gap-6 text-sm text-[#5B5546]">
          <Link to="/#parcours" className="hover:text-[#0F6E56] transition-colors">{t.nav[0]}</Link>
          <Link to="/#projets" className="hover:text-[#854F0B] transition-colors">{t.nav[1]}</Link>
          <Link to="/blog" className="hover:text-[#993556] transition-colors">{t.nav[2]}</Link>
          <Link to="/#contact" className="hover:text-[#2B2620] transition-colors">{t.nav[3]}</Link>
        </nav>

        <div className="flex gap-1 font-data text-xs p-1 rounded-full" style={{ background: 'rgba(43,38,32,0.05)' }}>
          {['fr', 'en', 'zh'].map((l) => (
            <GlassButton
              key={l}
              active={lang === l}
              onClick={() => setLang(l)}
              className="px-2.5 py-1 rounded-full"
              style={{ color: lang === l ? '#0F6E56' : '#B3AA97' }}
            >
              {l === 'zh' ? '中' : l.toUpperCase()}
            </GlassButton>
          ))}
        </div>
      </Glass>
    </header>
  );
}
