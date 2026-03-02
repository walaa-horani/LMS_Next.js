import { SignUp } from "@clerk/nextjs";

/**
 * Renders a sign-up page that displays the Clerk `SignUp` component centered on the screen.
 *
 * @returns The page's JSX element containing the `SignUp` component inside a centered container with top margin.
 */
export default function Page() {
    return <div className='flex items-center justify-center mt-20'>


        <SignUp />
    </div>
}