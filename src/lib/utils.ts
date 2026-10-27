import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeInZone(timeZone: string = "Asia/Kolkata"): string {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return formatter.format(new Date());
  } catch (error) {
    return new Date().toLocaleTimeString();
  }
}

export function formatDateInZone(timeZone: string = "Asia/Kolkata"): string {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formatter.format(new Date());
  } catch (error) {
    return new Date().toLocaleDateString();
  }
}

