"use client";

import { useEffect, useState } from "react";

interface Creator {
	id: string;
	name: string;
	views: number;
	earnings: number;
	clips: number;
	avgViews: number;
}

interface CreatorLeaderboardProps {
	companyId: string;
}

export function CreatorLeaderboard({ companyId }: CreatorLeaderboardProps) {
	const [creators, setCreators] = useState<Creator[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// In production, this would fetch from Whop API
		setCreators([
			{ id: "u1", name: "Alex Rivera", views: 892000, earnings: 124500, clips: 34, avgViews: 26235 },
			{ id: "u2", name: "Jordan Kim", views: 654000, earnings: 98700, clips: 28, avgViews: 23357 },
			{ id: "u3", name: "Sam Chen", views: 543000, earnings: 82100, clips: 22, avgViews: 24682 },
			{ id: "u4", name: "Taylor Moss", views: 421000, earnings: 63200, clips: 19, avgViews: 22158 },
			{ id: "u5", name: "Casey Nguyen", views: 387000, earnings: 58000, clips: 15, avgViews: 25800 },
		]);
		setLoading(false);
	}, [companyId]);

	const formatCents = (cents: number) => `$${(cents / 100).toFixed(2)}`;
	const formatNumber = (num: number) => {
		if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
		if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
		return num.toString();
	};

	const getRankBadge = (index: number) => {
		switch (index) {
			case 0:
				return "bg-yellow-100 text-yellow-700";
			case 1:
				return "bg-gray-100 text-gray-600";
			case 2:
				return "bg-orange-100 text-orange-700";
			default:
				return "bg-gray-50 text-gray-500";
		}
	};

	if (loading) {
		return (
			<div className="text-center py-8 text-gray-400">Loading creators...</div>
		);
	}

	return (
		<div className="space-y-3">
			{creators.map((creator, index) => (
				<div
					key={creator.id}
					className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
				>
					<span
						className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${getRankBadge(
							index
						)}`}
					>
						{index + 1}
					</span>
					<div className="flex-1 min-w-0">
						<div className="font-medium text-gray-900 truncate">{creator.name}</div>
						<div className="text-xs text-gray-400">
							{creator.clips} clips · {formatNumber(creator.avgViews)} avg views
						</div>
					</div>
					<div className="text-right">
						<div className="font-semibold text-gray-900">{formatCents(creator.earnings)}</div>
						<div className="text-xs text-gray-400">{formatNumber(creator.views)} views</div>
					</div>
				</div>
			))}
		</div>
	);
}
