import Showcase from "./showcases/Showcase";
import AgentsMock from "./showcases/AgentsMock";
import PosMock from "./showcases/PosMock";
import ErpMock from "./showcases/ErpMock";
import EcommerceMock from "./showcases/EcommerceMock";
import ContentOfficeMock from "./showcases/ContentOfficeMock";

/**
 * What ARC AI builds, shown rather than described.
 *
 * Two sections, so the page can put "Why us" between them:
 *
 *   SystemsIntro     the "(What we build)" heading block
 *   SystemsPreviews  the five systems, each with a short explanation and a
 *                    demo drawn in code
 *
 * Together they replaced a run of generic agency blocks ("Why choose us", "AI
 * features", a social-media integrations marquee) that said nothing a visitor
 * could picture. The words are server-rendered and carry the terms the page is
 * found for: AI automation, AI agents, chatbots, workflow automation, Sri Lanka.
 */
const SYSTEMS = [
  { id: "ai-agents", label: "AI agents" },
  { id: "point-of-sale", label: "Point of sale" },
  { id: "erp", label: "ERP" },
  { id: "online-stores", label: "Online stores" },
  { id: "content-office", label: "Content Office" },
];

export function SystemsIntro() {
  return (
    <section className="relative bg-black px-6 pb-16 pt-24 lg:px-12 lg:pb-20 lg:pt-32" aria-labelledby="systems-heading">
      <div className="mx-auto max-w-[1400px]">
        {/* The heading takes the full width so each of its two lines stays on
            one row; its size follows the window so the longer line always
            fits. On a phone the second line is allowed to wrap. */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[rgb(119,119,119)]">(WHAT WE BUILD)</p>
          <h2
            id="systems-heading"
            className="mt-4 text-[length:clamp(2.25rem,12.5vw,3rem)] font-black uppercase leading-[0.92] tracking-tight text-white md:text-[length:clamp(3.5rem,8vw,7rem)]"
          >
            <span className="block whitespace-nowrap">The system,</span>
            <span className="block text-[rgb(255,73,37)] md:whitespace-nowrap">and the AI inside it</span>
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              ARC AI is an AI automation and software company in Colombo. We build the systems a Sri Lankan business
              runs on, and the AI agents and workflow automation that work inside them. Further down this page, each
              one is shown as a short preview of the real thing.
            </p>
            <nav aria-label="Systems on this page" className="flex flex-wrap gap-2 lg:justify-end">
              {SYSTEMS.map((system) => (
                <a
                  key={system.id}
                  href={`#${system.id}`}
                  className="whitespace-nowrap rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:border-[rgb(255,73,37)] hover:text-white"
                >
                  {system.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SystemsPreviews() {
  return (
    <section className="relative bg-black px-6 pb-8 pt-16 lg:px-12 lg:pt-24" aria-labelledby="previews-heading">
      <div className="mx-auto max-w-[1400px]">
        <div className="pb-12 lg:pb-16">
          <p className="text-xs font-medium uppercase tracking-wider text-[rgb(119,119,119)]">(SEE IT WORKING)</p>
          <h2
            id="previews-heading"
            className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl"
          >
            Five systems, <span className="text-[rgb(255,73,37)]">in motion</span>
          </h2>
        </div>

        <Showcase
          id="ai-agents"
          index="01"
          label="AI AGENTS"
          title="Agents that answer, book and sell"
          body="AI chatbots and voice agents for WhatsApp, your website and your phone line. They answer in Sinhala, Tamil and English from your own product and price information, and pass the conversation to your team when it needs a person."
          points={[
            "Answers from your catalogue, stock and policies, not guesswork",
            "Takes orders and bookings, then hands them to staff to approve",
            "Chat and voice, day and night",
          ]}
          link={{ href: "/services/ai-chatbots", label: "See AI agents" }}
        >
          <AgentsMock />
        </Showcase>

        <Showcase
          id="point-of-sale"
          index="02"
          label="POINT OF SALE"
          title="A till that keeps selling"
          body="Point of sale built for Sri Lankan shops: checkout, stock, credit customers and shifts on one screen, in English, Sinhala and Tamil. It carries on when the internet drops and syncs when the connection is back."
          points={[
            "Barcode, cash, card and LankaQR at the counter",
            "Works offline, then syncs on its own",
            "Takings and stock on the owner's phone",
          ]}
          link={{ href: "/contact", label: "Ask about point of sale" }}
          flip
        >
          <PosMock />
        </Showcase>

        <Showcase
          id="erp"
          index="03"
          label="ERP AND BACK OFFICE"
          title="The whole business on one screen"
          body="Custom ERP systems that join up sales, stock, purchasing, finance, HR and service jobs, with roles and approvals that follow how your company actually works."
          points={[
            "Live figures for income, cash, receivables and stock",
            "Approvals, an audit trail and month-end close built in",
            "An AI assistant that points out what needs attention",
          ]}
          link={{ href: "/contact", label: "Ask about ERP" }}
        >
          <ErpMock />
        </Showcase>

        <Showcase
          id="online-stores"
          index="04"
          label="SMART E-COMMERCE"
          title="Stores that follow the order through"
          body="Online stores with fast checkout, cash on delivery and card payments, where stock, orders and customer updates stay in step from the first click to the doorstep."
          points={[
            "Checkout made for Sri Lankan buyers, with guest checkout and cash on delivery",
            "Order tracking and delivery updates for the customer",
            "An admin panel your team can run without a developer",
          ]}
          link={{ href: "/services/web-design-development", label: "See smart websites" }}
          flip
        >
          <EcommerceMock />
        </Showcase>

        <Showcase
          id="content-office"
          index="05"
          label="CONTENT OFFICE"
          title="Your own AI content team"
          body="Brief it in one sentence. A team of AI agents researches, writes, designs and checks every post, shows it to you for approval, then publishes to Instagram and Facebook."
          points={[
            "Plans up to a month of posts around your calendar and local holidays",
            "Nothing is published until you approve it",
            "You pay for what it uses, not a monthly agency retainer",
          ]}
          link={{ href: "/contact", label: "Ask about Content Office" }}
        >
          <ContentOfficeMock />
        </Showcase>
      </div>
    </section>
  );
}
