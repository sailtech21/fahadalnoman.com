import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { blogPosts, blogCategories } from "@/lib/data";
import { Clock, ArrowRight, Tag, BookOpen } from "lucide-react";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts[0];

  return (
    <PageLayout>
      <SEO title="Blog | Fahad Al Noman" description="Insights, tutorials, and stories from Fahad Al Noman on Laravel, React, AI, e-commerce, DevOps and more." path="/blog" />
      <SectionWrapper id="blog" title="My |Blog" subtitle="Insights, tutorials, and stories from my journey as a developer.">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to={`/blog/${featured.slug}`}
            className="glass-strong rounded-2xl overflow-hidden mb-10 glow-cyan cursor-pointer group block"
          >
            {featured.cover && (
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  width={1280}
                  height={560}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className="text-primary" />
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Featured Post</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                {featured.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Tag size={12} className="text-secondary" />{featured.category}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "glass-strong text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="glass-strong rounded-2xl overflow-hidden hover:glow-cyan transition-all group cursor-pointer flex flex-col h-full"
              >
                {post.cover && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      width={1280}
                      height={720}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={12} className="text-secondary" />
                  <span className="text-xs font-mono text-secondary">{post.category}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                    <span className="mx-1">•</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight size={14} />
                  </div>
                </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </PageLayout>
  );
};

export default BlogPage;
