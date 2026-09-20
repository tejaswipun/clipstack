import { Button } from "@whop/react/components";
import { headers } from "next/headers";
import Link from "next/link";
import { whopsdk } from "@/lib/whop-sdk";

export default async function ExperiencePage({
	params,
}: {
	params: Promise<{ experienceId: string }>;
}) {
	const { experienceId } = await params;
	const { userId } = await whopsdk.verifyUserToken(await headers());

	const [experience, user, access] = await Promise.all([
		whopsdk.experiences.retrieve(experienceId),
		whopsdk.users.retrieve(userId),
		whopsdk.users.checkAccess(experienceId, { id: userId }),
	]);

	const displayName = user.name || `@${user.username}`;
	const isAdmin = access.access_level === "admin";

	return (
		<div className="min-h-screen bg-slate-50">
			<div className="bg-white border-b border-gray-200 px-8 py-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">
							ClipStack
						</h1>
						<p className="text-sm text-gray-500 mt-1">
							Welcome, {displayName}
						</p>
					</div>
					<div className="flex items-center gap-3">
						<Link
							href="https://docs.whop.com/apps"
							target="_blank"
						>
							<Button variant="classic" size="3">
								Developer Docs
							</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className="p-8 max-w-4xl mx-auto">
				{isAdmin ? (
					<div className="bg-white rounded-xl border border-gray-200 p-8">
						<h2 className="text-xl font-bold text-gray-900 mb-4">
							Analytics Dashboard
						</h2>
						<p className="text-gray-600 mb-6">
							You have admin access. Open the full analytics dashboard for detailed insights.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="bg-indigo-50 rounded-lg p-4">
								<div className="text-sm text-indigo-600 font-medium">Experience</div>
								<div className="text-lg font-bold text-gray-900">{experience.name}</div>
							</div>
							<div className="bg-indigo-50 rounded-lg p-4">
								<div className="text-sm text-indigo-600 font-medium">Access Level</div>
								<div className="text-lg font-bold text-gray-900 capitalize">{access.access_level}</div>
							</div>
							<div className="bg-indigo-50 rounded-lg p-4">
								<div className="text-sm text-indigo-600 font-medium">Products</div>
								<div className="text-lg font-bold text-gray-900">{experience.products?.length ?? 0}</div>
							</div>
						</div>
					</div>
				) : (
					<div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
						<h2 className="text-xl font-bold text-gray-900 mb-2">Admin Access Required</h2>
						<p className="text-gray-500">You need admin access to view ClipStack analytics.</p>
					</div>
				)}
			</div>
		</div>
	);
}
