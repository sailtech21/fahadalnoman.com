import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ArrowRight, Quote } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { supabase } from "@/integrations/supabase/client";

export interface Review {
  id: string;
  client_name: string;
  company_name: string | null;
  rating: number;
  description: string;
  created_at: string;
}

export const StarRating = ({ value, size = 16 }: { value: number; size?: number }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full || (i === full && half);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "fill-primary text-primary" : "text-muted-foreground/40"}
          />
        );
      })}
      <span className="ml-1.5 text-xs font-mono text-muted-foreground">{value.toFixed(1)}</span>
    </div>
  );
};

export const ReviewCard = ({ review }: { review: Review }) => (
  <div className="glass-strong rounded-2xl p-6 h-full flex flex-col hover:glow-cyan transition-all">
    <Quote className="text-primary/40 mb-3" size={28} />
    <StarRating value={Number(review.rating)} />
    <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-6 flex-1">
      {review.description}
    </p>
    <div className="pt-4 border-t border-border/30">
      <p className="font-semibold text-foreground">{review.client_name}</p>
      {review.company_name && (
        <p className="text-xs text-muted-foreground mt-0.5">{review.company_name}</p>
      )}
    </div>
  </div>
);

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("reviews")
      .select("id, client_name, company_name, rating, description, created_at")
      .order("created_at", { ascending: false })
      .limit(3)
      .then(({ data }) => {
        setReviews((data as Review[]) || []);
        setLoading(false);
      });
  }, []);

  return (
    <SectionWrapper
      id="reviews"
      title="Client |Reviews"
      subtitle="What clients say about working with me."
    >
      {loading ? (
        <div className="text-center text-muted-foreground">Loading reviews…</div>
      ) : reviews.length === 0 ? (
        <div className="text-center text-muted-foreground">
          No reviews yet. Be the first to{" "}
          <Link to="/reviews" className="text-primary hover:underline">share your experience</Link>.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ReviewCard review={r} />
            </motion.div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-10">
        <Link
          to="/reviews"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong text-foreground hover:text-primary hover:border-primary/30 transition-all font-medium"
        >
          View all reviews <ArrowRight size={16} />
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default ReviewsSection;
