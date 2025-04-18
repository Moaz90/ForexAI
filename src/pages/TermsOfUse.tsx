import React from 'react';

export function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg">
        <div className="px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this platform, you agree to be bound by these Terms of Use and
                all applicable laws and regulations. If you do not agree with any of these terms, you
                are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Trading Risks</h2>
              <p className="mb-4">
                Forex trading involves substantial risk of loss and is not suitable for all investors.
                You acknowledge that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trading foreign exchange carries a high level of risk</li>
                <li>Past performance is not indicative of future results</li>
                <li>You may sustain a loss of some or all of your investment</li>
                <li>You should not invest money that you cannot afford to lose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Obligations</h2>
              <p className="mb-4">
                As a user of this platform, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the platform for any illegal or unauthorized purpose</li>
                <li>Not interfere with the platform's security features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of this platform, including but not limited to
                text, graphics, logos, icons, images, and software, are the exclusive property of our
                company and are protected by international copyright, trademark, and other intellectual
                property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall we be liable for any direct, indirect, incidental, special, or
                consequential damages arising out of or in any way connected with the use of our
                platform, whether based on contract, tort, strict liability, or other legal theory.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Modifications</h2>
              <p>
                We reserve the right to modify or replace these Terms of Use at any time. Your
                continued use of the platform after any such changes constitutes your acceptance of
                the new Terms of Use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of
                the jurisdiction in which our company is registered, without regard to its conflict of
                law provisions.
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Last Updated: March 15, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}