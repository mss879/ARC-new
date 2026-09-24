import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | ARC AI — Cancellations & Refunds",
  description: "ARC AI refund policy — how cancellations and refunds work for our websites, AI agents, automation systems and monthly plans. Refunds are always made to the original payment method.",
  openGraph: {
    title: "Refund Policy | ARC AI",
    description: "How cancellations and refunds work for ARC AI services. Refunds are always made to the original payment method.",
    url: "https://www.arcai.agency/refund-policy",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Refund Policy",
        type: "image/jpeg",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcaiagency",
    title: "Refund Policy | ARC AI",
    description: "How cancellations and refunds work for ARC AI services.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/refund-policy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 py-32 lg:py-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
        <p className="text-white/50 mb-12">Last updated: September 24, 2026</p>

        <div className="space-y-10 text-white/80 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Overview</h2>
            <p>
              Thank you for choosing ARC AI. This Refund Policy explains when and how you can cancel
              a service and receive a refund for payments made to ARC AI (&quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;), including payments made online through our website, payment links and
              invoices. It applies together with our{" "}
              <a href="/terms-of-service" className="text-[#FF4925] hover:underline">
                Terms of Service
              </a>{" "}
              and the proposal or agreement for your project.
            </p>
            <p className="mt-2">
              ARC AI provides digital services — websites and online stores, AI agents, CRM and
              automation systems, digital marketing, hosting and maintenance. We do not sell or ship
              physical goods, so there are no product returns or return shipping.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Refunds Go Back to the Original Payment Method
            </h2>
            <div className="border border-[#FF4925]/40 bg-[#FF4925]/5 rounded-lg p-5">
              <p className="text-white">
                All approved refunds are made to the same payment method that was used to make the
                original payment. If you paid by credit or debit card, the refund is credited back to
                that same card. If you paid by bank transfer, mobile wallet or another online payment
                option, the refund is returned to that same account or wallet.
              </p>
              <p className="mt-2">
                We cannot issue refunds in cash, by cheque, or to a different card, bank account or
                person than the one used for the original payment.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Cancellations and Eligible Refunds</h2>
            <p>You are eligible for a refund in the following cases:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong className="text-white">Cancellation before work starts:</strong> if you cancel
                within 7 days of payment and before we have started work on your project, you will
                receive a full refund.
              </li>
              <li>
                <strong className="text-white">Cancellation after work has started:</strong> you will
                receive a refund of the amount paid minus the value of the work already completed,
                measured against the milestones in your proposal or agreement.
              </li>
              <li>
                <strong className="text-white">Duplicate or incorrect payments:</strong> if you were
                charged twice, or charged more than the amount on your invoice, the extra amount will
                be refunded in full.
              </li>
              <li>
                <strong className="text-white">Service we cannot deliver:</strong> if we are unable to
                deliver a service you have paid for, you will receive a full refund for the part that
                was not delivered.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Monthly Plans and Subscriptions</h2>
            <p>
              Monthly services — such as hosting and maintenance, AI agent plans, CRM plans and
              marketing retainers — can be cancelled at any time by contacting us before your next
              billing date. Cancellation stops future charges; the current month remains active until
              the end of the billing period and is not refunded on a pro-rata basis, unless required
              by law or agreed in writing.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Changes to Your Package</h2>
            <p>
              Instead of a refund, you may ask to move to a different package or change the scope of
              your project. Any payment already made will be credited towards the new package, and
              any difference in price will be invoiced or refunded to the original payment method in
              line with this policy.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Non-Refundable Items</h2>
            <p>The following are not refundable:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Work that has been completed and delivered, or milestones you have approved</li>
              <li>
                Third-party costs paid on your behalf, such as domain names, SSL certificates,
                software licences, paid plugins and advertising spend on platforms like Meta or Google
              </li>
              <li>AI usage (API and token) charges already consumed</li>
              <li>Monthly plan fees for a billing period that has already started</li>
              <li>Custom-built, personalised or already-delivered digital work</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. How to Request a Refund</h2>
            <p>
              To request a cancellation or refund, email{" "}
              <a href="mailto:support@arcai.agency" className="text-[#FF4925] hover:underline">
                support@arcai.agency
              </a>{" "}
              with:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your full name and the business name on the invoice</li>
              <li>The invoice number or payment reference</li>
              <li>The date and amount of the payment</li>
              <li>The reason for the refund request</li>
            </ul>
            <p className="mt-2">
              We will acknowledge your request within 2 business days and let you know whether it has
              been approved.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Refund Processing Time</h2>
            <p>
              Approved refunds are processed within 7 business days of approval and sent to the
              original payment method. Depending on your bank or card issuer, it may take a further
              5–10 business days for the refund to appear on your statement or account.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Refund Policy from time to time. Changes will be posted on this page
              with an updated revision date. The policy in effect on the date of your payment applies
              to that payment.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
            <p>If you have any questions about this Refund Policy, please contact us:</p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:support@arcai.agency" className="text-[#FF4925] hover:underline">
                support@arcai.agency
              </a>
              <br />
              <strong className="text-white">Phone (UK):</strong> +44 7466 368427
              <br />
              <strong className="text-white">Phone (Sri Lanka):</strong> +94 771852522
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
