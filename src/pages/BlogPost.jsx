import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { GlassButton } from '../components/Glass';
import { useLang } from '../context/LangContext';
import { posts } from '../data/content';

export default function BlogPost() {
  const { slug } = useParams();
  const { t } = useLang();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="max-w-2xl mx-auto px-6 pt-16 pb-24">
      <GlassButton
        as={Link}
        to="/blog"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-data mb-10"
        style={{ color: '#5B5546' }}
      >
        <ArrowLeft size={12} /> {t.backHome}
      </GlassButton>

      <p className="font-data text-xs text-[#B3AA97] mb-3">
        {t.publishedOn} {post.date}
      </p>
      <h1 className="font-display text-3xl sm:text-4xl mb-8 leading-tight">{post.title}</h1>

      <div className="space-y-5 text-[#3A342C] leading-relaxed">
        {post.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
