import { Button } from "@whop/react/components";
import Link from "next/link";

const features = [
	{
		title: "Campaign ROI",
		description:
			"Track revenue attribution and cost per acquisition across every campaign with real-time analytics.",
		icon: (
			<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
			</svg>
		),
	},
	{
		title: "Creator Rankings",
		description:
			"See which creators drive the most value. Rank by revenue, conversions, and engagement metrics.",
		icon: (
			<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.996.13-1.734.97-1.734 1.933v3.807c0 .96.742 1.8 1.734 1.932m12.732-5.766a7.452 7.452 0 00-.981 3.172M5.25 4.236a7.452 7.452 0 014.28-2.647m0 0a7.453 7.453 0 014.28 2.647m0 0v3.807c0 .96-.742 1.8-1.734 1.932m0 0A7.453 7.453 0 019.497 14.25m0 0v.564" />
			</svg>
		),
	},
	{
		title: "Budget Forecasting",
		description:
			"Predict spend and optimize budgets with AI-powered forecasting across your content rewards programs.",
		icon: (
			<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
			</svg>
		),
	},
	{
		title: "Fraud Detection",
		description:
			"Identify suspicious activity, invalid clicks, and fraudulent claims before they drain your budget.",
		icon: (
			<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
			</svg>
		),
	},
];

export default function Page() {
	return (
		<div className="min-h-screen bg-white text-gray-950">
			{/* Navigation */}
			<nav className="border-b border-gray-200">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
					<div className="flex items-center gap-2">
						<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
							<svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
							</svg>
						</div>
						<span className="text-lg font-bold tracking-tight">ClipStack</span>
					</div>
					<div className="flex items-center gap-3">
						<Link href="/discover">
							<Button variant="classic" size="3">Discover</Button>
						</Link>
						<Link href="/dashboard/demo">
							<Button variant="solid" className="bg-indigo-600 text-white hover:bg-indigo-700" size="3">Open Dashboard</Button>
						</Link>
					</div>
				</div>
			</nav>

			{/* Hero */}
			<section className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
				<div className="mx-auto max-w-3xl">
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
						<span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
						Content Rewards Analytics
					</div>
					<h1 className="text-5xl font-extrabold tracking-tight text-gray-950 sm:text-6xl">
						Know your{" "}
						<span className="text-indigo-600">content ROI</span>
					</h1>
					<p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
						The analytics dashboard built for Whop Content Rewards. Track creator performance, optimize budgets, and detect fraud — all in one place.
					</p>
					<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Link href="/dashboard/demo">
							<Button variant="solid" className="bg-indigo-600 text-white hover:bg-indigo-700" size="4">
								Open Dashboard
							</Button>
						</Link>
						<Link href="https://whop.com/apps" target="_blank" rel="noopener noreferrer">
							<Button variant="classic" size="4">
								Install on Whop
								<svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
								</svg>
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="border-t border-gray-100 bg-gray-50/50">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-950">Everything you need</h2>
						<p className="mt-3 text-gray-600">Purpose-built analytics for content rewards programs.</p>
					</div>
					<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{features.map((f) => (
							<div
								key={f.title}
								className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
							>
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
									{f.icon}
								</div>
								<h3 className="mt-4 text-lg font-semibold text-gray-950">{f.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-gray-600">{f.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-gray-200">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
					<div className="flex items-center gap-2 text-sm text-gray-500">
						<div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600">
							<svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
							</svg>
						</div>
						<span>&copy; {new Date().getFullYear()} ClipStack</span>
					</div>
					<div className="flex gap-6 text-sm text-gray-500">
						<Link href="/discover" className="hover:text-gray-900">Discover</Link>
						<Link href="/privacy" className="hover:text-gray-900">Privacy</Link>
						<a href="https://whop.com/apps" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Whop</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
