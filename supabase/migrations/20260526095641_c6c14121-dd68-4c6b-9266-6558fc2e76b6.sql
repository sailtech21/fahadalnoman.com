
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  company_name TEXT,
  rating NUMERIC(2,1) NOT NULL,
  description TEXT NOT NULL,
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Approved reviews are viewable by everyone"
ON public.reviews FOR SELECT
USING (approved = true);

CREATE POLICY "Anyone can submit a review"
ON public.reviews FOR INSERT
WITH CHECK (
  rating >= 1 AND rating <= 5
  AND char_length(client_name) BETWEEN 1 AND 100
  AND char_length(description) BETWEEN 1 AND 2000
  AND (company_name IS NULL OR char_length(company_name) <= 150)
);

CREATE OR REPLACE FUNCTION public.auto_approve_review()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.approved := (NEW.rating >= 3.5);
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_review_approval
BEFORE INSERT ON public.reviews
FOR EACH ROW
EXECUTE FUNCTION public.auto_approve_review();

CREATE INDEX idx_reviews_approved_created ON public.reviews (approved, created_at DESC);
