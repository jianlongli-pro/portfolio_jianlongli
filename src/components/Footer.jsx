import { Mail, ExternalLink } from 'lucide-react';
import { GlassButton } from './Glass';

export default function Footer() {
  return (
    <footer id="contact" className="max-w-4xl mx-auto px-6 py-12 flex flex-wrap items-center justify-between gap-4">
      <div className="flex gap-3">
        <GlassButton
          as="a"
          href="mailto:jianlong.lipro@gmail.com"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-[#5B5546] hover:text-[#0F6E56]"
        >
          <Mail size={14} /> jianlong.lipro@gmail.com
        </GlassButton>
        <GlassButton
          as="a"
          href="https://www.linkedin.com/in/jian-long-li-513aa61bb/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-[#5B5546] hover:text-[#854F0B]"
        >
          <ExternalLink size={14} /> linkedin.com/jian-long-li
        </GlassButton>
      </div>
      <p className="font-data text-xs text-[#B3AA97]">中文 · English · Français</p>
    </footer>
  );
}
