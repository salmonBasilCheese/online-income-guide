'use client';

export default function ActionContent({ content }: { content: string }) {
    return (
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {content}
        </div>
    );
}
