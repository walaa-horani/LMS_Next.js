import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import { dark } from '@clerk/themes'
import { SanityLive } from '@/sanity/lib/live'

/**
 * Root layout that wraps page content with the Clerk authentication provider and includes the Sanity live indicator.
 *
 * @param children - The page or app content to render inside the layout.
 * @returns The layout element that wraps `children` with the authentication provider and renders the Sanity live component.
 */
function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider

            appearance={{
                theme: dark,
            }}>
            <div>

                {children}
                <SanityLive />

            </div>
        </ClerkProvider>
    )
}

export default AppLayout