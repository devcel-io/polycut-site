"use server";

import { createClient } from "@/lib/supabase/server";
import { hasEnvVars } from "@/lib/utils";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _previousState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "Enter a valid email address.",
    };
  }

  if (!hasEnvVars) {
    return {
      status: "error",
      message: "Supabase is not configured yet.",
    };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("waitlist").insert({
      email,
      source: "landing-page",
    });

    if (error) {
      if (error.code === "23505") {
        return {
          status: "success",
          message: "You are already on the waiting list.",
        };
      }

      return {
        status: "error",
        message: "We could not save your email. Please try again.",
      };
    }

    return {
      status: "success",
      message: "Response saved.",
    };
  } catch {
    return {
      status: "error",
      message: "We could not reach Supabase. Please try again.",
    };
  }
}
