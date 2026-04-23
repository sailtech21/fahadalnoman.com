import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { blogPosts } from "@/lib/data";
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from "lucide-react";
import { useEffect } from "react";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = blogPosts.findIndex((p) => p.slug === slug);
  const post = index >= 0 ? blogPosts[index] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!post) {
    return (
      <PageLayout>
        <section className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </section>
      </PageLayout>
    );
  }

  const prev = index > 0 ? blogPosts[index - 1] : null;
  const next = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const SITE_URL = "https://fahadalnoman.com";
  const articleBody = post.content
    .filter((b) => b.type === "paragraph")
    .map((b) => (b as { text: string }).text)
    .join("\n\n");
  const wordCount = articleBody.split(/\s+/).length;
  const keywords = [post.category, ...(post.tags ?? []), "Fahad Al Noman", "Web Development"].join(", ");

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [post.cover.startsWith("http") ? post.cover : `${SITE_URL}${post.cover}`],
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Person",
      name: "Fahad Al Noman",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Fahad Al Noman",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
    articleSection: post.category,
    keywords,
    wordCount,
    inLanguage: "en",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  return (
    <PageLayout>
      <SEO
        title={`${post.title} | Fahad Al Noman Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        image={post.cover}
        keywords={keywords}
        jsonLd={[articleLd, breadcrumbLd]}
      />
      <article className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-mono">
              <Tag size={12} /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar size={12} /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-gradient">{post.title}</span>
          </h1>

          {post.cover && (
            <div className="rounded-2xl overflow-hidden mb-8 glass-strong">
              <img
                src={post.cover}
                alt={post.title}
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-2 border-primary/40 pl-4">
            {post.excerpt}
          </p>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
            {post.content?.map((block, i) => {
              if (block.type === "image") {
                return (
                  <motion.figure
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="my-8 rounded-2xl overflow-hidden glass-strong"
                  >
                    <img
                      src={block.src}
                      alt={block.alt}
                      width={1280}
                      height={720}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                    {block.alt && (
                      <figcaption className="text-xs text-muted-foreground text-center py-2 px-4">
                        {block.alt}
                      </figcaption>
                    )}
                  </motion.figure>
                );
              }
              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {block.text}
                </motion.p>
              );
            })}
          </div>

          {/* Author card */}
          <div className="glass-strong rounded-2xl p-6 mt-12 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
              FN
            </div>
            <div>
              <p className="font-semibold">Fahad Al Noman</p>
              <p className="text-sm text-muted-foreground">
                Full Stack Web Developer · Founder of ZURVIX
              </p>
            </div>
          </div>

          {/* Prev / Next */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="glass-strong rounded-xl p-5 hover:border-primary/40 transition-colors group"
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                  <ArrowLeft size={12} /> Previous
                </span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/blog/${next.slug}`}
                className="glass-strong rounded-xl p-5 hover:border-primary/40 transition-colors group sm:text-right"
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1 mb-2 sm:justify-end">
                  Next <ArrowRight size={12} />
                </span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="glass-strong rounded-xl p-5 hover:glow-cyan transition-all group flex flex-col"
                  >
                    <span className="text-xs font-mono text-secondary mb-2">
                      {p.category}
                    </span>
                    <h3 className="text-sm font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-xs text-muted-foreground mt-auto">
                      {p.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </article>
    </PageLayout>
  );
};

export default BlogDetail;
