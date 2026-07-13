import { useEffect, useRef, useState } from 'react';
import { Globe } from 'lucide-react';
import { Glass, GlassButton } from './Glass';
import { useLang } from '../context/LangContext';

const LABELS = { fr: 'FR', en: 'EN', zh: '中' };

export default function LangBubble() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close bubble if user clicks elsewhere on the page.
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
      {open && (
        <Glass className="rounded-2xl p-1.5 flex flex-col gap-1">
          {['fr', 'en', 'zh'].map((l) => (
            <GlassButton
              key={l}
              active={lang === l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              className="w-11 h-11 rounded-full flex items-center justify-center font-data text-xs"
              style={{ color: lang === l ? '#0F6E56' : '#5B5546' }}
            >
              {LABELS[l]}
            </GlassButton>
          ))}
        </Glass>
      )}

      <GlassButton
        active={open}
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{ color: '#0F6E56' }}
      >
        <Globe size={20} />
      </GlassButton>
    </div>
  );
}