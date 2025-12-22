import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Função para fundir classes Tailwind de forma inteligente
// Ex: cn('px-2 py-1', 'p-4') resulta corretamente em 'p-4' e não conflita
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}