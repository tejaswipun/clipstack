"use client";

import { useEffect, useState } from "react";

interface RevenueChartProps {
	companyId: string;
}

interface DailyRevenue {
	date: string;
	revenue: number;
	views: number;
}

export function RevenueChart({ companyId }: RevenueChartProps) {
	const [data, setData] = useState<DailyRevenue[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// In production, this would fetch from Whop Stats API
		const last30Days = Array.from({ length: 30 }, (_, i) => {
			const date = new Date();
			date.setDate(date.getDate() - (29 - i));
			return {
				date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
				revenue: Math.floor(Math.random() * 50000) + 10000,
				views: Math.floor(Math.random() * 50000) + 5000,
			};
		});
		setData(last30Days);
		setLoading(false);
	}, [companyId]);

	const maxRevenue = Math.max(...data.map((d) => d.revenue));
	const formatCents = (cents: number) => `$${(cents / 100).toFixed(0)}`;

	if (loading) {
		return (
			<div className="text-center py-8 text-gray-400">Loading chart...</div>
		);
	}

	return (
		<div className="space-y-4">
			{/* Chart */}
			<div className="flex items-end gap-1 h-48">
				{data.map((d, i) => (
					<div
						key={i}
						className="flex-1 flex flex-col items-center gap-1 group"
					>
						<div
							className="w-full bg-indigo-500 rounded-t hover:bg-indigo-600 transition-colors cursor-pointer relative"
							style={{
								height: `${(d.revenue / maxRevenue) * 100}%`,
								minHeight: "4px",
							}}
						>
							<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
								{formatCents(d.revenue)}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* X-axis labels */}
			<div className="flex justify-between text-xs text-gray-400">
				<span>{data[0]?.date}</span>
				<span>{data[Math.floor(data.length / 2)]?.date}</span>
				<span>{data[data.length - 1]?.date}</span>
			</div>

			{/* Summary */}
			<div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
				<div className="text-center">
					<div className="text-sm text-gray-500">Total Revenue</div>
					<div className="font-semibold text-gray-900">
						{formatCents(data.reduce((sum, d) => sum + d.revenue, 0))}
					</div>
				</div>
				<div className="text-center">
					<div className="text-sm text-gray-500">Daily Average</div>
					<div className="font-semibold text-gray-900">
						{formatCents(
							data.reduce((sum, d) => sum + d.revenue, 0) / data.length
						)}
					</div>
				</div>
				<div className="text-center">
					<div className="text-sm text-gray-500">Total Views</div>
					<div className="font-semibold text-gray-900">
						{(data.reduce((sum, d) => sum + d.views, 0) / 1000).toFixed(0)}K
					</div>
				</div>
			</div>
		</div>
	);
}
