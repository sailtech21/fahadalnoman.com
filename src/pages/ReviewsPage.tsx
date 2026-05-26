import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Star } from "lucide-react";
import SEO from "@/components/SEO";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { ReviewCard, StarRating, type Review } from "@/components/ReviewsSection";

const reviewSchema = z.object({
  client_name: z.string().trim().min(1, "Name is required").max(100),
  company_name: z.string().trim().max(150).optional().or(z.literal("")),
  rating: z.number().min(1).max(5),
  description: z.string().trim().min(10, "Please write at least 10 characters").max(2000),
});

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("reviews")
      .select("id, client_name, company_name, rating, description, created_at")
      .order("created_at", { ascending: false });
    setReviews((data as Review[]) || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = reviewSchema.safeParse({
      client_name: name,
      company_name: company,
      rating,
      description,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("reviews").insert({
      client_name: parsed.data.client_name,
      company_name: parsed.data.company_name || null,
      rating: parsed.data.rating,
      description: parsed.data.description,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Could not submit review. Please try again.");
      return;
    }
    if (rating >= 3.5) {
      toast.success("Thanks! Your review is now live.");
    } else {
      toast.success("Thanks for your feedback! It has been submitted for review.");
    }
    setName("");
    setCompany("");
    setDescription("");
    setRating(5);
    load();
  };

  const avg =
    reviews.length > 0
      ? reviews.reduce((s, r) => s + Number(r.rating), 0) / reviews.length
      : 0;

  return (
    <>
      <SEO
        title="Client Reviews | Fahad Al Noman"
        description="Read what clients say about working with Fahad Al Noman, and share your own experience."
        path="/reviews"
        keywords="Fahad Al Noman reviews, client testimonials, freelance developer reviews"
      />
      <PageLayout>
        <section className="max-w-5xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Client <span className="text-gradient">Reviews</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Honest feedback from clients I've worked with. Have your own to share? Leave a
              review below.
            </p>
            {reviews.length > 0 && (
              <div className="mt-6 inline-flex items-center gap-3 glass-strong rounded-full px-5 py-2">
                <StarRating value={Number(avg.toFixed(1))} />
                <span className="text-sm text-muted-foreground">
                  {reviews.length} review{reviews.length === 1 ? "" : "s"}
                </span>
              </div>
            )}
          </motion.div>

          {/* Reviews list */}
          {loading ? (
            <div className="text-center text-muted-foreground">Loading reviews…</div>
          ) : reviews.length === 0 ? (
            <div className="text-center text-muted-foreground mb-12">
              No reviews yet — be the first!
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.05, 0.4) }}
                >
                  <ReviewCard review={r} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Submit form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold mb-2">Leave a Review</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Reviews with a rating of 3.5 or higher are published automatically.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label className="mb-2 block">Rating</Label>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const v = i + 1;
                    const active = (hover || rating) >= v;
                    return (
                      <button
                        type="button"
                        key={v}
                        onMouseEnter={() => setHover(v)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(v)}
                        className="p-1"
                        aria-label={`Rate ${v} star${v === 1 ? "" : "s"}`}
                      >
                        <Star
                          size={28}
                          className={
                            active ? "fill-primary text-primary" : "text-muted-foreground/40"
                          }
                        />
                      </button>
                    );
                  })}
                  <span className="ml-2 text-sm text-muted-foreground">{rating}/5</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="mb-2 block">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    maxLength={150}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="mb-2 block">
                  Your Review *
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  maxLength={2000}
                  required
                />
              </div>

              <Button type="submit" disabled={submitting} className="w-full md:w-auto">
                {submitting ? "Submitting…" : "Submit Review"}
              </Button>
            </form>
          </motion.div>
        </section>
      </PageLayout>
    </>
  );
};

export default ReviewsPage;
