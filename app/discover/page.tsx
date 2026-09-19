export default function DiscoverPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
			<div className="max-w-4xl mx-auto px-4 py-16">
				{/* Hero */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
						<span>📊</span>
						<span>Content Rewards Analytics</span>
					</div>
					<h1 className="text-5xl font-bold text-gray-900 mb-6">
						Stop Guessing.<br />Start Optimizing.
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
						Track campaign ROI, creator performance, and budget analytics for your Whop Content Rewards campaigns. See exactly which clips drive revenue.
					</p>
					<div className="flex justify-center gap-4">
						<a
							href="https://whop.com/apps/clipstack/install"
							className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
						>
							Install Free
						</a>
					<a
						href="https://docs.whop.com/apps"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-lg border border-gray-200 transition-colors"
					>
						Learn More
					</a>
					</div>
				</div>

				{/* Pain Points */}
				<div className="bg-white rounded-2xl p-8 shadow-md mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
						The Problem with Content Rewards
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="flex gap-3">
							<span className="text-red-500 text-xl">❌</span>
							<div>
								<h3 className="font-semibold text-gray-900">No Cross-Campaign View</h3>
								<p className="text-sm text-gray-600">You can&apos;t compare performance across campaigns without spreadsheets.</p>
							</div>
						</div>
						<div className="flex gap-3">
							<span className="text-red-500 text-xl">❌</span>
							<div>
								<h3 className="font-semibold text-gray-900">Wasted Ad Spend</h3>
								<p className="text-sm text-gray-600">You don&apos;t know which creators drive real views vs. bot traffic.</p>
							</div>
						</div>
						<div className="flex gap-3">
							<span className="text-red-500 text-xl">❌</span>
							<div>
								<h3 className="font-semibold text-gray-900">Budget Blindness</h3>
								<p className="text-sm text-gray-600">No forecasting on when campaigns will run out of budget.</p>
							</div>
						</div>
						<div className="flex gap-3">
							<span className="text-red-500 text-xl">❌</span>
							<div>
								<h3 className="font-semibold text-gray-900">Manual Reporting</h3>
								<p className="text-sm text-gray-600">Hours spent building reports that are outdated by the time they&apos;re done.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Features */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
						What ClipStack Gives You
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="bg-white rounded-xl p-6 shadow-md">
							<div className="text-3xl mb-3">📈</div>
							<h3 className="font-semibold text-gray-900 mb-2">Campaign ROI</h3>
							<p className="text-sm text-gray-600">See spend vs. verified views vs. estimated reach value. Know your true CPM.</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-md">
							<div className="text-3xl mb-3">🏆</div>
							<h3 className="font-semibold text-gray-900 mb-2">Creator Rankings</h3>
							<p className="text-sm text-gray-600">Identify top performers by views, earnings, and consistency. Double down on what works.</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-md">
							<div className="text-3xl mb-3">💸</div>
							<h3 className="font-semibold text-gray-900 mb-2">Budget Forecasting</h3>
							<p className="text-sm text-gray-600">See burn rate in real-time. Know exactly when campaigns will run out.</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-md">
							<div className="text-3xl mb-3">🔍</div>
							<h3 className="font-semibold text-gray-900 mb-2">Fraud Detection</h3>
							<p className="text-sm text-gray-600">Spot bot-driven views and suspicious activity before they waste your budget.</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-md">
							<div className="text-3xl mb-3">📊</div>
							<h3 className="font-semibold text-gray-900 mb-2">Platform Breakdown</h3>
							<p className="text-sm text-gray-600">TikTok vs. YouTube Shorts vs. Instagram Reels. See where your clips perform best.</p>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-md">
							<div className="text-3xl mb-3">📥</div>
							<h3 className="font-semibold text-gray-900 mb-2">CSV Export</h3>
							<p className="text-sm text-gray-600">One-click export to share with your team or import into your own tools.</p>
						</div>
					</div>
				</div>

				{/* Social Proof */}
				<div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-12">
					<h2 className="text-2xl font-bold mb-4">Built for Creators Who Mean Business</h2>
					<p className="text-indigo-100 max-w-xl mx-auto mb-6">
						Join creators who are already using data to make smarter decisions about their Content Rewards campaigns.
					</p>
					<div className="grid grid-cols-3 gap-8">
						<div>
							<div className="text-3xl font-bold">$40K+</div>
							<div className="text-indigo-200 text-sm">Daily payouts tracked</div>
						</div>
						<div>
							<div className="text-3xl font-bold">1M+</div>
							<div className="text-indigo-200 text-sm">Videos analyzed</div>
						</div>
						<div>
							<div className="text-3xl font-bold">110K+</div>
							<div className="text-indigo-200 text-sm">Creators on Whop</div>
						</div>
					</div>
				</div>

				{/* Pricing */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
						Simple Pricing
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="bg-white rounded-xl p-6 shadow-md border-2 border-transparent">
							<h3 className="font-bold text-gray-900 mb-1">Starter</h3>
							<div className="text-3xl font-bold text-gray-900 mb-4">Free</div>
							<ul className="space-y-2 text-sm text-gray-600 mb-6">
								<li>✓ 1 campaign</li>
								<li>✓ Basic stats</li>
								<li>✓ 7-day history</li>
							</ul>
							<a
								href="https://whop.com/apps/clipstack/install"
								className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors"
							>
								Get Started
							</a>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-md border-2 border-indigo-500 relative">
							<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
								POPULAR
							</div>
							<h3 className="font-bold text-gray-900 mb-1">Pro</h3>
							<div className="text-3xl font-bold text-gray-900 mb-4">$49<span className="text-base font-normal text-gray-500">/mo</span></div>
							<ul className="space-y-2 text-sm text-gray-600 mb-6">
								<li>✓ Unlimited campaigns</li>
								<li>✓ Creator rankings</li>
								<li>✓ Budget forecasting</li>
								<li>✓ 90-day history</li>
								<li>✓ CSV export</li>
							</ul>
							<a
								href="https://whop.com/apps/clipstack/install"
								className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
							>
								Install Now
							</a>
						</div>
						<div className="bg-white rounded-xl p-6 shadow-md border-2 border-transparent">
							<h3 className="font-bold text-gray-900 mb-1">Agency</h3>
							<div className="text-3xl font-bold text-gray-900 mb-4">$149<span className="text-base font-normal text-gray-500">/mo</span></div>
							<ul className="space-y-2 text-sm text-gray-600 mb-6">
								<li>✓ Everything in Pro</li>
								<li>✓ Multi-brand management</li>
								<li>✓ White-label reports</li>
								<li>✓ API access</li>
								<li>✓ Team seats</li>
							</ul>
							<a
								href="https://whop.com/apps/clipstack/install"
								className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-colors"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>

				{/* CTA */}
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Ready to Optimize Your Content Rewards?
					</h2>
					<p className="text-gray-600 mb-6">
						Install ClipStack in 30 seconds. No credit card required.
					</p>
					<a
						href="https://whop.com/apps/clipstack/install"
						className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
					>
						Install ClipStack Free
					</a>
				</div>
			</div>
		</div>
	);
}
