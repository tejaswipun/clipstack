"use client";

import { useEffect, useState } from "react";

interface ROIData {
	totalSpend: number;
	totalViews: number;
	estimatedReach: number;
	estimatedRevenue: number;
	cpm: number;
	costPerView: number;
	roi: number;
	roiTrend: "positive" | "negative" | "break_even";
	industryBenchmark: {
		avgCpm: number;
		yourRanking: number; // percentile
	};
}

interface RevenueROITrackingProps {
	companyId: string;
}

export function RevenueROITracking({ companyId }: RevenueROITrackingProps) {
	const [data, setData] = useState<ROIData | null>(null);
	const [loading, setLoading] = useState(true);
	const [view, setView] = useState<"overview" | "breakdown" | "comparison">("overview");

	useEffect(() => {
		// In production, this would calculate from real Stats API data
		const totalSpend = 650000; // $6,500 in cents
		const totalViews = 520000;
		const estimatedReach = totalViews * 2.5; // Each view reaches ~2.5 people
		const estimatedRevenue = totalSpend * 3.2; // Assume 3.2x ROI
		const cpm = (totalSpend / totalViews) * 10; // CPM in dollars
		const costPerView = totalSpend / totalViews;
		const roi = ((estimatedRevenue - totalSpend) / totalSpend) * 100;

		setData({
			totalSpend,
			totalViews,
			estimatedReach,
			estimatedRevenue,
			cpm,
			costPerView,
			roi,
			roiTrend: roi > 0 ? "positive" : roi < 0 ? "negative" : "break_even",
			industryBenchmark: {
				avgCpm: 1.25,
				yourRanking: 72,
			},
		});
		setLoading(false);
	}, [companyId]);

	const formatCents = (cents: number) => `$${(cents / 100).toFixed(2)}`;
	const formatNumber = (num: number) => {
		if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
		if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
		return num.toString();
	};

	if (loading) {
		return (
			<div className="text-center py-8 text-gray-400">Loading ROI data...</div>
		);
	}

	if (!data) return null;

	return (
		<div className="space-y-6">
			{/* View Tabs */}
			<div className="flex gap-2">
				{(["overview", "breakdown", "comparison"] as const).map((v) => (
					<button
						key={v}
						onClick={() => setView(v)}
						className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors capitalize ${
							view === v
								? "bg-indigo-100 text-indigo-700"
								: "text-gray-500 hover:bg-gray-100"
						}`}
					>
						{v}
					</button>
				))}
			</div>

			{view === "overview" && (
				<>
					{/* ROI Score */}
					<div className="text-center py-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
						<div className="text-sm text-gray-500 mb-2">Return on Investment</div>
						<div className={`text-5xl font-bold ${
							data.roiTrend === "positive"
								? "text-emerald-600"
								: data.roiTrend === "negative"
								? "text-red-600"
								: "text-gray-600"
						}`}>
							{data.roi > 0 ? "+" : ""}{data.roi.toFixed(1)}%
						</div>
						<div className="text-sm text-gray-400 mt-2">
							For every $1 spent, you earn ${data.roi > 0 ? (1 + data.roi / 100).toFixed(2) : "0.00"}
						</div>
					</div>

					{/* Key Metrics */}
					<div className="grid grid-cols-2 gap-4">
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="text-xs text-gray-400 mb-1">Total Spend</div>
							<div className="text-lg font-bold text-gray-900">{formatCents(data.totalSpend)}</div>
						</div>
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="text-xs text-gray-400 mb-1">Est. Revenue Generated</div>
							<div className="text-lg font-bold text-emerald-600">{formatCents(data.estimatedRevenue)}</div>
						</div>
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="text-xs text-gray-400 mb-1">Total Views</div>
							<div className="text-lg font-bold text-gray-900">{formatNumber(data.totalViews)}</div>
						</div>
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="text-xs text-gray-400 mb-1">Est. Reach</div>
							<div className="text-lg font-bold text-gray-900">{formatNumber(data.estimatedReach)}</div>
						</div>
					</div>

					{/* CPM Analysis */}
					<div className="border border-gray-100 rounded-xl p-4">
						<div className="flex items-center justify-between mb-3">
							<div className="text-sm font-medium text-gray-700">CPM Analysis</div>
							<div className="text-xs text-gray-400">Your ranking: {data.industryBenchmark.yourRanking}th percentile</div>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex-1">
								<div className="text-xs text-gray-400 mb-1">Your CPM</div>
								<div className="text-xl font-bold text-gray-900">${data.cpm.toFixed(2)}</div>
							</div>
							<div className="text-gray-300">vs</div>
							<div className="flex-1">
								<div className="text-xs text-gray-400 mb-1">Industry Avg</div>
								<div className="text-xl font-bold text-gray-600">${data.industryBenchmark.avgCpm.toFixed(2)}</div>
							</div>
						</div>
						<div className="mt-3 w-full bg-gray-100 rounded-full h-2">
							<div
								className={`h-2 rounded-full ${
									data.cpm < data.industryBenchmark.avgCpm ? "bg-emerald-500" : "bg-amber-500"
								}`}
								style={{ width: `${Math.min((data.cpm / data.industryBenchmark.avgCpm) * 50, 100)}%` }}
							/>
						</div>
						<div className="text-xs text-gray-400 mt-1">
							{data.cpm < data.industryBenchmark.avgCpm
								? `You're paying $${(data.industryBenchmark.avgCpm - data.cpm).toFixed(2)} less than average`
								: `You're paying $${(data.cpm - data.industryBenchmark.avgCpm).toFixed(2)} more than average`}
						</div>
					</div>
				</>
			)}

			{view === "breakdown" && (
				<div className="space-y-4">
					<h3 className="text-sm font-medium text-gray-700">Revenue Breakdown by Platform</h3>
					{[
						{ platform: "TikTok", views: 312000, spend: 390000, revenue: 1248000 },
						{ platform: "YouTube Shorts", views: 145000, spend: 181250, revenue: 580000 },
						{ platform: "Instagram Reels", views: 48000, spend: 60000, revenue: 192000 },
						{ platform: "X (Twitter)", views: 15000, spend: 18750, revenue: 60000 },
					].map((item) => (
						<div key={item.platform} className="border border-gray-100 rounded-lg p-4">
							<div className="flex items-center justify-between mb-2">
								<div className="font-medium text-gray-900">{item.platform}</div>
								<div className="text-sm text-gray-500">
									{((item.views / data.totalViews) * 100).toFixed(1)}% of views
								</div>
							</div>
							<div className="grid grid-cols-3 gap-4 text-sm">
								<div>
									<div className="text-xs text-gray-400">Views</div>
									<div className="font-medium">{formatNumber(item.views)}</div>
								</div>
								<div>
									<div className="text-xs text-gray-400">Spend</div>
									<div className="font-medium">{formatCents(item.spend)}</div>
								</div>
								<div>
									<div className="text-xs text-gray-400">Est. Revenue</div>
									<div className="font-medium text-emerald-600">{formatCents(item.revenue)}</div>
								</div>
							</div>
							<div className="mt-2 w-full bg-gray-100 rounded-full h-1.5">
								<div
									className="h-1.5 rounded-full bg-indigo-500"
									style={{ width: `${(item.views / data.totalViews) * 100}%` }}
								/>
							</div>
						</div>
					))}
				</div>
			)}

			{view === "comparison" && (
				<div className="space-y-4">
					<h3 className="text-sm font-medium text-gray-700">Content Rewards vs Other Channels</h3>
					{[
						{ channel: "Content Rewards", spend: 650000, reach: 1300000, cpa: 0.50, roi: 320 },
						{ channel: "Meta Ads", spend: 650000, reach: 520000, cpa: 2.50, roi: 80 },
						{ channel: "Google Ads", spend: 650000, reach: 390000, cpa: 3.20, roi: 60 },
						{ channel: "Influencer Deals", spend: 650000, reach: 260000, cpa: 4.80, roi: 40 },
					].map((item) => (
						<div key={item.channel} className={`border rounded-lg p-4 ${
							item.channel === "Content Rewards"
								? "border-indigo-200 bg-indigo-50"
								: "border-gray-100"
						}`}>
							<div className="flex items-center justify-between mb-2">
								<div className="font-medium text-gray-900">{item.channel}</div>
								{item.channel === "Content Rewards" && (
									<span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-medium">
										You
									</span>
								)}
							</div>
							<div className="grid grid-cols-4 gap-4 text-sm">
								<div>
									<div className="text-xs text-gray-400">Reach</div>
									<div className="font-medium">{formatNumber(item.reach)}</div>
								</div>
								<div>
									<div className="text-xs text-gray-400">CPA</div>
									<div className="font-medium">${item.cpa.toFixed(2)}</div>
								</div>
								<div>
									<div className="text-xs text-gray-400">ROI</div>
									<div className={`font-medium ${item.roi > 100 ? "text-emerald-600" : "text-gray-600"}`}>
										{item.roi}%
									</div>
								</div>
								<div>
									<div className="text-xs text-gray-400">Efficiency</div>
									<div className="font-medium">
										{item.channel === "Content Rewards" ? "🏆 Best" : `${(320 / item.roi).toFixed(1)}x worse`}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
