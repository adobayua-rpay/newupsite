import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background px-6 py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-12 inline-block font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-2 font-sans text-4xl font-light tracking-tight text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-12 font-mono text-sm text-foreground/50">Last updated: March 12, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-foreground/80 md:text-base">
          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">1. Introduction</h2>
            <p>
              Panaptico, Inc. (&quot;Panaptico,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website panaptico.com and use our platform and services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong>Personal Information:</strong> Name, email address, company name, job title, and other contact details you provide when signing up, requesting a demo, or contacting us.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website and platform, including IP address, browser type, pages visited, time spent, and referring URLs.</li>
              <li><strong>Technical Data:</strong> Infrastructure configuration data, platform metadata, and operational telemetry processed through the Panaptico platform as part of service delivery.</li>
              <li><strong>Cookies &amp; Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze site usage.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">3. How We Use Your Information</h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>To provide, maintain, and improve our services</li>
              <li>To communicate with you about your account, updates, and support</li>
              <li>To process transactions and send related information</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To monitor and analyze usage trends and improve user experience</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">4. Data Sharing &amp; Disclosure</h2>
            <p className="mb-3">We do not sell your personal information. We may share information with:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform, conducting business, or servicing you (e.g., cloud hosting, analytics, email delivery).</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">7. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at privacy@panaptico.com.</p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2 font-mono text-sm">
              Panaptico, Inc.<br />
              privacy@panaptico.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
