export const skills = [
  { name: "React JS", level: 85 },
  { name: "Node JS", level: 79 },
  { name: "PHP", level: 90 },
  { name: "Laravel", level: 90 },
  { name: "Database", level: 94 },
  { name: "Server Setup", level: 87 },
];

export const featuredProjects = [
  { name: "Rent The Campbell", url: "https://www.rentthecampbell.com", tech: ["Web App", "Full Stack"] },
  { name: "OneReal Canada", url: "https://onereal.ca/", tech: ["Real Estate", "Web App"] },
  { name: "REC Canada", url: "https://www.reccanada.com/", tech: ["Business", "Web App"] },
  { name: "SmilesWallet", url: "https://www.smileswallet.com/", tech: ["FinTech", "Web App"] },
  { name: "Kendor Textiles", url: "https://kendortextiles.com/", tech: ["E-commerce", "Web App"] },
];

export const bdProjects = [
  { name: "BonikBazar", url: "https://bonikbazar.com", tech: ["E-commerce"] },
  { name: "Reliance Supermarket", url: "https://reliancesupermarket.com.au", tech: ["E-commerce"] },
  { name: "Sail Tech BD", url: "https://sailtechbd.com", tech: ["Tech Agency"] },
  { name: "Hide Expo", url: "https://hideexpo.com", tech: ["Business"] },
  { name: "BD Care", url: "https://bdcare.com.bd", tech: ["Healthcare"] },
  { name: "SafeWorks Malta", url: "https://safeworksmalta.com", tech: ["Business"] },
  { name: "GariKinun", url: "https://garikinun.com", tech: ["Automotive"] },
  { name: "iSpondon", url: "https://ispondon.com", tech: ["Platform"] },
  { name: "BD Property", url: "https://bdproperty.xyz", tech: ["Real Estate"] },
  { name: "BD Market", url: "https://bdmarket.xyz", tech: ["Marketplace"] },
];

export const services = [
  { title: "Website Development", description: "Custom, responsive websites built with modern technologies for optimal performance.", icon: "globe" },
  { title: "Web Application Development", description: "Scalable web applications with robust architecture and seamless user experience.", icon: "code" },
  { title: "E-commerce Solutions", description: "Complete online store solutions with payment integration and inventory management.", icon: "cart" },
  { title: "Server Setup & Deployment", description: "VPS configuration, CI/CD pipelines, and production-ready deployment.", icon: "server" },
  { title: "AI Integration", description: "Cutting-edge AI features integrated into your applications for competitive advantage.", icon: "brain" },
];

export const whyChooseMe = [
  { title: "Real Business Experience", description: "Years of building production applications for real clients." },
  { title: "CEO Mindset", description: "I think beyond code — understanding business goals and ROI." },
  { title: "Full-Stack Expertise", description: "From database design to pixel-perfect frontends." },
  { title: "International Projects", description: "Delivered solutions for clients across multiple countries." },
  { title: "Fast Delivery", description: "Efficient workflows that ship quality code on time." },
];

export const techStack = [
  "React", "Node.js", "Laravel", "PHP", "MySQL",
  "VPS / DevOps", "GitHub", "Vercel", "Hostinger", "Claude AI", "VS Code"
];

export const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/share/1DQ1cQbwPb/", icon: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/_myself_fahad", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/fahad-al-noman-b14042263/", icon: "linkedin" },
  { name: "Email", url: "mailto:fahadnomanofficial@gmail.com", icon: "email" },
  { name: "WhatsApp", url: "https://wa.me/+35699784477", icon: "whatsapp" },
];

export const education = [
  {
    degree: "OTHM Level 4 Diploma in Business Management (MQF Level 5)",
    institution: "Cross College Malta",
    location: "Qormi, Malta",
    status: "Running",
    start: "June 2025",
    icon: "building",
  },
  {
    degree: "BA in Economics",
    institution: "Times University, Bangladesh",
    status: "Completed",
    icon: "graduation",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Daffodil Polytechnic Institute",
    status: "Completed",
    icon: "code",
  },
  {
    degree: "HSC in Business Studies",
    institution: "Jabeda Sarwoar Computer and Commerce College",
    status: "Completed",
    icon: "book",
  },
];

export const experience = [
  {
    role: "CEO & Founder",
    company: "ZURVIX",
    period: "Present",
    description: "Leading a premium digital solutions company, delivering high-performance websites and scalable applications worldwide.",
  },
  {
    role: "Web Developer",
    company: "Sail Technology",
    period: "2021 – Present",
    description: "Building production-grade web applications, managing server deployments, and delivering full-stack solutions for diverse clients.",
  },
];

import laravelCover from "@/assets/blog/laravel-cover.jpg";
import laravelInline from "@/assets/blog/laravel-inline.jpg";
import ecommerceCover from "@/assets/blog/ecommerce-cover.jpg";
import ecommerceInline from "@/assets/blog/ecommerce-inline.jpg";
import aiCover from "@/assets/blog/ai-cover.jpg";
import aiInline from "@/assets/blog/ai-inline.jpg";
import journeyCover from "@/assets/blog/journey-cover.jpg";
import journeyInline from "@/assets/blog/journey-inline.jpg";
import devopsCover from "@/assets/blog/devops-cover.jpg";
import devopsInline from "@/assets/blog/devops-inline.jpg";
import clientsCover from "@/assets/blog/clients-cover.jpg";
import clientsInline from "@/assets/blog/clients-inline.jpg";

type BlogBlock = { type: "paragraph"; text: string } | { type: "image"; src: string; alt: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  cover: string;
  tags?: string[];
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-laravel-best-php-framework-2025",
    title: "Why Laravel is Still the Best PHP Framework in 2025",
    excerpt: "Exploring the features that keep Laravel at the top of the PHP ecosystem and why businesses should choose it.",
    category: "Technology",
    date: "April 15, 2025",
    isoDate: "2025-04-15",
    readTime: "5 min read",
    cover: laravelCover,
    tags: ["Laravel", "PHP", "Web Development", "Framework"],
    content: [
      { type: "paragraph", text: "Laravel has dominated the PHP ecosystem for over a decade, and in 2025 it remains the framework of choice for developers building everything from MVPs to enterprise platforms. Its elegant syntax, batteries-included approach, and active community make it uniquely positioned among modern web frameworks." },
      { type: "paragraph", text: "One of Laravel's biggest strengths is its developer experience. Tools like Eloquent ORM, Blade templating, and Artisan CLI make routine tasks feel effortless. Combined with first-party packages such as Sanctum, Horizon, Telescope, and Livewire, you get a complete platform — not just a framework." },
      { type: "image", src: laravelInline, alt: "Laravel PHP code on screen" },
      { type: "paragraph", text: "Performance has also caught up. With Laravel Octane (powered by Swoole or RoadRunner), modern PHP 8.3 JIT improvements, and HTTP/3 support, Laravel apps can rival Node.js in throughput while keeping development velocity high." },
      { type: "paragraph", text: "For businesses, Laravel means faster delivery, lower maintenance costs, and a huge talent pool. That's why at ZURVIX we still default to Laravel for most full-stack projects in 2025." },
    ],
  },
  {
    slug: "building-scalable-ecommerce-solutions",
    title: "Building Scalable E-commerce Solutions",
    excerpt: "A deep dive into architecture patterns and best practices for high-traffic online stores.",
    category: "Business",
    date: "March 28, 2025",
    isoDate: "2025-03-28",
    readTime: "7 min read",
    cover: ecommerceCover,
    tags: ["E-commerce", "Architecture", "Scalability", "Performance"],
    content: [
      { type: "paragraph", text: "Scaling an e-commerce platform is less about a single magic technology and more about thoughtful architecture. Caching strategies, queue-based processing, and a clean separation of concerns are what keep stores responsive during traffic spikes." },
      { type: "paragraph", text: "Start with a solid data model. Products, variants, inventory, orders, and customers should each have clear boundaries. Use read replicas for product browsing and keep write paths (checkout, payments) on the primary database." },
      { type: "image", src: ecommerceInline, alt: "E-commerce architecture diagram" },
      { type: "paragraph", text: "Queue everything that doesn't have to be instant: order confirmations, invoice generation, inventory sync, recommendation updates. Tools like Redis + Laravel Horizon or BullMQ on Node.js make this trivial." },
      { type: "paragraph", text: "Finally, never underestimate caching. Page caching for product listings, fragment caching for personalized blocks, and edge caching via a CDN can cut your origin load by 90%+ on Black Friday traffic." },
    ],
  },
  {
    slug: "rise-of-ai-in-web-development",
    title: "The Rise of AI in Web Development",
    excerpt: "How artificial intelligence is transforming the way we build and deploy web applications.",
    category: "AI & Tech",
    date: "March 10, 2025",
    isoDate: "2025-03-10",
    readTime: "6 min read",
    cover: aiCover,
    tags: ["AI", "LLM", "Web Development", "Productivity"],
    content: [
      { type: "paragraph", text: "AI is no longer a feature you bolt on at the end — it's becoming part of the development process itself. From code generation to automated testing and observability, AI is reshaping every layer of the stack." },
      { type: "image", src: aiInline, alt: "Developer working with AI assistant" },
      { type: "paragraph", text: "On the product side, embedding LLMs into your application unlocks natural-language search, smart recommendations, and AI assistants that actually understand your domain. The trick is grounding them with your own data using RAG patterns." },
      { type: "paragraph", text: "On the developer side, tools like GitHub Copilot, Claude, and Cursor have changed how fast we can ship. The developers who win in 2025 are the ones who learn to direct AI effectively, not the ones who fear it." },
    ],
  },
  {
    slug: "from-freelancer-to-ceo-my-journey",
    title: "From Freelancer to CEO: My Journey",
    excerpt: "Sharing my experience of transitioning from a solo developer to founding ZURVIX.",
    category: "Personal",
    date: "February 20, 2025",
    isoDate: "2025-02-20",
    readTime: "8 min read",
    cover: journeyCover,
    tags: ["Freelancing", "Entrepreneurship", "Career", "ZURVIX"],
    content: [
      { type: "paragraph", text: "I started freelancing while still in college, taking on small WordPress and Laravel projects. What began as a way to earn pocket money quickly turned into something much bigger." },
      { type: "image", src: journeyInline, alt: "Developer working at night" },
      { type: "paragraph", text: "The hardest transition wasn't technical — it was learning to think like an owner instead of a contractor. Pricing, scope, client communication, and saying 'no' became as important as writing clean code." },
      { type: "paragraph", text: "Founding ZURVIX was about scaling that mindset. Building a team, defining processes, and focusing on long-term partnerships instead of one-off gigs. It's still early, but the journey has taught me more than any course ever could." },
    ],
  },
  {
    slug: "server-setup-devops-for-beginners",
    title: "Server Setup & DevOps for Beginners",
    excerpt: "A beginner-friendly guide to VPS configuration, CI/CD pipelines, and deployment strategies.",
    category: "Technology",
    date: "February 5, 2025",
    isoDate: "2025-02-05",
    readTime: "10 min read",
    cover: devopsCover,
    tags: ["DevOps", "VPS", "CI/CD", "Deployment", "Nginx"],
    content: [
      { type: "paragraph", text: "Renting a VPS for the first time can feel intimidating, but the fundamentals are simpler than they look. Start with a clean Ubuntu LTS image, create a non-root user, harden SSH, and enable a firewall — that covers 80% of your security baseline." },
      { type: "paragraph", text: "Next, install your runtime (Node, PHP-FPM, or whatever your stack needs) along with Nginx as a reverse proxy. Use Certbot for automatic HTTPS, and you've got a production-ready environment." },
      { type: "image", src: devopsInline, alt: "CI/CD deployment pipeline diagram" },
      { type: "paragraph", text: "For CI/CD, GitHub Actions is the easiest way to start. Push to main, run tests, then SSH into the server and pull the latest code. Once that flow is reliable, graduate to zero-downtime deployments with tools like Deployer or Kamal." },
    ],
  },
  {
    slug: "how-to-land-international-clients",
    title: "How to Land International Clients as a Developer",
    excerpt: "Practical tips and strategies for reaching clients beyond your local market.",
    category: "Business",
    date: "January 18, 2025",
    isoDate: "2025-01-18",
    readTime: "6 min read",
    cover: clientsCover,
    tags: ["Freelancing", "Clients", "Remote Work", "Career"],
    content: [
      { type: "paragraph", text: "Landing international clients is mostly about visibility and trust. A clean portfolio, a clear value proposition, and consistent presence on the platforms where your clients actually hang out make all the difference." },
      { type: "image", src: clientsInline, alt: "Video call with international client" },
      { type: "paragraph", text: "LinkedIn, Upwork, and Twitter/X are still the top channels for developers from South Asia. But what really moves the needle is referrals — over-deliver on your first few international projects and the word will spread." },
      { type: "paragraph", text: "Communication matters as much as code. Respond fast, write clearly, and proactively share progress. Clients across time zones value developers they don't have to chase." },
    ],
  },
];

export const blogCategories = ["All", "Technology", "Business", "AI & Tech", "Personal"];
