import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SwiftGuard",
  description: "Privacy Policy for SwiftGuard security staffing platform",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl mb-12">
        Privacy Policy
      </h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            We collect information you provide directly to us, such as when you join our waitlist, 
            provide feedback, or contact us. This may include your email address, name, and any other information you choose to provide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Send you updates about SwiftGuard&apos;s launch and features</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, and events</li>
            <li>Process and complete transactions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except as described in this policy. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-2">
            <li>With service providers who assist us in operating our platform</li>
            <li>To comply with legal obligations or protect our rights</li>
            <li>In connection with a merger, sale, or acquisition of our business</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
            over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, 
            unless a longer retention period is required or permitted by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-2">
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to rectify or update your personal information</li>
            <li>The right to erase your personal information</li>
            <li>The right to restrict processing of your personal information</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            We may use cookies and similar tracking technologies to improve your experience on our website. 
            You can control the use of cookies through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            If you have any questions about this Privacy Policy, please contact us at swiftguardco@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
}
