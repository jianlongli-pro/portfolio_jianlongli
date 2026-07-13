import { Link } from 'react-router-dom';
import { ArrowUpRight, Award } from 'lucide-react';
import { Glass, GlassButton } from '../components/Glass';
import Waveform from '../components/Waveform';
import { useLang } from '../context/LangContext';
import { DOMAIN, domainFor, timeline, projects, posts } from '../data/content';
"import { timeline } from '../data/timeline.js';"

export default function Home() {
  const { t, lang } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-16">
        <p className="font-data text-xs uppercase tracking-widest mb-4" style={{ color: '#993556' }}>{t.kicker}</p>
        <h1 className="font-display text-6xl sm:text-7xl mb-6">Jian Long Li</h1>
        <p className="text-lg text-[#5B5546] max-w-xl leading-relaxed mb-8">{t.tagline}</p>

        <GlassButton
          as="a"
          href="#projets"
          tint={DOMAIN.software}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
          style={{ color: '#0F6E56' }}
        >
          {t.cta} <ArrowUpRight size={14} />
        </GlassButton>

        {/* Domain legend — glass chips */}
        <div className="flex flex-wrap gap-2 mt-10">
          {Object.values(DOMAIN).map((d) => (
            <GlassButton
              key={d.name}
              as="span"
              tint={d}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full font-data text-[11px]"
              style={{ color: d.text }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: d.border }} />
              {d.name}
            </GlassButton>
          ))}
        </div>

        <Waveform className="w-full h-10 mt-10" color="#5DCAA5" />
      </section>

      {/* Parcours */}
      <section id="parcours" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl mb-10">{t.parcours}</h2>
        <div className="space-y-8">
          {timeline.map((item, i) => {
            const d = domainFor(item.org + ' ' + item.desc);
            return (
              <div key={i} className="grid grid-cols-[100px_1fr] gap-6">
                <div className="font-data text-xs text-[#B3AA97] pt-1">{item.year}</div>
                <div className="pl-6 pb-2" style={{ borderLeft: `2px solid ${d.border}` }}>
                  <p className="font-medium">{item.role[lang]}</p>
                  <p className="text-sm mb-1 font-medium" style={{ color: d.text }}>{item.org[lang]}</p>
                  <p className="text-sm text-[#5B5546] leading-relaxed">{item.desc[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display text-2xl mb-10">{t.projets}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const d = domainFor(p.title + ' ' + p.stack.join(' '));
            return (
              <Glass key={i} tint={d} className="rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-medium text-sm mb-2 leading-snug">{p.title}</p>
                <p className="text-sm text-[#5B5546] leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-data text-[10px] px-1.5 py-0.5 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.55)', color: d.text }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Glass>
            );
          })}
        </div>
        <div className="mt-6 flex items-center gap-2 text-xs" style={{ color: '#B8752E' }}>
          <Award size={14} />
          <span>Nomination au prix des projets R&D — ESIEE Paris</span>
        </div>
      </section>

      {/* Blog teaser */}
      <section id="blog" className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-1">
          <h2 className="font-display text-2xl">{t.blog}</h2>
          <Link to="/blog" className="font-data text-xs flex items-center gap-1 hover:underline" style={{ color: '#993556' }}>
            {t.allPosts} <ArrowUpRight size={12} />
          </Link>
        </div>
        <p className="text-sm text-[#8A8272] mb-10">{t.blogSub}</p>
        <Glass className="rounded-2xl px-6 divide-y divide-white/40">
          {posts.map((post, i) => {
            const colors = ['#0F6E56', '#854F0B', '#993556'];
            const c = colors[i % colors.length];
            return (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="flex items-center justify-between py-4 group">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 mr-3" style={{ background: c }} />
                <span className="flex-1 text-[#2B2620]">{post.title}</span>
                <GlassButton
                  as="span"
                  className="font-data text-xs shrink-0 ml-4 flex items-center gap-1 px-2.5 py-1 rounded-full"
                  style={{ color: c }}
                >
                  {t.readMore} <ArrowUpRight size={12} />
                </GlassButton>
              </Link>
            );
          })}
        </Glass>
      </section>
    </>
  );
}
