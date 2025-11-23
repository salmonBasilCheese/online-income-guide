'use client';

export default function TemplateBox({ title, text }: { title: string; text: string }) {
    return (
        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed overflow-x-auto">
            {text}
        </pre>
    );
}
