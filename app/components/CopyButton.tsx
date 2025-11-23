'use client';

import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            className={`absolute top-4 right-4 text-xs px-3 py-1 rounded font-bold transition-all ${copied
                    ? 'bg-green-500 text-white opacity-100'
                    : 'bg-white text-gray-900 opacity-0 group-hover:opacity-100 hover:bg-gray-200'
                }`}
            onClick={handleCopy}
        >
            {copied ? 'コピーしました！' : 'コピーする'}
        </button>
    );
}
