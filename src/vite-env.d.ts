/// <reference types="vite/client" />

import { Time } from 'lightweight-charts';
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}