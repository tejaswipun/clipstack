"use client";

import { useEffect, useState } from "react";

interface Campaign {
	id: string;
	name: string;
	status: string;
	budget: number;
	spent: number;
	views: number;
	creators: number;
}

interface CampaignTableProps {
	companyId: string;
}

export function CampaignTable({ companyId }: CampaignTableProps) {
	const [campaigns, setCampaigns] = useState<Campaign[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// In production, this would fetch from Whop API
		// For now, show placeholder data
		setCampaigns([
			{
				id: "camp_1",
				name: "Summer Sale Campaign",
				status: "active",
				budget: 500000,
				spent: 320000,
				views: 245000,
				creators: 89,
			},
			{
				id: "camp_2",
				name: "Product Launch 2026",
				status: "active",
				budget: 1000000,
				spent: 450000,
				views: 380000,
				creators: 156,
			},
			{
				id: "camp_3",
				name: "Black Friday Promo",
				status: "completed",
				budget: 750000,
				spent: 750000,
				views: 520000,
				creators: 203,
			},
			{
				id: "camp_4",
				name: "Holiday Bundle",
				status: "paused",
				budget: 300000,
				spent: 180000,
				views: 125000,
				creators: 67,
			},
		]);
		setLoading(false);
	}, [companyId]);

	const formatCents = (cents: number) => `$${(cents / 100).toFixed(2)}`;
	const formatNumber = (num: number) => {
		if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
		if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
		return num.toString();
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case "active":
				return "bg-emerald-100 text-emerald-700";
			case "completed":
				return "bg-blue-100 text-blue-700";
			case "paused":
				return "bg-amber-100 text-amber-700";
			default:
				return "bg-gray-100 text-gray-700";
		}
	};

	if (loading) {
		return (
			<div className="text-center py-8 text-gray-400">Loading campaigns...</div>
		);
	}

	return (
		<div className="overflow-x-auto">
			<table className="w-full">
				<thead>
					<tr className="border-b border-gray-100">
						<th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Campaign</th>
						<th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
						<th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Budget</th>
						<th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Spent</th>
						<th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Views</th>
						<th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Creators</th>
						<th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Burn Rate</th>
					</tr>
				</thead>
				<tbody>
					{campaigns.map((campaign) => {
						const burnRate = campaign.budget > 0
							? ((campaign.spent / campaign.budget) * 100).toFixed(1)
							: "0";
						const cpm = campaign.views > 0
							? ((campaign.spent / campaign.views) * 10).toFixed(2)
							: "0";

						return (
							<tr key={campaign.id} className="border-b border-gray-50 hover:bg-gray-50">
								<td className="py-4 px-4">
									<div className="font-medium text-gray-900">{campaign.name}</div>
									<div className="text-xs text-gray-400 mt-0.5">
										{formatNumber(campaign.views)} views · ${cpm} CPM
									</div>
								</td>
								<td className="py-4 px-4">
									<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
										{campaign.status}
									</span>
								</td>
								<td className="py-4 px-4 text-right text-sm text-gray-700">
									{formatCents(campaign.budget)}
								</td>
								<td className="py-4 px-4 text-right text-sm text-gray-700">
									{formatCents(campaign.spent)}
								</td>
								<td className="py-4 px-4 text-right text-sm text-gray-700">
									{formatNumber(campaign.views)}
								</td>
								<td className="py-4 px-4 text-right text-sm text-gray-700">
									{campaign.creators}
								</td>
								<td className="py-4 px-4 text-right">
									<div className="flex items-center justify-end gap-2">
										<div className="w-16 bg-gray-100 rounded-full h-1.5">
											<div
												className={`h-1.5 rounded-full ${
													Number(burnRate) > 80
														? "bg-red-500"
														: Number(burnRate) > 50
														? "bg-amber-500"
														: "bg-emerald-500"
												}`}
												style={{ width: `${Math.min(Number(burnRate), 100)}%` }}
											/>
										</div>
										<span className="text-xs text-gray-500 w-10 text-right">{burnRate}%</span>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
