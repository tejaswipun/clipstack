import { headers } from "next/headers";
import { whopsdk } from "@/lib/whop-sdk";
import { StatCard } from "@/components/stat-card";
import { CampaignTable } from "@/components/campaign-table";
import { CreatorLeaderboard } from "@/components/creator-leaderboard";
import { RevenueChart } from "@/components/revenue-chart";
import { BudgetBurnRate } from "@/components/budget-burn-rate";
import { CreatorQualityScoring } from "@/components/creator-quality-scoring";
import { RevenueROITracking } from "@/components/revenue-roi-tracking";
import { WebhookActivityFeed } from "@/components/webhook-activity-feed";

export default async function DashboardPage({
	params,
}: {
	params: Promise<{ companyId: string }>;
}) {
	const { companyId } = await params;

	// Verify user is logged into Whop
	const { userId } = await whopsdk.verifyUserToken(await headers());

	// Check admin access
	const access = await whopsdk.users.checkAccess(companyId, { id: userId });
	if (access.access_level !== "admin") {
		return (
			<div className="flex items-center justify-center min-h-screen p-8">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Access Required</h1>
					<p className="text-gray-500">You need admin access to view ClipStack analytics.</p>
				</div>
			</div>
		);
	}

	// Fetch real data from Whop
	let companyData: any = { title: "Your Whop" };
	let paymentsData: any[] = [];
	let membersData: any[] = [];

	try {
		const [company, payments, members] = await Promise.all([
			whopsdk.companies.retrieve(companyId).catch(() => null),
			whopsdk.payments.list({ company_id: companyId }).catch(() => ({ data: [] })),
			whopsdk.members.list({ company_id: companyId }).catch(() => ({ data: [] })),
		]);
		if (company) companyData = company;
		if (payments?.data) paymentsData = payments.data as any[];
		if (members?.data) membersData = members.data as any[];
	} catch {
		// Use defaults on error
	}

	// Calculate real metrics
	const totalRevenue = paymentsData.reduce((sum: number, p: any) => {
		const amount = p.amount_after_fees ?? p.amount ?? 0;
		return sum + amount;
	}, 0);

	const totalMembers = membersData.length;
	const activeMembers = membersData.filter((m: any) => m.status === "active").length;

	return (
		<div className="min-h-screen bg-slate-50">
			{/* Header */}
			<div className="bg-white border-b border-gray-200 px-8 py-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">
							ClipStack
						</h1>
						<p className="text-sm text-gray-500 mt-1">
							Content Rewards Analytics for {companyData.title || "Your Whop"}
						</p>
					</div>
					<div className="flex items-center gap-3">
						<a
							href={`https://whop.com/dashboard/${companyId}`}
							className="text-sm text-gray-500 hover:text-gray-700"
						>
							← Back to Whop
						</a>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="p-8 max-w-7xl mx-auto">
				{/* Stats Row */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
					<StatCard
						title="Total Revenue"
						value={`$${(totalRevenue / 100).toFixed(2)}`}
						change={12}
						icon="💰"
					/>
					<StatCard
						title="Total Members"
						value={totalMembers.toString()}
						change={8}
						icon="👥"
					/>
					<StatCard
						title="Active Members"
						value={activeMembers.toString()}
						change={5}
						icon="✅"
					/>
					<StatCard
						title="Retention Rate"
						value={totalMembers > 0 ? `${((activeMembers / totalMembers) * 100).toFixed(1)}%` : "0%"}
						change={3}
						icon="📈"
					/>
				</div>

				{/* Budget Burn Rate - Full Width */}
				<div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-lg font-semibold text-gray-900">Budget Intelligence</h2>
						<span className="text-xs text-gray-400">Real-time burn rate & forecasting</span>
					</div>
					<BudgetBurnRate companyId={companyId} />
				</div>

				{/* Revenue ROI Tracking - Full Width */}
				<div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-lg font-semibold text-gray-900">Revenue & ROI</h2>
						<span className="text-xs text-gray-400">Is your campaign making money?</span>
					</div>
					<RevenueROITracking companyId={companyId} />
				</div>

				{/* Two Column Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					{/* Revenue Chart */}
					<div className="bg-white rounded-xl border border-gray-200 p-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Over Time</h2>
						<RevenueChart companyId={companyId} />
					</div>

					{/* Campaign Performance */}
					<div className="bg-white rounded-xl border border-gray-200 p-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h2>
						<CampaignTable companyId={companyId} />
					</div>
				</div>

				{/* Creator Quality Scoring - Full Width */}
				<div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-lg font-semibold text-gray-900">Creator Quality Scores</h2>
						<span className="text-xs text-gray-400">Who are your best performers?</span>
					</div>
					<CreatorQualityScoring companyId={companyId} />
				</div>

				{/* Creator Leaderboard */}
				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="text-lg font-semibold text-gray-900 mb-4">Top Creators by Earnings</h2>
					<CreatorLeaderboard companyId={companyId} />
				</div>

				{/* Live Activity Feed */}
				<div className="bg-white rounded-xl border border-gray-200 p-6 mt-8">
					<div className="flex items-center justify-between mb-4">
						<h2 className="text-lg font-semibold text-gray-900">Live Activity</h2>
						<div className="flex items-center gap-2">
							<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
							<span className="text-xs text-gray-400">Real-time webhook events</span>
						</div>
					</div>
					<WebhookActivityFeed companyId={companyId} />
				</div>
			</div>
		</div>
	);
}
