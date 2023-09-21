import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

/**
 * Custom initialization parameters for Aptabase SDK.
 * Use this when calling the init function.
 */
type AptabaseOptions = {
  // Host URL for Self-Hosted deployments
  host?: string;

  // Custom appVersion to override the default
  appVersion?: string;

  // Override the default flush interval (in milliseconds)
  flushInterval?: number;
};

/**
 * Initializes the SDK with given App Key
 * @param {string} appKey - Aptabase App Key
 * @param {AptabaseOptions} options - Optional initialization parameters
 */
declare function init(appKey: string, options?: AptabaseOptions): void;
/**
 * Track an event using given properties
 * @param {string} eventName - The name of the event to track
 * @param {Object} props - Optional custom properties
 */
declare function trackEvent(eventName: string, props?: Record<string, string | number | boolean>): void;

type AptabaseClient = {
    trackEvent: typeof trackEvent;
};
type Props = {
    appKey: string;
    options?: AptabaseOptions;
    children: ReactNode;
};
declare function AptabaseProvider({ appKey, options, children }: Props): react_jsx_runtime.JSX.Element;
declare function useAptabase(): AptabaseClient;

export { AptabaseOptions, AptabaseProvider, init, trackEvent, useAptabase };
