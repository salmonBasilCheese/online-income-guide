import Link from 'next/link';
import { notFound } from 'next/navigation';
import { roadmaps } from '@/app/data/roadmaps';
import CopyButton from '@/app/components/CopyButton';

export default async function StepDetailPage({ params }: { params: Promise<{ id: string; stepId: string }> }) {
    const { id, stepId } = await params;
    const roadmap = roadmaps[id as keyof typeof roadmaps];

    if (!roadmap) {
        notFound();
    }

    // Find the specific step
    let stepDetail = null;
    let phaseTitle = '';

    for (const phase of roadmap.phases) {
        const foundStep = phase.steps.find(s => s.stepId === stepId);
        if (foundStep) {
            stepDetail = foundStep;
            phaseTitle = phase.title;
            break;
        }
    }

    if (!stepDetail) {
        notFound();
    }

    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="site-container">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-8">
                    <Link href={`/start/${id}`} className="hover:text-[#00a0e9] transition-colors">
                        {roadmap.title}
                    </Link>
                    <span className="mx-2">›</span>
                    <span className="text-gray-800 font-bold truncate">{stepDetail.head}</span>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <span className="inline-block bg-[#e6f7ff] text-[#0056b3] px-4 py-1 rounded-full text-sm font-bold mb-4">
                        {phaseTitle}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {stepDetail.head}
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-[#00a0e9] pl-4 bg-gray-50 py-4 pr-4 rounded-r">
                        {stepDetail.desc}
                    </p>
                </div>

                {/* Main Content */}
                {stepDetail.detailContent ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Actions */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Goal */}
                            <section>
                                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-2xl mr-2">🎯</span>
                                    このステップのゴール
                                </h2>
                                <div className="bg-[#fff9e6] border border-[#ffeeba] p-6 rounded-lg text-gray-800 font-bold text-lg">
                                    {stepDetail.detailContent.goal}
                                </div>
                            </section>

                            {/* Action Steps */}
                            <section>
                                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="text-2xl mr-2">📝</span>
                                    具体的なアクション
                                </h2>
                                <div className="space-y-8">
                                    {stepDetail.detailContent.actions.map((action, i) => (
                                        <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                                            <h3 className="text-lg font-bold text-[#00a0e9] mb-3">
                                                {action.title}
                                            </h3>
                                            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                                {action.content}
                                            </div>
                                            {action.imagePlaceholder && (
                                                <div className="mt-4 bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-400 text-sm">
                                                    [画像: {action.imagePlaceholder}]
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Template (if exists) */}
                            {stepDetail.detailContent.template && (
                                <section>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <span className="text-2xl mr-2">📋</span>
                                        そのまま使えるテンプレート
                                    </h2>
                                    <div className="bg-gray-800 text-gray-100 rounded-xl p-6 relative group">
                                        <h3 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">
                                            {stepDetail.detailContent.template.title}
                                        </h3>
                                        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed overflow-x-auto">
                                            {stepDetail.detailContent.template.text}
                                        </pre>
                                        <CopyButton text={stepDetail.detailContent.template.text} />
                                    </div>
                                </section>
                            )}

                        </div>

                        {/* Right Column: Checklist & Navigation */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">

                                {/* Checklist */}
                                <div className="bg-white border-2 border-[#00a0e9] rounded-xl p-6 shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                                        完了チェックリスト
                                    </h3>
                                    <div className="space-y-3">
                                        {stepDetail.detailContent.checklist.map((item, i) => (
                                            <label key={i} className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                                                <input type="checkbox" className="mt-1 w-5 h-5 text-[#00a0e9] rounded border-gray-300 focus:ring-[#00a0e9]" />
                                                <span className="ml-3 text-gray-700 text-sm leading-relaxed">
                                                    {item}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                        <p className="text-xs text-gray-500 mb-2">全てチェックしたら次のステップへ！</p>
                                        <Link href={`/start/${id}`} className="block w-full bg-[#00a0e9] text-white font-bold py-3 rounded-lg hover:bg-[#008bc9] transition-colors">
                                            ロードマップに戻る
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-xl">
                        <p className="text-gray-500">
                            このステップの詳細ガイドは現在準備中です。<br />
                            近日公開予定です。
                        </p>
                        <Link href={`/start/${id}`} className="inline-block mt-6 text-[#00a0e9] font-bold hover:underline">
                            ← ロードマップに戻る
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
