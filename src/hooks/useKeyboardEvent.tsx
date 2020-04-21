import React, { useEffect } from 'react';

export default function useKeyboardEvent(key: string, callback: Function) {
    useEffect(() => {
        const handler = (event: KeyboardEvent): void => {
            if (event.key === key) {
                callback()
            }
        }

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler)
        }
    })
}
