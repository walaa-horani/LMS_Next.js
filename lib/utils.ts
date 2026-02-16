import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine multiple class name values into a single Tailwind-ready class string.
 *
 * @param inputs - Class name or conditional class value entries to be combined
 * @returns The final merged class string with Tailwind conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}