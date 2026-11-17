import { ArrowDown } from "lucide-react";
import Image from "next/image";
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
 *   SystemsIntro     the "What we build" heading block and five tiles that
 *                    jump to the previews
 *   SystemsPreviews  the five systems, each a card with a short explanation
 *                    and a demo drawn in code
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
    <section
      className="relative overflow-hidden px-4 pb-10 pt-20 md:px-8 lg:px-20 lg:pb-14 lg:pt-28"
      aria-labelledby="systems-heading"
    >
      <div className="relative mx-auto max-w-[1400px]">
        {/* The heading takes the full width so each of its two lines stays on
            one row; from 768px its size follows the window so the longer line
            always fits. On a phone it is capped at 1/8.1 of its box (cqw):
            "and the AI inside it" is 7.7 times the font size. */}
        <div className="[container-type:inline-size]">
          <h2
            id="systems-heading"
            className="scroll-mt-28 text-[length:min(3.25rem,100cqw/8.1)] font-medium leading-[1.02] tracking-[-0.04em] text-ink md:text-[length:clamp(3.5rem,7.8vw,7rem)]"
          >
            <span className="block whitespace-nowrap">The system,</span>
            <span className="block whitespace-nowrap text-ember-ink">and the AI inside it</span>
          </h2>
        </div>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-16">
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg lg:col-start-2">
            ARC AI is an AI automation and software company in Colombo. We build the systems a Sri Lankan business
            runs on, and the AI agents and workflow automation that work inside them.
          </p>
        </div>

        {/* The five systems as tiles; each jumps to its preview further down. */}
        <nav aria-label="Systems on this page" className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-5 lg:mt-14 lg:gap-4">
          {SYSTEMS.map((system) => (
            <a
              key={system.id}
              href={`#${system.id}`}
              className="cream-card group flex min-w-0 flex-col gap-3 p-4 last:col-span-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 md:last:col-span-1 lg:gap-4 lg:p-5"
            >
              <Image
                src={`/home-system-icons/${system.id}.webp`}
                alt=""
                width={288}
                height={288}
                unoptimized
                className="mx-auto size-24 max-w-full object-contain drop-shadow-[0_6px_9px_rgba(90,47,24,0.17)] lg:size-32"
              />
              <span className="mt-auto flex min-h-9 items-center justify-between gap-2 text-sm font-medium leading-tight text-ink lg:text-base xl:text-lg">
                {system.label}
                <ArrowDown
                  className="size-4 shrink-0 text-ink-mute group-hover:text-ember-deep motion-safe:transition-transform motion-safe:group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}

export function SystemsPreviews() {
  return (
    <section className="relative px-4 pb-10 pt-16 md:px-8 lg:px-20 lg:pt-24" aria-labelledby="previews-heading">
      <div className="mx-auto max-w-[1400px]">
        <div className="pb-10 lg:pb-14">
          <h2
            id="previews-heading"
            className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-ink md:text-6xl lg:text-7xl"
          >
            Five systems, <span className="text-ember-ink">in motion</span>
          </h2>
        </div>

        <div className="space-y-4 lg:space-y-6">
        <Showcase
          id="ai-agents"
          index="01"
          label="AI agents"
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
          label="Point of sale"
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
          label="ERP and back office"
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
          label="Smart e-commerce"
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
          label="Content Office"
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
      </div>
    </section>
  );
}
