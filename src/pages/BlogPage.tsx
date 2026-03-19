import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Search } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Gut befeuchtet, gut tätowiert',
    subtitle: 'So bereitest du deine Haut optimal vor',
    category: 'Vorbereitung',
    date: 'März 2026',
    excerpt: 'Warum du deine Haut vor dem Tätowieren gut mit Feuchtigkeit versorgen solltest — und warum du es am Tag des Termins besser lässt.',
    image: '/images/studio/JollySchwarz-4038.webp',
  },
  {
    id: 2,
    title: 'Narben werden zu Kunst',
    subtitle: 'Tattoos als Heilung',
    category: 'Haut',
    date: 'Februar 2026',
    excerpt: 'Tattoos über Narben und Dehnungsstreifen: Möglichkeiten, Risiken und wichtige Überlegungen.',
    image: '/images/studio/JollySchwarz-4075.webp',
  },
  {
    id: 3,
    title: 'Fine Line Tattoos',
    subtitle: 'Feine Linien — Große Kunst',
    category: 'Fineline Tattoo',
    date: 'Februar 2026',
    excerpt: 'Fine Line Tattoos haben eine ganz eigene Faszination. Richtige Pflege und die Notwendigkeit des Nachstechens.',
    image: '/images/studio/JollySchwarz-4112.webp',
  },
  {
    id: 4,
    title: 'Tattoo-Alterung erklärt',
    subtitle: 'Was passiert wirklich unter deiner Haut?',
    category: 'Haut',
    date: 'Januar 2026',
    excerpt: 'Warum bleibt ein Tattoo eigentlich in der Haut? Eine spannende Reise durch unser Immunsystem und die Hautalterung.',
    image: '/images/studio/JollySchwarz-4146.webp',
  },
  {
    id: 5,
    title: 'Hand- und Fußtattoos',
    subtitle: 'Warum sie oft nicht halten, was sie versprechen',
    category: 'Haut',
    date: 'Dezember 2025',
    excerpt: 'Warum Tattoos auf Händen und Füßen häufig verblassen, verschwimmen oder unvollständig heilen.',
    image: '/images/studio/JollySchwarz-4253.webp',
  },
  {
    id: 6,
    title: 'Tattoo und Urheberrecht',
    subtitle: 'Ist mein Tattoo einzigartig?',
    category: 'Urheberrecht',
    date: 'November 2025',
    excerpt: 'Der Anspruch eines Tätowierten ist es, etwas Einzigartiges unter die Haut zu bekommen. Doch wie sieht die Rechtslage aus?',
    image: '/images/studio/JollySchwarz-4268.webp',
  },
  {
    id: 7,
    title: 'Tattoo Gurken',
    subtitle: 'Wenn Tattoos daneben gehen',
    category: 'Tattoo',
    date: 'Oktober 2025',
    excerpt: 'Sogenannte Tattoo Gurken — ein Begriff für besonders misslungene Tätowierungen. Wie es dazu kommt und wie man sie vermeidet.',
    image: '/images/studio/JollySchwarz-4295.webp',
  },
  {
    id: 8,
    title: 'Wenn sich ein Tattoo entzündet',
    subtitle: 'Ursachen, Erkennung und Behandlung',
    category: 'Aftercare',
    date: 'September 2025',
    excerpt: 'Keime, Bakterien, Viren und Pilze können eine Infektion verursachen. So erkennst du die Anzeichen und reagierst richtig.',
    image: '/images/studio/JollySchwarz-3975.webp',
  },
];

const categories = ['Alle', ...new Set(posts.map(p => p.category))];

export default function BlogPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filtered = posts.filter(post => {
    const matchesSearch = search === '' ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'Alle' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.blog-header', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#F7F6F4] min-h-screen font-sans pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">

        {/* Header */}
        <div className="blog-header text-center mb-16">
          <p className="text-[11px] tracking-archive uppercase text-charcoal/60 mb-4">
            Wissen & Inspiration
          </p>
          <h1 className="text-4xl md:text-5xl font-sans tracking-[0.15em] uppercase mb-6">
            Tattoo Blog
          </h1>
          <p className="font-serif italic text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Wir beantworten häufig gestellte Fragen rund ums Thema Tätowieren, die den Rahmen der FAQs sprengen.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16 border-b border-charcoal/10 pb-8">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/60" />
            <input
              type="text"
              placeholder="Suche..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-b border-charcoal/10 focus:border-charcoal/60 outline-none pl-7 pb-2 text-sm font-sans text-charcoal placeholder:text-charcoal/60 transition-colors"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] tracking-journal uppercase transition-all duration-300 pb-1 ${
                  activeCategory === cat
                    ? 'text-charcoal border-b border-charcoal'
                    : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filtered.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Meta */}
              <p className="text-[10px] tracking-archive uppercase text-charcoal/60 mb-3">
                {post.category} — {post.date}
              </p>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-sans tracking-[0.08em] uppercase text-charcoal mb-2 group-hover:text-charcoal/70 transition-colors">
                {post.title}
              </h2>

              {/* Subtitle */}
              <p className="font-serif italic text-sm text-charcoal/60 mb-4">
                {post.subtitle}
              </p>

              {/* Excerpt */}
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-charcoal/60 font-serif italic text-lg">
              Keine Beiträge gefunden.
            </p>
          </div>
        )}

        {/* Recommended blogs */}
        <div className="mt-32 border-t border-charcoal/10 pt-16">
          <p className="text-[11px] tracking-archive uppercase text-charcoal/60 mb-6">
            Empfohlene externe Blogs
          </p>
          <div className="flex flex-wrap gap-8">
            <a href="https://feelfarbig.de" target="_blank" rel="noopener noreferrer" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors border-b border-charcoal/10 pb-0.5">
              Feelfarbig
            </a>
            <a href="https://zumbuntspecht.de" target="_blank" rel="noopener noreferrer" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors border-b border-charcoal/10 pb-0.5">
              Zum Buntspecht
            </a>
            <a href="https://madlynevanlooy.com" target="_blank" rel="noopener noreferrer" className="text-sm text-charcoal/70 hover:text-charcoal transition-colors border-b border-charcoal/10 pb-0.5">
              Madlyne van Looy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
