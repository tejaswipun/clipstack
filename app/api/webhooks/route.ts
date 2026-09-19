import { waitUntil } from "@vercel/functions";
import type { NextRequest } from "next/server";
import { whopsdk } from "@/lib/whop-sdk";

// In-memory store for demo (in production, use a database)
const webhookEvents: Array<{
	id: string;
	type: string;
	data: any;
	timestamp: string;
	processed: boolean;
}> = [];

export async function POST(request: NextRequest): Promise<Response> {
	// Validate the webhook to ensure it's from Whop
	const requestBodyText = await request.text();
	const headers = Object.fromEntries(request.headers);
	const webhookData = whopsdk.webhooks.unwrap(requestBodyText, { headers });

	// Store event for dashboard display
	const event = {
		id: `evt_${Date.now()}`,
		type: webhookData.type as string,
		data: webhookData.data,
		timestamp: new Date().toISOString(),
		processed: false,
	};
	webhookEvents.push(event);

	// Handle different webhook event types
	const eventType = webhookData.type as string;

	if (eventType === "invoice.paid") {
		waitUntil(handlePaymentSucceeded(webhookData.data));
	} else if (eventType === "invoice.voided") {
		waitUntil(handlePaymentVoided(webhookData.data));
	} else if (eventType === "invoice.past_due") {
		waitUntil(handlePaymentPastDue(webhookData.data));
	} else if (eventType === "membership.activated") {
		waitUntil(handleMembershipActivated(webhookData.data));
	} else if (eventType === "membership.deactivated") {
		waitUntil(handleMembershipDeactivated(webhookData.data));
	} else if (eventType === "entry.created") {
		waitUntil(handleEntryCreated(webhookData.data));
	} else if (eventType === "entry.approved") {
		waitUntil(handleEntryApproved(webhookData.data));
	} else if (eventType === "entry.denied") {
		waitUntil(handleEntryDenied(webhookData.data));
	} else {
		console.log(`[WEBHOOK] Unhandled event type: ${eventType}`);
	}

	// Mark as processed
	event.processed = true;

	// Always return 2xx quickly
	return new Response("OK", { status: 200 });
}

async function handlePaymentSucceeded(data: any) {
	console.log("[INVOICE PAID]", {
	id: data.id,
	amount: data.amount,
	user: data.user,
});
}

async function handlePaymentVoided(data: any) {
	console.log("[INVOICE VOIDED]", {
	id: data.id,
});
}

async function handlePaymentPastDue(data: any) {
	console.log("[INVOICE PAST DUE]", {
	id: data.id,
});
}

async function handleMembershipActivated(data: any) {
	console.log("[MEMBERSHIP ACTIVATED]", {
	id: data.id,
	user: data.user,
});
}

async function handleMembershipDeactivated(data: any) {
	console.log("[MEMBERSHIP DEACTIVATED]", {
	id: data.id,
});
}

async function handleEntryCreated(data: any) {
	console.log("[ENTRY CREATED]", {
	id: data.id,
});
}

async function handleEntryApproved(data: any) {
	console.log("[ENTRY APPROVED]", {
	id: data.id,
});
}

async function handleEntryDenied(data: any) {
	console.log("[ENTRY DENIED]", {
	id: data.id,
});
}

// API endpoint to get recent webhook events (for dashboard)
export async function GET() {
	return Response.json({
		events: webhookEvents.slice(-50).reverse(),
		total: webhookEvents.length,
	});
}
