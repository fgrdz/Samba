import { cn } from "@/lib/utils";

interface SpecialButtonProps {
  text: string;
  className?: string;
  icon?: React.ReactElement;
}

export function SpecialButton({ text, className, icon }: SpecialButtonProps) {
  return (
    <button className={cn(`relative inline-flex h-12 overflow-hidden rounded p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`)}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded dark:bg-slate-950 bg-slate-300 px-3 py-1 text-sm font-medium dark:text-white text-slate-600 backdrop-blur-3xl">
      <div className="w-full flex gap-2 items-center justify-center">
        {icon}
        {text}
      </div>  
      </span>
    </button>
  );
}