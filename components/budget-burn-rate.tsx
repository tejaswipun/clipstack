"use client";

import { useEffect, useState } from "react";

interface BudgetData {
	totalBudget: number;
	spent: number;
	dailyBurnRate: number;
	projectedEndDate: string;
	daysRemaining: number;
	burnVelocity: "accelerating" | "steady" | "decelerating";
	alertLevel: "safe" | "warning" | "critical";
}

interface BudgetBurnRateProps {
	companyId: string;
}

export function BudgetBurnRate({ companyId }: BudgetBurnRateProps) {
	const [data, setData] = useState<BudgetData | null>(null);
	const [loading, setLoading] = useState(true);
	const [timeframe, setTimeframe] = useState<"7d" | "30d" | "90d">("30d");

	useEffect(() => {
		// In production, this would calculate from real payment data
		// For now, simulate realistic budget data
		const totalBudget = 1000000; // $10,000 in cents
		const spent = 650000; // $6,500 spent
		const dailyBurnRate = 25000; // $250/day
		const remaining = totalBudget - spent;
		const daysRemaining = Math.floor(remaining / dailyBurnRate);

		const endDate = new Date();
		endDate.setDate(endDate.getDate() + daysRemaining);

		setData({
			totalBudget,
			spent,
			dailyBurnRate,
			projectedEndDate: endDate.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric",
			}),
			daysRemaining,
			burnVelocity: "steady",
			alertLevel: daysRemaining < 7 ? "critical" : daysRemaining < 14 ? "warning" : "safe",
		});
		setLoading(false);
	}, [companyId, timeframe]);

	const formatCents = (cents: number) => `$${(cents / 100).toFixed(0)}`;
	const percentage = data ? (data.spent / data.totalBudget) * 100 : 0;

	if (loading) {
		return (
			<div className="text-center py-8 text-gray-400">Loading budget data...</div>
		);
	}

	if (!data) return null;

	return (
		<div className="space-y-6">
			{/* Timeframe Selector */}
			<div className="flex gap-2">
				{(["7d", "30d", "90d"] as const).map((tf) => (
					<button
						key={tf}
						onClick={() => setTimeframe(tf)}
						className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
							timeframe === tf
								? "bg-indigo-100 text-indigo-700"
								: "text-gray-500 hover:bg-gray-100"
						}`}
					>
						{tf === "7d" ? "7 Days" : tf === "30d" ? "30 Days" : "90 Days"}
					</button>
				))}
			</div>

			{/* Budget Progress Bar */}
			<div>
				<div className="flex justify-between text-sm mb-2">
					<span className="text-gray-600">Budget Used</span>
					<span className="font-medium text-gray-900">{percentage.toFixed(1)}%</span>
				</div>
				<div className="w-full bg-gray-100 rounded-full h-3">
					<div
						className={`h-3 rounded-full transition-all ${
							percentage > 80
								? "bg-red-500"
								: percentage > 60
								? "bg-amber-500"
								: "bg-emerald-500"
						}`}
						style={{ width: `${Math.min(percentage, 100)}%` }}
					/>
				</div>
				<div className="flex justify-between text-xs text-gray-400 mt-1">
					<span>{formatCents(data.spent)} spent</span>
					<span>{formatCents(data.totalBudget)} total</span>
				</div>
			</div>

			{/* Key Metrics */}
			<div className="grid grid-cols-2 gap-4">
				<div className="bg-gray-50 rounded-lg p-4">
					<div className="text-sm text-gray-500 mb-1">Daily Burn Rate</div>
					<div className="text-xl font-bold text-gray-900">
						{formatCents(data.dailyBurnRate)}/day
					</div>
					<div className="text-xs text-gray-400 mt-1">Average over last 30 days</div>
				</div>
				<div className="bg-gray-50 rounded-lg p-4">
					<div className="text-sm text-gray-500 mb-1">Days Remaining</div>
					<div className={`text-xl font-bold ${
						data.alertLevel === "critical"
							? "text-red-600"
							: data.alertLevel === "warning"
							? "text-amber-600"
							: "text-emerald-600"
					}`}>
						{data.daysRemaining} days
					</div>
					<div className="text-xs text-gray-400 mt-1">Until budget exhausted</div>
				</div>
			</div>

			{/* Projection Alert */}
			<div className={`rounded-lg p-4 ${
				data.alertLevel === "critical"
					? "bg-red-50 border border-red-200"
					: data.alertLevel === "warning"
					? "bg-amber-50 border border-amber-200"
					: "bg-emerald-50 border border-emerald-200"
			}`}>
				<div className="flex items-start gap-3">
					<span className="text-xl">
						{data.alertLevel === "critical" ? "🚨" : data.alertLevel === "warning" ? "⚠️" : "✅"}
					</span>
					<div>
						<div className={`font-medium ${
							data.alertLevel === "critical"
								? "text-red-800"
								: data.alertLevel === "warning"
								? "text-amber-800"
								: "text-emerald-800"
						}`}>
							{data.alertLevel === "critical"
								? "Budget Critical"
								: data.alertLevel === "warning"
								? "Budget Warning"
								: "Budget On Track"}
						</div>
						<div className={`text-sm mt-1 ${
							data.alertLevel === "critical"
								? "text-red-700"
								: data.alertLevel === "warning"
								? "text-amber-700"
								: "text-emerald-700"
						}`}>
							{data.alertLevel === "critical"
								? `Your budget will run out in ${data.daysRemaining} days. Consider increasing budget or reducing CPM.`
								: data.alertLevel === "warning"
								? `Budget projected to last until ${data.projectedEndDate}. Monitor closely.`
								: `Budget is on track. Projected end date: ${data.projectedEndDate}.`}
						</div>
					</div>
				</div>
			</div>

			{/* Burn Velocity */}
			<div className="flex items-center justify-between text-sm">
				<span className="text-gray-500">Burn Velocity</span>
				<span className={`font-medium ${
					data.burnVelocity === "accelerating"
						? "text-red-600"
						: data.burnVelocity === "decelerating"
						? "text-emerald-600"
						: "text-gray-600"
				}`}>
					{data.burnVelocity === "accelerating"
						? "📈 Accelerating"
						: data.burnVelocity === "decelerating"
						? "📉 Decelerating"
						: "➡️ Steady"}
				</span>
			</div>

			{/* Recommendations */}
			<div className="border-t border-gray-100 pt-4">
				<div className="text-sm font-medium text-gray-700 mb-2">Quick Actions</div>
				<div className="space-y-2">
					<button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
						📊 View detailed burn breakdown
					</button>
					<button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
						⚡ Adjust CPM rate
					</button>
					<button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
						⏸️ Pause campaign
					</button>
				</div>
			</div>
		</div>
	);
}
