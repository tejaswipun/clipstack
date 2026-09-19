"use client";

import { useEffect, useState } from "react";

interface WebhookEvent {
	id: string;
	type: string;
	data: any;
	timestamp: string;
	processed: boolean;
}

interface WebhookActivityFeedProps {
	companyId: string;
}

export function WebhookActivityFeed({ companyId }: WebhookActivityFeedProps) {
	const [events, setEvents] = useState<WebhookEvent[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Fetch recent webhook events
		fetch("/api/webhooks")
			.then((res) => res.json())
			.then((data) => {
				setEvents(data.events || []);
				setLoading(false);
			})
			.catch(() => {
				// Use demo data if API not available
				setEvents([
					{
						id: "evt_1",
						type: "invoice.paid",
						data: { amount: 4900, user: { name: "Alex Rivera" } },
						timestamp: new Date(Date.now() - 300000).toISOString(),
						processed: true,
					},
					{
						id: "evt_2",
						type: "membership.activated",
						data: { user: { name: "Jordan Kim" } },
						timestamp: new Date(Date.now() - 600000).toISOString(),
						processed: true,
					},
					{
						id: "evt_3",
						type: "entry.approved",
						data: { user: { name: "Sam Chen" }, campaign: "Summer Promo" },
						timestamp: new Date(Date.now() - 900000).toISOString(),
						processed: true,
					},
				]);
				setLoading(false);
			});
	}, [companyId]);

	const getEventIcon = (type: string) => {
		if (type.includes("invoice.paid")) return "💰";
		if (type.includes("invoice.voided")) return "❌";
		if (type.includes("invoice.past_due")) return "⚠️";
		if (type.includes("membership.activated")) return "👤";
		if (type.includes("membership.deactivated")) return "👋";
		if (type.includes("entry.created")) return "📝";
		if (type.includes("entry.approved")) return "✅";
		if (type.includes("entry.denied")) return "🚫";
		return "📌";
	};

	const getEventLabel = (type: string) => {
		if (type.includes("invoice.paid")) return "Payment Received";
		if (type.includes("invoice.voided")) return "Payment Voided";
		if (type.includes("invoice.past_due")) return "Payment Past Due";
		if (type.includes("membership.activated")) return "Member Activated";
		if (type.includes("membership.deactivated")) return "Member Deactivated";
		if (type.includes("entry.created")) return "New Entry";
		if (type.includes("entry.approved")) return "Entry Approved";
		if (type.includes("entry.denied")) return "Entry Denied";
		return type;
	};

	const getEventColor = (type: string) => {
		if (type.includes("invoice.paid")) return "bg-emerald-50 text-emerald-700";
		if (type.includes("invoice.voided")) return "bg-red-50 text-red-700";
		if (type.includes("invoice.past_due")) return "bg-amber-50 text-amber-700";
		if (type.includes("membership.activated")) return "bg-blue-50 text-blue-700";
		if (type.includes("membership.deactivated")) return "bg-gray-50 text-gray-700";
		if (type.includes("entry.approved")) return "bg-emerald-50 text-emerald-700";
		if (type.includes("entry.denied")) return "bg-red-50 text-red-700";
		return "bg-gray-50 text-gray-700";
	};

	const formatAmount = (cents: number) => `$${(cents / 100).toFixed(2)}`;

	const formatTime = (timestamp: string) => {
		const diff = Date.now() - new Date(timestamp).getTime();
		const minutes = Math.floor(diff / 60000);
		if (minutes < 1) return "Just now";
		if (minutes < 60) return `${minutes}m ago`;
		const hours = Math.floor(minutes / 60);
		if (hours < 24) return `${hours}h ago`;
		return `${Math.floor(hours / 24)}d ago`;
	};

	if (loading) {
		return (
			<div className="text-center py-8 text-gray-400">Loading activity...</div>
		);
	}

	return (
		<div className="space-y-3">
			{events.length === 0 ? (
				<div className="text-center py-8 text-gray-400">
					No webhook events yet. Configure webhooks in your Whop dashboard.
				</div>
			) : (
				events.map((event) => (
					<div
						key={event.id}
						className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
					>
						<span className="text-lg">{getEventIcon(event.type)}</span>
						<div className="flex-1 min-w-0">
							<div className="flex items-center gap-2">
								<span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getEventColor(event.type)}`}>
									{getEventLabel(event.type)}
								</span>
								{event.data?.amount && (
									<span className="text-sm font-medium text-gray-900">
										{formatAmount(event.data.amount)}
									</span>
								)}
							</div>
							<div className="text-xs text-gray-400 mt-1">
								{event.data?.user?.name || "Unknown user"}
								{" · "}
								{formatTime(event.timestamp)}
							</div>
						</div>
						<div className={`w-2 h-2 rounded-full ${
							event.processed ? "bg-emerald-400" : "bg-amber-400"
						}`} />
					</div>
				))
			)}
		</div>
	);
}
