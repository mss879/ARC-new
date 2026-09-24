import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ARC AI — Usage Terms & Conditions",
  description: "ARC AI terms of service — the terms and conditions governing the use of our website, AI automation, and digital marketing services.",
  openGraph: {
    title: "Terms of Service | ARC AI",
    description: "Read the terms and conditions governing the use of ARC AI website and services.",
    url: "https://www.arcai.agency/terms-of-service",
    siteName: "ARC AI Agency",
    images: [
      {
        url: "https://www.arcai.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARC AI Terms of Service",
        type: "image/jpeg",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arcaiagency",
    title: "Terms of Service | ARC AI",
    description: "Read the terms and conditions governing the use of ARC AI services.",
    images: ["https://www.arcai.agency/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.arcai.agency/terms-of-service",
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

export default function TermsOfServicePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-6 py-32 lg:py-40">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-white/50 mb-12">Last updated: March 12, 2026</p>

        <div className="space-y-10 text-white/80 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the ARC AI website
              (arcai.agency) and any services provided by ARC AI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
              By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Company Information</h2>
            <p>
              ARC AI is a digital agency registered in Sri Lanka (Registration Number: PV00352581)
              with operations in the United Kingdom and Sri Lanka.
            </p>
            <p className="mt-2">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:support@arcai.agency" className="text-[#FF4925] hover:underline">
                support@arcai.agency
              </a>
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Services</h2>
            <p>
              ARC AI provides web design and development, AI automation, branding, digital marketing,
              and related digital services. The specific scope, deliverables, timelines, and pricing
              for each project are agreed upon separately via proposal or contract before work commences.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Use of Our Website</h2>
            <p>You agree to use our website only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to our systems or data</li>
              <li>Transmit any malicious code, spam, or harmful content</li>
              <li>Scrape, crawl, or harvest content without our written consent</li>
              <li>Abuse our AI chat widget or contact form with automated or bulk submissions</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website — including but not limited to text, images, designs, logos,
              code, and videos — is the intellectual property of ARC AI or its licensors and is protected
              by copyright and intellectual property laws.
            </p>
            <p className="mt-2">
              Client work and deliverables are subject to the intellectual property terms outlined in
              individual project agreements.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Payment Terms</h2>
            <p>
              Payment terms are specified in individual project proposals or contracts. Unless otherwise
              agreed:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>A deposit is required before work commences</li>
              <li>Remaining balance is due upon project completion or as per the agreed schedule</li>
              <li>Late payments may incur additional charges</li>
              <li>All prices are exclusive of applicable taxes unless stated otherwise</li>
            </ul>
            <p className="mt-2">
              Cancellations and refunds are covered by our{" "}
              <a href="/refund-policy" className="text-[#FF4925] hover:underline">
                Refund Policy
              </a>
              . Approved refunds are always made to the original payment method.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, ARC AI shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to
              loss of profits, data, or business opportunities, arising from your use of our website
              or services.
            </p>
            <p className="mt-2">
              Our total liability for any claim arising from our services shall not exceed the amount
              paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Warranties and Disclaimers</h2>
            <p>
              Our website and services are provided &quot;as is&quot; without warranties of any kind,
              either express or implied. We do not warrant that our website will be available
              uninterrupted or error-free.
            </p>
            <p className="mt-2">
              While we strive to deliver high-quality work, we do not guarantee specific results
              from our digital marketing or AI automation services, as outcomes depend on many
              external factors.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Termination</h2>
            <p>
              Either party may terminate a service engagement in accordance with the terms specified
              in the project agreement. We reserve the right to suspend or terminate access to our
              website at any time for violation of these Terms.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Sri Lanka.
              For clients based in the United Kingdom, disputes may also be subject to UK jurisdiction
              as agreed in individual contracts.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this
              page with an updated revision date. Continued use of our website following changes
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
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
