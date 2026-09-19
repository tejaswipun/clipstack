"use client";

import { useState } from "react";

interface CSVExportProps {
	companyId: string;
	data: any[];
	filename: string;
	columns: { key: string; label: string; format?: (value: any) => string }[];
}

export function CSVExport({ companyId, data, filename, columns }: CSVExportProps) {
	const [exporting, setExporting] = useState(false);
	const [lastExport, setLastExport] = useState<string | null>(null);

	const generateCSV = () => {
		setExporting(true);

		// Build header row
		const headers = columns.map((col) => col.label);

		// Build data rows
		const rows = data.map((row) =>
			columns.map((col) => {
				const value = row[col.key];
				if (col.format) return col.format(value);
				if (typeof value === "string") return `"${value.replace(/"/g, '""')}"`;
				return value ?? "";
			})
		);

		// Combine
		const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

		// Create blob and download
		const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
		const link = document.createElement("a");
		const url = URL.createObjectURL(blob);
		link.setAttribute("href", url);
		link.setAttribute("download", `${filename}_${new Date().toISOString().split("T")[0]}.csv`);
		link.style.visibility = "hidden";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		setLastExport(new Date().toLocaleTimeString());
		setExporting(false);
	};

	return (
		<div className="flex items-center gap-3">
			<button
				onClick={generateCSV}
				disabled={exporting || data.length === 0}
				className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
			>
				{exporting ? (
					<>
						<svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
						</svg>
						Exporting...
					</>
				) : (
					<>
						<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
						</svg>
						Export CSV
					</>
				)}
			</button>
			{lastExport && (
				<span className="text-xs text-gray-400">Last exported: {lastExport}</span>
			)}
		</div>
	);
}

// Pre-built export configurations
export const exportConfigs = {
	campaigns: {
		filename: "clipstack_campaigns",
		columns: [
			{ key: "name", label: "Campaign Name" },
			{ key: "status", label: "Status" },
			{ key: "budget", label: "Budget", format: (v: number) => `$${(v / 100).toFixed(2)}` },
			{ key: "spent", label: "Spent", format: (v: number) => `$${(v / 100).toFixed(2)}` },
			{ key: "views", label: "Views", format: (v: number) => v.toLocaleString() },
			{ key: "creators", label: "Creators" },
			{ key: "cpm", label: "CPM", format: (v: number) => `$${v.toFixed(2)}` },
		],
	},
	creators: {
		filename: "clipstack_creators",
		columns: [
			{ key: "name", label: "Creator Name" },
			{ key: "username", label: "Username" },
			{ key: "overallScore", label: "Quality Score" },
			{ key: "status", label: "Status" },
			{ key: "totalClips", label: "Total Clips" },
			{ key: "totalViews", label: "Total Views", format: (v: number) => v.toLocaleString() },
			{ key: "totalEarnings", label: "Total Earnings", format: (v: number) => `$${(v / 100).toFixed(2)}` },
			{ key: "approvalRate", label: "Approval Rate", format: (v: number) => `${v}%` },
		],
	},
	revenue: {
		filename: "clipstack_revenue",
		columns: [
			{ key: "date", label: "Date" },
			{ key: "revenue", label: "Revenue", format: (v: number) => `$${(v / 100).toFixed(2)}` },
			{ key: "views", label: "Views", format: (v: number) => v.toLocaleString() },
			{ key: "cpm", label: "CPM", format: (v: number) => `$${v.toFixed(2)}` },
		],
	},
};
