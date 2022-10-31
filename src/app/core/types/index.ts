export * from './color';

declare global {
    interface Window { 
        ENV: any; 
        gtag: (
        option: string,
        gaTrackingId: string,
        options: Record<string, unknown>
      ) => void;}
}