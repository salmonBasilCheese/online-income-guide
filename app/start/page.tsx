import Link from 'next/link';

export default function StartPage() {
    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="site-container">
                <div className="text-center mb-16">
                    <h1 className="section-title">スタートガイド</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        何から始めればいいかわからない方へ。<br />
                        収益化までの道のりを2つのステップで解説します。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Step 01: Mindset */}
                    <section className="mb-20">
                        <div className="flex items-center mb-8">
                            <div className="bg-[#00a0e9] text-white font-bold px-6 py-2 rounded-r-full text-lg shadow-md -ml-4 md:-ml-8 z-10">
                                STEP 01
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 ml-6">マインドセットを整える</h2>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-loose mb-6">
                                    手法を学ぶ前に、まずは「稼ぐための考え方」を身につけることが最重要です。
                                    多くの人が挫折するのは、手法が悪いのではなく、マインドセットが整っていないからです。
                                </p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-[#00a0e9] mr-2">✔</span>
                                        「楽して稼げる」という幻想を捨てる
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-[#00a0e9] mr-2">✔</span>
                                        失敗は「データ収集」と捉える
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-[#00a0e9] mr-2">✔</span>
                                        長期的な視点を持つ（死の谷を越える）
                                    </li>
                                </ul>
                                <Link href="/mindset" className="text-[#00a0e9] font-bold hover:underline">
                                    マインドセットについて詳しく学ぶ →
                                </Link>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className="w-full max-w-xs bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-400">
                                    {/* イメージイラスト（後ほど追加） */}
                                    <span className="text-4xl">🧠</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="h-8 border-l-2 border-dashed border-gray-300 ml-16 md:ml-[16.66%]"></div>

                    {/* Step 02: Category Selection */}
                    <section className="mb-20">
                        <div className="flex items-center mb-8">
                            <div className="bg-[#00a0e9] text-white font-bold px-6 py-2 rounded-r-full text-lg shadow-md -ml-4 md:-ml-8 z-10">
                                STEP 02
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 ml-6">自分に合った方法を選ぶ</h2>
                        </div>
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                            <p className="text-gray-700 leading-loose mb-6">
                                あなたの性格、使える時間、資金、目標金額によって、最適な副業は異なります。
                                以下のカテゴリー一覧から、自分に興味があるもの、続けられそうなものを選んでください。
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* 簡易カテゴリーリンク */}
                                {['フリーランス', 'アフィリエイト', '資産運用', 'コンテンツ販売', '副業全般', '物販・せどり'].map((cat, i) => (
                                    <div key={i} className="bg-gray-50 p-4 rounded text-center border border-gray-100 text-gray-600 font-bold">
                                        {cat}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <Link href="/categories" className="inline-block bg-[#00a0e9] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0080ba] transition-colors shadow-md">
                                    カテゴリー一覧を見る
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
