export function ProjectTech({
  technologies,
  max = 4,
}: {
  technologies: string[];
  max?: number;
}) {
  const shown = technologies.slice(0, max);
  const overflow = technologies.length - shown.length;

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {shown.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted"
        >
          {tech}
        </li>
      ))}
      {overflow > 0 && (
        <li className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
          +{overflow}
        </li>
      )}
    </ul>
  );
}
