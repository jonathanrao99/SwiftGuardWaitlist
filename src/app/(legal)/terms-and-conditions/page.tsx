import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - SwiftGuard",
  description: "Terms and Conditions for SwiftGuard security staffing platform",
};

export default function TermsAndConditions() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl mb-12">
        Terms and Conditions
      </h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            By accessing and using SwiftGuard (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            SwiftGuard is a platform that connects businesses with verified security professionals for on-demand security staffing services. 
            The platform is currently in development and this agreement covers your participation in our waitlist and eventual use of the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Waitlist Terms</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            By joining our waitlist, you agree to receive communications about SwiftGuard&apos;s launch, features, and related updates. 
            You may unsubscribe at any time. Waitlist membership does not guarantee future service availability or pricing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            Users are responsible for providing accurate information and maintaining the confidentiality of their account credentials. 
            You agree not to use the service for any unlawful purposes or in any way that could damage, disable, or impair the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
            to understand our practices regarding the collection and use of your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            The Service and its original content, features, and functionality are and will remain the exclusive property of SwiftGuard and its licensors. 
            The Service is protected by copyright, trademark, and other laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            In no event shall SwiftGuard, nor its directors, employees, partners, agents, suppliers, or affiliates, 
            be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
            loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            If you have any questions about these Terms and Conditions, please contact us at swiftguardco@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
}
