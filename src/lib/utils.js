// import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }




import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(date) {
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

