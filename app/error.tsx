'use client';

import TextButton from '@/components/buttons/TextButton';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex size-full flex-col items-center justify-center">
            <h2 className="text-center">Something went wrong!</h2>

            <TextButton text='Try again'
                onClick={
                    // Attempt to recover by trying to re-render the invoices route
                    () => reset()
                }
            />
        </main>
    );
}