import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - SwiftGuard",
  description: "Refund Policy for SwiftGuard security staffing platform",
};

export default function RefundPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl mb-12">
        Refund Policy
      </h1>
      
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <p className="text-sm text-muted-foreground mb-8">Last updated: January 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. General Policy</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            SwiftGuard is committed to providing excellent service. This refund policy outlines the circumstances 
            under which refunds may be provided once our platform launches and payment processing begins.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Waitlist and Pre-Launch</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            Currently, SwiftGuard is in development and no payments are being processed. Joining our waitlist is free, 
            and no refunds are applicable for waitlist membership.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Future Service Refunds</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            Once our platform launches, the following refund terms will apply:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-2">
            <li>Service fees may be refunded if services are not delivered as agreed</li>
            <li>Refunds for cancelled bookings depend on timing and circumstances</li>
            <li>Technical issues resulting in service disruption may qualify for refunds</li>
            <li>Refund requests must be submitted within 30 days of the service date</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Processing Timeframe</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            Approved refunds will be processed within 5-10 business days and returned to the original payment method. 
            The exact timing may depend on your bank or payment provider.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Non-Refundable Items</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            The following items are generally non-refundable:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-2">
            <li>Services that have been completed as agreed</li>
            <li>Late cancellation fees (less than 24 hours notice)</li>
            <li>Administrative or processing fees</li>
            <li>Services cancelled due to user violation of terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Dispute Resolution</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            If you have concerns about our refund decision, you may appeal by contacting our support team. 
            We will review each case individually and work toward a fair resolution.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. How to Request a Refund</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            To request a refund, please contact our support team with:
          </p>
          <ul className="list-disc list-inside text-muted-foreground leading-7 mb-4 space-y-2">
            <li>Your account information and booking details</li>
            <li>Reason for the refund request</li>
            <li>Any supporting documentation</li>
            <li>Preferred refund method (if different from original payment)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p className="text-muted-foreground leading-7 mb-4">
            For refund requests or questions about this policy, please contact us at swiftguardco@gmail.com 
            or through our customer support portal once available.
          </p>
        </section>
      </div>
    </div>
  );
}
