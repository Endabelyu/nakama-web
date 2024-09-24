import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-listHat bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent  text-listHat file:text-sm file:font-medium file:text-neutral-950 placeholder:text-listHat focus-visible:outline-none hover:ring-1 hover:ring-listHat focus-visible:ring-1 focus-visible:ring-listHat disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
