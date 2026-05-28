import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a WhatsApp URL with a pre-filled message */
export function whatsappUrl(phone: string, message?: string): string {
  const clean = phone.replace(/\D/g, "");
  const msg = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${clean}${msg}`;
}

/** Linear interpolation for smooth animations */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/** Clamp a value between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Map a value from one range to another */
export function mapRange(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
): number {
  return (
    ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) +
    outputMin
  );
}
