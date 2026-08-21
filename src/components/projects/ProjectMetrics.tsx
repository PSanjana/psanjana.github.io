import type { ProjectMetric } from "@/data/types";

export function ProjectMetrics({ metrics }: { metrics: ProjectMetric[] }) {
  if (metrics.length === 0) return null;

  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <dt className="text-xs text-muted">{metric.label}</dt>
          <dd className="font-display text-xl font-semibold text-ink">{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}
