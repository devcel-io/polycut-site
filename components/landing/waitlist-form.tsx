"use client";

import { useActionState, useEffect, useRef } from "react";
import { track } from "@vercel/analytics";
import { joinWaitlist, type WaitlistState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const initialState: WaitlistState = {
  status: "idle",
  message: "",
};

export function WaitlistForm() {
  const [state, formAction, isPending] = useActionState(
    joinWaitlist,
    initialState,
  );
  const lastTrackedMessage = useRef<string | null>(null);

  useEffect(() => {
    if (
      state.status !== "success" ||
      !state.message ||
      lastTrackedMessage.current === state.message
    ) {
      return;
    }

    lastTrackedMessage.current = state.message;
    track("waitlist_submitted", {
      result: state.message.includes("already") ? "duplicate" : "saved",
    });
  }, [state.message, state.status]);

  return (
    <form action={formAction} className="grid gap-4" id="waitlist-form">
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-sm font-medium text-white">
          Your email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="get in touch"
          required
          className="h-11 rounded-none border-white/70 bg-black px-3 text-white shadow-none placeholder:text-white/45 focus-visible:ring-[#f579c2]"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-[#f579c2] px-8 font-black uppercase text-black hover:bg-white"
        >
          {isPending ? "Saving..." : "Join waiting list"}
        </Button>
        <div
          role="status"
          aria-live="polite"
          className={cn(
            "min-h-10 text-xs leading-tight",
            state.status === "success" && "text-white",
            state.status === "error" && "text-[#f579c2]",
            state.status === "idle" && "text-white/45",
          )}
        >
          {state.message ? (
            <>
              <p className="font-black">{state.message}</p>
              {state.status === "success" ? (
                <p className="mt-1 text-white/45">Look for launch news soon.</p>
              ) : null}
            </>
          ) : (
            <p>Response saved after submit.</p>
          )}
        </div>
      </div>
    </form>
  );
}
