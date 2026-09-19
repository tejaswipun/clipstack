export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-white">
			<div className="max-w-3xl mx-auto px-4 py-16">
				<h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
				<p className="text-sm text-gray-500 mb-8">Last updated: September 19, 2026</p>

				<div className="prose prose-gray max-w-none space-y-6">
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
						<p className="text-gray-600">
							ClipStack (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a Whop app that provides analytics for Content Rewards campaigns. This Privacy Policy explains how we collect, use, and protect your information when you use our application.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
						<p className="text-gray-600 mb-3">When you install and use ClipStack, we access the following data from your Whop account:</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li><strong>Account Information:</strong> Your Whop user ID, name, and email address for authentication.</li>
							<li><strong>Company Data:</strong> Your Whop account/company details for displaying analytics.</li>
							<li><strong>Payment Data:</strong> Transaction history and payment records for revenue analytics.</li>
							<li><strong>Member Data:</strong> Member lists and membership status for engagement tracking.</li>
							<li><strong>Product Data:</strong> Product listings and pricing for campaign correlation.</li>
						</ul>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Data</h2>
						<p className="text-gray-600 mb-3">We use the collected data solely to:</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Provide analytics and insights about your Content Rewards campaigns.</li>
							<li>Display performance metrics, creator rankings, and budget tracking.</li>
							<li>Generate reports and CSV exports you request.</li>
							<li>Improve the ClipStack application and user experience.</li>
						</ul>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Storage & Security</h2>
						<p className="text-gray-600">
							ClipStack operates as a server-side application. We do not store your Whop data in external databases. All analytics are computed in real-time from the Whop API and served to your browser. We use industry-standard encryption for all data in transit.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Sharing</h2>
						<p className="text-gray-600">
							We do not sell, trade, or share your data with third parties. Your data is only accessible to you through the ClipStack dashboard. We do not access your data except as needed to provide the analytics service.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
						<p className="text-gray-600">
							We do not retain your data beyond the current session. All analytics are computed live from the Whop API. If you uninstall ClipStack, we immediately lose access to your data.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h2>
						<p className="text-gray-600 mb-3">You have the right to:</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Revoke ClipStack&apos;s access to your Whop account at any time via Whop Settings → Authorized Apps.</li>
							<li>Request information about what data we access.</li>
							<li>Request deletion of any stored data (though we store minimal data).</li>
						</ul>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">8. Children&apos;s Privacy</h2>
						<p className="text-gray-600">
							ClipStack is not intended for use by children under 13. We do not knowingly collect data from children.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
						<p className="text-gray-600">
							We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
						<p className="text-gray-600">
							If you have questions about this Privacy Policy, please contact us at support@clipstack.app or through the Whop app support channel.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
