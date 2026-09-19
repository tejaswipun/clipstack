interface StatCardProps {
	title: string;
	value: string;
	change: number;
	icon: string;
}

export function StatCard({ title, value, change, icon }: StatCardProps) {
	const isPositive = change >= 0;

	return (
		<div className="bg-white rounded-xl border border-gray-200 p-5">
			<div className="flex items-start justify-between">
				<div>
					<p className="text-sm text-gray-500 mb-1">{title}</p>
					<p className="text-2xl font-bold text-gray-900">{value}</p>
				</div>
				<span className="text-2xl">{icon}</span>
			</div>
			<div className="mt-3 flex items-center gap-1">
				<span
					className={`text-sm font-medium ${
						isPositive ? "text-emerald-600" : "text-red-600"
					}`}
				>
					{isPositive ? "↑" : "↓"} {Math.abs(change)}%
				</span>
				<span className="text-xs text-gray-400">vs last month</span>
			</div>
		</div>
	);
}
