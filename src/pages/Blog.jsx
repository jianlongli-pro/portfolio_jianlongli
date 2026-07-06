import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Glass, GlassButton } from '../components/Glass';
import { useLang } from '../context/LangContext';
import { posts } from '../data/content';

export default function Blog() {
  const { t } = useLang();

  return (
    <section className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <h1 className="font-display text-4xl mb-2">{t.blog}</h1>
      <p className="text-sm text-[#8A8272] mb-12">{t.blogSub}</p>

      <div className="space-y-6">
        {posts.map((post, i) => {
          const colors = ['#0F6E56', '#854F0B', '#993556'];
          const c = colors[i % colors.length];
          return (
            <Glass key={post.slug} className="rounded-2xl p-6">
              <p className="font-data text-xs text-[#B3AA97] mb-2">{post.date}</p>
              <h2 className="font-display text-xl mb-2">{post.title}</h2>
              <p className="text-sm text-[#5B5546] leading-relaxed mb-4">{post.excerpt}</p>
              <GlassButton
                as={Link}
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-data"
                style={{ color: c }}
              >
                {t.readMore} <ArrowUpRight size={12} />
              </GlassButton>
            </Glass>
          );
        })}
      </div>
    </section>
  );
}
