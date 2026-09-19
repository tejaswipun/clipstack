"use client";

import { useEffect, useState } from "react";

interface CreatorScore {
	id: string;
	name: string;
	username: string;
	overallScore: number; // 0-100
	metrics: {
		viewsPerClip: number;
		approvalRate: number;
		consistency: number; // 0-100
		nicheRelevance: number; // 0-100
		growthTrend: "up" | "stable" | "down";
	};
	totalClips: number;
	totalViews: number;
	totalEarnings: number;
	status: "top_performer" | "good" | "average" | "at_risk" | "flagged";
}

interface CreatorQualityScoringProps {
	companyId: string;
}

export function CreatorQualityScoring({ companyId }: CreatorQualityScoringProps) {
	const [creators, setCreators] = useState<CreatorScore[]>([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState<"all" | "top_performer" | "at_risk" | "flagged">("all");
	const [sortBy, setSortBy] = useState<"score" | "views" | "earnings">("score");

	useEffect(() => {
		// In production, this would calculate scores from real data
		setCreators([
			{
				id: "u1",
				name: "Alex Rivera",
				username: "@alexclips",
				overallScore: 92,
				metrics: { viewsPerClip: 45200, approvalRate: 98, consistency: 95, nicheRelevance: 88, growthTrend: "up" },
				totalClips: 34,
				totalViews: 1536800,
				totalEarnings: 215152,
				status: "top_performer",
			},
			{
				id: "u2",
				name: "Jordan Kim",
				username: "@jordancreates",
				overallScore: 87,
				metrics: { viewsPerClip: 38900, approvalRate: 95, consistency: 89, nicheRelevance: 82, growthTrend: "up" },
				totalClips: 28,
				totalViews: 1089200,
				totalEarnings: 152488,
				status: "top_performer",
			},
			{
				id: "u3",
				name: "Sam Chen",
				username: "@samclips",
				overallScore: 74,
				metrics: { viewsPerClip: 22100, approvalRate: 88, consistency: 72, nicheRelevance: 68, growthTrend: "stable" },
				totalClips: 22,
				totalViews: 486200,
				totalEarnings: 68068,
				status: "good",
			},
			{
				id: "u4",
				name: "Taylor Moss",
				username: "@taylorviral",
				overallScore: 61,
				metrics: { viewsPerClip: 15400, approvalRate: 78, consistency: 55, nicheRelevance: 62, growthTrend: "down" },
				totalClips: 19,
				totalViews: 292600,
				totalEarnings: 40964,
				status: "average",
			},
			{
				id: "u5",
				name: "Casey Nguyen",
				username: "@caseyclips",
				overallScore: 45,
				metrics: { viewsPerClip: 8200, approvalRate: 62, consistency: 38, nicheRelevance: 45, growthTrend: "down" },
				totalClips: 15,
				totalViews: 123000,
				totalEarnings: 17220,
				status: "at_risk",
			},
			{
				id: "u6",
				name: "SpamBot3000",
				username: "@spamclips",
				overallScore: 12,
				metrics: { viewsPerClip: 1200, approvalRate: 23, consistency: 8, nicheRelevance: 15, growthTrend: "down" },
				totalClips: 45,
				totalViews: 54000,
				totalEarnings: 7560,
				status: "flagged",
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

	const getScoreColor = (score: number) => {
		if (score >= 80) return "text-emerald-600 bg-emerald-50";
		if (score >= 60) return "text-blue-600 bg-blue-50";
		if (score >= 40) return "text-amber-600 bg-amber-50";
		return "text-red-600 bg-red-50";
	};

	const getStatusBadge = (status: CreatorScore["status"]) => {
		const styles = {
			top_performer: "bg-emerald-100 text-emerald-700",
			good: "bg-blue-100 text-blue-700",
			average: "bg-gray-100 text-gray-600",
			at_risk: "bg-amber-100 text-amber-700",
			flagged: "bg-red-100 text-red-700",
		};
		const labels = {
			top_performer: "Top Performer",
			good: "Good",
			average: "Average",
			at_risk: "At Risk",
			flagged: "Flagged",
		};
		return (
			<span className={`px-2 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
				{labels[status]}
			</span>
		);
	};

	const filtered = creators
		.filter((c) => filter === "all" || c.status === filter)
		.sort((a, b) => {
			if (sortBy === "score") return b.overallScore - a.overallScore;
			if (sortBy === "views") return b.totalViews - a.totalViews;
			return b.totalEarnings - a.totalEarnings;
		});

	if (loading) {
		return (
			<div className="text-center py-8 text-gray-400">Loading creator scores...</div>
		);
	}

	return (
		<div className="space-y-4">
			{/* Filters */}
			<div className="flex items-center justify-between">
				<div className="flex gap-2">
					{(["all", "top_performer", "at_risk", "flagged"] as const).map((f) => (
						<button
							key={f}
							onClick={() => setFilter(f)}
							className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
								filter === f
									? "bg-indigo-100 text-indigo-700"
									: "text-gray-500 hover:bg-gray-100"
							}`}
						>
							{f === "all" ? "All" : f === "top_performer" ? "⭐ Top" : f === "at_risk" ? "⚠️ At Risk" : "🚩 Flagged"}
						</button>
					))}
				</div>
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
					className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600"
				>
					<option value="score">Sort by Score</option>
					<option value="views">Sort by Views</option>
					<option value="earnings">Sort by Earnings</option>
				</select>
			</div>

			{/* Creator List */}
			<div className="space-y-3">
				{filtered.map((creator) => (
					<div
						key={creator.id}
						className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors"
					>
						<div className="flex items-start justify-between mb-3">
							<div className="flex items-center gap-3">
								<div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${getScoreColor(creator.overallScore)}`}>
									{creator.overallScore}
								</div>
								<div>
									<div className="font-medium text-gray-900">{creator.name}</div>
									<div className="text-xs text-gray-400">{creator.username}</div>
								</div>
							</div>
							{getStatusBadge(creator.status)}
						</div>

						{/* Metrics Grid */}
						<div className="grid grid-cols-4 gap-3 mb-3">
							<div className="text-center">
								<div className="text-xs text-gray-400">Views/Clip</div>
								<div className="text-sm font-medium text-gray-700">
									{formatNumber(creator.metrics.viewsPerClip)}
								</div>
							</div>
							<div className="text-center">
								<div className="text-xs text-gray-400">Approval</div>
								<div className="text-sm font-medium text-gray-700">
									{creator.metrics.approvalRate}%
								</div>
							</div>
							<div className="text-center">
								<div className="text-xs text-gray-400">Consistency</div>
								<div className="text-sm font-medium text-gray-700">
									{creator.metrics.consistency}%
								</div>
							</div>
							<div className="text-center">
								<div className="text-xs text-gray-400">Niche Fit</div>
								<div className="text-sm font-medium text-gray-700">
									{creator.metrics.nicheRelevance}%
								</div>
							</div>
						</div>

						{/* Bottom Stats */}
						<div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-50">
							<span>{creator.totalClips} clips</span>
							<span>{formatNumber(creator.totalViews)} total views</span>
							<span>{formatCents(creator.totalEarnings)} earned</span>
							<span className={`flex items-center gap-1 ${
								creator.metrics.growthTrend === "up"
									? "text-emerald-500"
									: creator.metrics.growthTrend === "down"
									? "text-red-500"
									: "text-gray-400"
							}`}>
								{creator.metrics.growthTrend === "up" ? "↗" : creator.metrics.growthTrend === "down" ? "↘" : "→"}
								{creator.metrics.growthTrend}
							</span>
						</div>
					</div>
				))}
			</div>

			{/* Summary */}
			<div className="bg-gray-50 rounded-lg p-4 text-sm">
				<div className="flex justify-between">
					<span className="text-gray-500">Total Creators: {creators.length}</span>
					<span className="text-gray-500">
						Top Performers: {creators.filter((c) => c.status === "top_performer").length}
					</span>
					<span className="text-gray-500">
						At Risk: {creators.filter((c) => c.status === "at_risk" || c.status === "flagged").length}
					</span>
				</div>
			</div>
		</div>
	);
}
