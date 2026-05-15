import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12 space-y-4", align === "center" && "text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
