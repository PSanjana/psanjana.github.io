export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none";

export const buttonVariants = {
  primary:
    "bg-ink text-bg hover:opacity-90 active:opacity-80 dark:bg-accent dark:text-accent-ink",
  secondary:
    "border border-border bg-surface text-ink hover:border-ink/30 hover:bg-raised",
  ghost: "text-ink hover:bg-surface",
};

export const buttonSizes = {
  md: "h-11 px-6",
  sm: "h-9 px-4 text-[13px]",
};

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;
