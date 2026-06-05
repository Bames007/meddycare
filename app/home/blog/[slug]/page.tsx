import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { DESIGN_TOKENS } from "@/app/utils/constants";

const { colors, typography, transitions } = DESIGN_TOKENS;

const getPostData = (slug: string) => {
  const data: Record<string, any> = {
    "cost-of-care-2026": {
      title: "The Cost of Care: 2026 Breakdown",
      content: `
        <p>Navigating the financial landscape of senior care is complex. Families often find themselves overwhelmed by the variety of options, hidden fees, and long‑term commitments. In this comprehensive guide, we break down what you can expect to pay for quality care in 2026, and how to plan ahead.</p>
        
        <h2>Average Costs by Care Type</h2>
        <p>According to recent industry surveys, the median hourly rate for in‑home care has risen to <strong>$28–$35 per hour</strong>, depending on location and level of specialization. Live‑in care averages <strong>$180–$250 per day</strong>, while assisted living communities now range from <strong>$4,500 to $7,500 per month</strong>.</p>
        
        <h2>What Affects the Price?</h2>
        <p>Location, caregiver qualifications (e.g., CNA vs. LPN), and the need for specialized dementia care all influence final costs. Additionally, whether you hire through an agency or a private carer changes the pricing model dramatically – agencies charge a premium for vetting and backup coverage.</p>
        
        <h2>How to Plan Financially</h2>
        <p>Long‑term care insurance, Medicaid waivers, and veterans' benefits can offset significant portions of these expenses. We recommend meeting with a certified elder law attorney or financial planner who specializes in aging.</p>
        
        <p>Stay tuned for our upcoming worksheet on <em>“Creating Your Care Budget”</em>.</p>
      `,
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600",
      author: "Sarah Johnson",
      authorTitle: "Senior Care Financial Analyst",
      authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "May 15, 2026",
      readTime: "6 min read",
      category: "Finance",
    },
    "signs-parent-needs-help": {
      title: "Signs Your Parent Needs Help",
      content: `
        <p>It's never easy to realize that the person who once cared for you may now need care themselves. But noticing the early warning signs can make all the difference in ensuring your parent's safety and quality of life.</p>
        
        <h2>Physical Clues</h2>
        <p>Unexplained weight loss, a cluttered or unclean home, expired food in the refrigerator, and unopened mail are often early indicators that daily tasks are becoming overwhelming.</p>
        
        <h2>Behavioral Changes</h2>
        <p>Withdrawal from social activities, mood swings, confusion about familiar places, or a sudden lack of interest in hobbies are also red flags. These can be subtle – a grandparent who stops attending church or a father who no longer wants to drive.</p>
        
        <h2>What to Do Next</h2>
        <p>Start with a gentle, open conversation. Express concern rather than criticism. Offer to help with specific tasks, like grocery shopping or organising medications. If resistance persists, involve a trusted doctor or a geriatric care manager.</p>
        
        <p>Remember, asking for help is a sign of strength – for both you and your loved one.</p>
      `,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600",
      author: "Dr. Michael Chen",
      authorTitle: "Geriatric Psychologist",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "May 10, 2026",
      readTime: "4 min read",
      category: "Insights",
    },
    "vet-carer-checklist": {
      title: "How to Vet a Private Carer",
      content: `
        <p>Hiring a private carer for a loved one is a decision that requires trust, diligence, and a clear process. Here’s your step‑by‑step checklist to ensure you find a qualified, compassionate, and reliable professional.</p>
        
        <h2>Step 1: Define Your Needs</h2>
        <p>Before you start searching, write down the specific tasks: companionship, medication management, bathing assistance, meal preparation, or specialised dementia care. Knowing exactly what you need will help you ask the right questions.</p>
        
        <h2>Step 2: Verify Credentials</h2>
        <p>Ask for: CPR/First Aid certification, background check (state and federal), professional references (minimum two), and proof of any specialised training (e.g., Alzheimer's care, fall prevention).</p>
        
        <h2>Step 3: Conduct a Thorough Interview</h2>
        <p>Beyond qualifications, ask scenario‑based questions: “What would you do if my parent refuses to take their medication?” or “Describe a time you handled an emergency.” Trust your gut – chemistry matters.</p>
        
        <h2>Step 4: Trial Period</h2>
        <p>Start with a paid trial of two to three shifts. Observe punctuality, patience, hygiene practices, and how they interact with your loved one. Afterwards, ask your parent privately for their honest impression.</p>
        
        <h2>Step 5: Formalise the Arrangement</h2>
        <p>Create a simple written agreement covering schedule, duties, hourly rate, overtime pay, sick leave, and confidentiality. Both parties should sign and keep a copy.</p>
        
        <h2>Red Flags to Watch For</h2>
        <p>Lack of references, reluctance to undergo a background check, vague answers about past employment, or any sign of impatience during the trial. Trust your instincts – if something feels off, it probably is.</p>
        
        <p>Remember: you’re not just hiring a worker; you’re inviting someone into your family’s intimate space. Take your time and choose wisely.</p>
      `,
      img: "https://images.unsplash.com/photo-1581579438707-fd89eedd0709?q=80&w=1600",
      author: "Emma Watson",
      authorTitle: "Care Quality Specialist",
      authorImage: "https://randomuser.me/api/portraits/women/45.jpg",
      date: "May 5, 2026",
      readTime: "5 min read",
      category: "Authority",
    },
    "why-respite-care-matters": {
      title: "Why Respite Care Matters",
      content: `
        <p>Family caregivers are the unsung heroes of senior care – but even heroes need rest. Respite care is temporary relief for the primary caregiver, allowing you to recharge while ensuring your loved one continues to receive professional attention.</p>
        
        <h2>The Hidden Toll of Caregiving</h2>
        <p>Studies show that family caregivers are at higher risk for depression, anxiety, and physical ailments like back pain and hypertension. The emotional weight of constant responsibility can lead to burnout, which ultimately affects the quality of care you can provide.</p>
        
        <h2>What Respite Care Looks Like</h2>
        <p>Respite can be a few hours a week, a full day, or even a weekend. It might be provided in your home by a trained carer, at a day centre, or through a short stay in a residential facility. The goal is simple: give you time to rest, run errands, or simply breathe.</p>
        
        <h2>Overcoming the Guilt</h2>
        <p>Many caregivers feel selfish for taking time off. But consider this: taking regular breaks makes you a better, more patient caregiver. It also models healthy self‑care for your children and other family members.</p>
        
        <h2>How to Start</h2>
        <p>Begin with just two hours a week. Use that time to exercise, meet a friend, or read a book. Gradually increase as you become more comfortable. Many families find that after the first respite break, the benefits are so clear they wonder why they waited so long.</p>
        
        <p>Your loved one deserves the best version of you – and that version is well‑rested.</p>
      `,
      img: "https://images.unsplash.com/photo-1507206130111-32fc67c2d502?q=80&w=1600",
      author: "Linda Grey",
      authorTitle: "Family Caregiver Advocate",
      authorImage: "https://randomuser.me/api/portraits/women/23.jpg",
      date: "April 28, 2026",
      readTime: "3 min read",
      category: "Empathy",
    },
    "dementia-at-home": {
      title: "Managing Dementia at Home",
      content: `
        <p>Receiving a dementia diagnosis is life‑changing – for the individual and for the family. Yet many families choose to keep their loved one at home for as long as possible. With the right strategies, home can remain a safe, comforting environment.</p>
        
        <h2>Create a Safe Physical Space</h2>
        <p>Remove tripping hazards (loose rugs, cords). Install grab bars in the bathroom and handrails on stairs. Lock away cleaning supplies and medications. Consider a medical alert system or smart sensors that can notify you of wandering.</p>
        
        <h2>Establish a Routine</h2>
        <p>Consistency reduces anxiety. Set regular times for waking, meals, activities, and bedtime. Use visual cues like a large‑print daily schedule posted on the fridge.</p>
        
        <h2>Communication Tips</h2>
        <p>Speak calmly, use short sentences, and avoid arguing. If your parent repeats a question, answer as if it’s the first time. Redirect rather than correct – for example, if they say they want to go home (and they are already home), say “We’ll go outside for a walk in a few minutes.”</p>
        
        <h2>Engagement and Activity</h2>
        <p>Simple activities like folding laundry, sorting buttons, listening to familiar music, or looking through old photos can bring joy and reduce agitation. Match the activity to their remaining abilities – success builds confidence.</p>
        
        <h2>When to Seek More Help</h2>
        <p>If you notice increased aggression, sundowning (evening confusion), weight loss, or if your own health is suffering, it may be time to consider day programmes, respite care, or a memory care community. You don’t have to do it alone – support groups and professional dementia specialists are invaluable.</p>
      `,
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7535?q=80&w=1600",
      author: "Dr. Patricia Okonkwo",
      authorTitle: "Neurology Specialist",
      authorImage: "https://randomuser.me/api/portraits/women/89.jpg",
      date: "April 20, 2026",
      readTime: "7 min read",
      category: "Specialist",
    },
    "live-in-vs-visiting": {
      title: "Live‑in vs. Visiting Care",
      content: `
        <p>One of the most common decisions families face is choosing between live‑in care (a carer stays in the home) or visiting care (a carer comes for a few hours each day). Both have distinct advantages and trade‑offs. Let’s break them down.</p>
        
        <h2>Visiting Care – The Flexible Option</h2>
        <p>Visiting carers typically come for one to six hours per day, from once a week to seven days. Ideal for: medication prompts, meal preparation, light housekeeping, companionship, or accompanying to appointments.</p>
        <p><strong>Pros:</strong> More affordable (pay only for hours used); flexible schedule; less disruption to your home.</p>
        <p><strong>Cons:</strong> You may need multiple carers to cover seven days; night care requires extra evening visits; not suitable for people who need constant supervision.</p>
        
        <h2>Live‑in Care – Around‑the‑Clock Presence</h2>
        <p>A live‑in carer resides in the home, usually with a dedicated bedroom. They are present throughout the day and night, though they take breaks and sleep (unless night‑waking is needed).</p>
        <p><strong>Pros:</strong> Consistent companionship; immediate response to emergencies; suits people with dementia or those at high risk of falls; reduces family burden.</p>
        <p><strong>Cons:</strong> Higher cost (usually flat daily rate plus room and board); need for a private space for the carer; some families find less privacy.</p>
        
        <h2>Cost Comparison (approximate, 2026)</h2>
        <p>Visiting care: $28–$35 per hour. Live‑in care: $180–$250 per day (equivalent to $7.50–$10 per hour for 24 hours – a far lower hourly rate but a larger total monthly expense).</p>
        
        <h2>Which Is Right for You?</h2>
        <p>Start by tracking how many hours of actual support your loved one needs. Keep a diary for one week. If they are independent most of the day but need help with evening medications and weekend outings, visiting care may be perfect. If they need supervision day and night, or have sundowning behaviours, live‑in care is safer and often more cost‑effective than 12 hours of daily visiting care.</p>
        <p>Many families combine both: a live‑in carer plus a second visiting carer a few days a week to give the live‑in carer a proper day off. Plan for backup coverage.</p>
      `,
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600",
      author: "Michael Adebayo",
      authorTitle: "Care Advisor",
      authorImage: "https://randomuser.me/api/portraits/men/67.jpg",
      date: "April 12, 2026",
      readTime: "5 min read",
      category: "Decision",
    },
    "medicare-explained": {
      title: "What Medicare Covers (and Doesn't)",
      content: `
        <p>Medicare is a lifeline for millions of older Americans, but its rules can be confusing. Here’s a clear guide to what’s covered and what you’ll need to pay out‑of‑pocket – or cover with supplemental insurance.</p>
        
        <h2>Original Medicare (Part A & B)</h2>
        <p><strong>Part A (Hospital Insurance)</strong> covers inpatient hospital stays, skilled nursing facility care (up to 100 days per benefit period), hospice, and some home health. It does NOT cover long‑term custodial care (help with bathing, dressing, eating).</p>
        <p><strong>Part B (Medical Insurance)</strong> covers doctor visits, outpatient care, preventive services, and durable medical equipment (wheelchairs, walkers). You pay 20% of the Medicare‑approved amount after the deductible.</p>
        
        <h2>What Medicare Does NOT Cover</h2>
        <p>Long‑term care (custodial care), most dental care, eye exams for glasses, hearing aids, and private nursing. Also not covered: meals delivered to your home, homemaker services (cleaning, laundry), and any care outside the U.S.</p>
        
        <h2>Medicare Advantage (Part C) and Medigap</h2>
        <p>Medicare Advantage plans are private insurance that often include extra benefits like dental, vision, and some limited home‑care services. Medigap helps pay the 20% coinsurance and deductibles. Neither typically covers long‑term custodial care.</p>
        
        <h2>Planning Ahead</h2>
        <p>If you anticipate needing long‑term care, look into long‑term care insurance (purchase before age 65 for best rates), or consider qualifying for Medicaid (which does cover custodial care once assets are largely depleted). Consult a certified elder law attorney to explore options.</p>
      `,
      img: "https://images.unsplash.com/photo-1582719471137-f09caabf1fa9?q=80&w=1600",
      author: "Robert Ng",
      authorTitle: "Health Policy Analyst",
      authorImage: "https://randomuser.me/api/portraits/men/91.jpg",
      date: "April 5, 2026",
      readTime: "6 min read",
      category: "Finance",
    },
    "loneliness-elderly": {
      title: "Combating Loneliness in the Elderly",
      content: `
        <p>Loneliness is more than an emotional state – it has been linked to increased risk of heart disease, dementia, and premature death. For older adults who live alone or have limited mobility, social isolation can creep in quietly.</p>
        
        <h2>Why It Matters</h2>
        <p>Studies show that chronic loneliness raises cortisol levels, weakens the immune system, and accelerates cognitive decline. In fact, the health impact of loneliness is comparable to smoking 15 cigarettes a day.</p>
        
        <h2>Simple, Connection‑Based Interventions</h2>
        <p>Even small gestures can make a difference: a daily phone call at the same time (consistency builds anticipation), a video call with grandchildren, or a weekly card in the mail. Encourage participation in local senior centres, faith groups, or volunteer opportunities if they are able.</p>
        
        <h2>Technology as a Bridge</h2>
        <p>Tablets pre‑loaded with easy‑to‑use apps (Zoom, WhatsApp, or a digital photo frame that receives photos remotely) can help. Some communities offer free digital literacy classes for seniors. Voice assistants like Alexa can also be set to remind them to call family or to play their favourite music.</p>
        
        <h2>When to Seek Professional Support</h2>
        <p>If your parent shows signs of depression (persistent sadness, loss of interest, sleep changes), talk to their doctor. Geriatric therapists and support groups for seniors are available in many areas. Sometimes a companion carer, just a few hours a week, can provide the social contact that lifts their mood.</p>
      `,
      img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1600",
      author: "Elena Martinez",
      authorTitle: "Geriatric Social Worker",
      authorImage: "https://randomuser.me/api/portraits/women/56.jpg",
      date: "March 28, 2026",
      readTime: "4 min read",
      category: "Wellness",
    },
  };
  return data[slug];
};

const getAllPosts = () => [
  {
    slug: "cost-of-care-2026",
    title: "The Cost of Care: 2026 Breakdown",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
  },
  {
    slug: "signs-parent-needs-help",
    title: "Signs Your Parent Needs Help",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
  },
  {
    slug: "vet-carer-checklist",
    title: "How to Vet a Private Carer",
    img: "https://images.unsplash.com/photo-1581579438707-fd89eedd0709?q=80&w=800",
  },
  {
    slug: "why-respite-care-matters",
    title: "Why Respite Care Matters",
    img: "https://images.unsplash.com/photo-1507206130111-32fc67c2d502?q=80&w=800",
  },
  {
    slug: "dementia-at-home",
    title: "Managing Dementia at Home",
    img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7535?q=80&w=800",
  },
  {
    slug: "live-in-vs-visiting",
    title: "Live‑in vs. Visiting Care",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostData(slug);
  return {
    title: post ? `${post.title} | MeddyCare` : "Not Found",
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostData(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article
      className="min-h-screen bg-white"
      style={{ color: colors.structure.primary }}
    >
      {/* Ultra-minimal navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="MeddyCare" className="h-8 w-auto" />
          </Link>
        </div>
      </div>

      {/* Hero – Vogue full bleed */}
      <header className="relative h-[85vh] w-full flex items-end px-6 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.img}
            alt={post.title}
            fill
            className="object-cover scale-[1.02] transform-gpu"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-4xl text-white">
          <div className="flex gap-4 mb-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>
          <h1
            className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.9] tracking-[-0.02em]"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            {post.title}
          </h1>
        </div>
      </header>

      {/* Article content – editorial column */}
      <main className="max-w-3xl mx-auto px-6 py-24">
        <div className="mb-12">
          <div
            className="text-[#4A4453] text-sm uppercase tracking-wider mb-8 border-l-2 pl-6"
            style={{ borderColor: colors.brand.logoPurple }}
          >
            Published on {post.date} · By {post.author}
          </div>
        </div>

        {/* Rich typography using design tokens */}
        <div
          className="prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#552976] prose-strong:text-[#552976] max-w-none"
          style={{
            fontFamily: typography.fontFamilies.editorial,
            color: colors.structure.primary,
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author bio – elegant */}
        <div className="mt-20 pt-12 border-t border-[#E5E3E0] flex items-center gap-6">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p
              className="text-lg font-semibold"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              {post.author}
            </p>
            <p className="text-sm text-[#4A4453]">{post.authorTitle}</p>
          </div>
        </div>
      </main>

      {/* Related stories – list style */}
      <aside className="max-w-3xl mx-auto px-6 pb-32">
        <h4
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4A4453] mb-8"
          style={{ fontFamily: typography.fontFamilies.body }}
        >
          Continue Reading
        </h4>
        <div className="space-y-4">
          {relatedPosts.map((related) => (
            <Link
              href={`/home/blog/${related.slug}`}
              key={related.slug}
              className="group flex justify-between items-center py-4 border-b border-[#E5E3E0] transition-all hover:pl-4"
            >
              <span
                className="text-lg font-medium tracking-tight transition-colors group-hover:text-[#552976]"
                style={{ fontFamily: typography.fontFamilies.heading }}
              >
                {related.title}
              </span>
              <ArrowRight
                size={18}
                className="opacity-0 group-hover:opacity-100 transition"
                style={{ color: colors.brand.logoPurple }}
              />
            </Link>
          ))}
        </div>
      </aside>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            image: post.img,
            author: { "@type": "Person", name: post.author },
            datePublished: post.date,
          }),
        }}
      />
    </article>
  );
}
