import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Coupe' | 'Coloration' | 'Soin' | 'Événement';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}
