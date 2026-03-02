import { SignIn } from '@clerk/nextjs'

/**
 * Renders a centered page containing Clerk's SignIn component.
 *
 * @returns A JSX element that centers and displays the `<SignIn />` UI.
 */
export default function Page() {
    return <div className='flex items-center justify-center mt-20'>

        <SignIn />
    </div>
}