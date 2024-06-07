// Providers.ts

'use client';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

import { ThemeProvider } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode;
}

if (typeof window !== 'undefined') {
  posthog.init('<ph_project_api_key>', {
    api_host: '<ph_instance_address>',
  });
}
export function PHProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider defaultTheme="dark" attribute="class" disableTransitionOnChange>
    {children}
  </ThemeProvider>
);

export default Providers;
