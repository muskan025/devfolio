import type { IconType } from "react-icons";

type CardTitleProps = {
  title: string;
  icon: IconType;
  className?: string;
  titleClassName?: string;
  iconWrapperClassName?: string;
  iconClassName?: string;
  lineClassName?: string;
};

export function CardTitle({
  title,
  icon: Icon,
  className = "",
  titleClassName = "text-[#2a352b]",
  iconWrapperClassName = "border-[#506833]/50 bg-[#2f481f] text-[#d9c37f] shadow-[0_8px_18px_rgba(0,0,0,0.18)]",
  iconClassName = "",
  lineClassName = "bg-[#d0b36f]/70",
}: CardTitleProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={`
          inline-flex h-9 w-9 items-center justify-center rounded-full
          border ${iconWrapperClassName}
        `}
      >
        <Icon className={`h-4 w-4 ${iconClassName}`} aria-hidden="true" />
      </span>

      <h3
        className={`text-[0.95rem] font-semibold uppercase tracking-[0.24em] ${titleClassName}`}
      >
        {title}
      </h3>

      <span className={`h-px w-8 flex-none ${lineClassName}`} />
    </div>
  );
}