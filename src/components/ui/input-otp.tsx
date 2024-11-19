import * as React from "react";
import { OTPInputContext } from "input-otp";

import { cn } from "@/lib/utils";

type OTPInputContextType = {
  slots: { char: string; hasFakeCaret: boolean }[];
};

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const context = React.useContext<OTPInputContextType | null>(OTPInputContext);

  if (!context) {
    return null;
  }

  const { char, hasFakeCaret } = context.slots[index] || {};

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        hasFakeCaret && "z-10 ring-1 ring-ring",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPGroup.displayName = "InputOTPGroup";

export { InputOTPGroup };
