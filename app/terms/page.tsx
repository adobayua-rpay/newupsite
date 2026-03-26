import Link from "next/link"

export default function TermsOfUse() {
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
          Terms of Use
        </h1>
        <p className="mb-12 font-mono text-sm text-foreground/50">Last updated: March 12, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-foreground/80 md:text-base">
          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Panaptico website (panaptico.com) and platform (the &quot;Services&quot;), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use our Services. These terms constitute a legally binding agreement between you and Panaptico, Inc. (&quot;Panaptico,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">2. Description of Services</h2>
            <p>
              Panaptico provides an implementation operationalization platform that helps organizations evaluate, implement, and continuously operationalize enterprise technology platforms. Our Services include AI-powered blueprint recommendations, operational templates, live infrastructure scanning, and ongoing implementation tracking.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">3. Account Registration</h2>
            <p className="mb-3">To access certain features, you may need to create an account. You agree to:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your login credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">4. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to any part of the Services or related systems</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
              <li>Use the Services to transmit malicious code, viruses, or harmful content</li>
              <li>Resell, sublicense, or redistribute the Services without written authorization</li>
              <li>Use automated means to scrape, collect, or extract data from the Services</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Services — including but not limited to text, graphics, logos, icons, software, blueprints, templates, and documentation — are the exclusive property of Panaptico, Inc. and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">6. Your Data</h2>
            <p>
              You retain ownership of all data you provide to or process through the Services (&quot;Customer Data&quot;). You grant Panaptico a limited, non-exclusive license to use Customer Data solely for the purpose of providing and improving the Services. We will not access, use, or disclose Customer Data except as necessary to deliver the Services or as required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">7. Service Availability</h2>
            <p>
              We strive to maintain high availability of our Services but do not guarantee uninterrupted or error-free operation. We may modify, suspend, or discontinue any part of the Services at any time with reasonable notice. Scheduled maintenance windows will be communicated in advance when possible.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. PANAPTICO DOES NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR THAT OPERATION WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PANAPTICO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO PANAPTICO IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Panaptico and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys&apos; fees) arising from your use of the Services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">11. Termination</h2>
            <p>
              We may terminate or suspend your access to the Services at any time, with or without cause, upon reasonable notice. Upon termination, your right to use the Services will immediately cease. Provisions that by their nature should survive termination shall survive, including ownership, warranty disclaimers, indemnification, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">13. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated terms on this page and updating the &quot;Last updated&quot; date. Continued use of the Services after changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-sans text-xl font-light text-foreground">14. Contact Us</h2>
            <p>
              If you have questions about these Terms of Use, please contact us at:
            </p>
            <p className="mt-2 font-mono text-sm">
              Panaptico, Inc.<br />
              legal@panaptico.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
