import Link from 'next/link';

export default function MindsetPage() {
    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="site-container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-[#e6f7ff] text-[#0056b3] px-4 py-1 rounded-full text-sm font-bold mb-4">
                            重要コンテンツ
                        </span>
                        <h1 className="section-title">成功のためのマインドセット</h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            オンラインでの収益化において、最も重要なのは「手法」ではなく「考え方」です。<br />
                            一時的な成功ではなく、長期的に安定した成果を出すための土台を作ります。
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#00a0e9] pl-4">
                            1. 「楽して稼げる」という幻想を捨てる
                        </h2>
                        <div className="bg-[#f9fafb] p-8 rounded-lg border border-gray-200">
                            <p className="text-gray-700 leading-loose mb-4">
                                インターネット上には「1日5分で月収100万円」といった甘い言葉が溢れていますが、これらは例外なく詐欺か、再現性のないものです。
                                ビジネスの本質は「価値の提供」にあります。価値を提供できるようになるまでは、地道な学習と作業が必要です。
                            </p>
                            <p className="text-gray-700 leading-loose font-bold">
                                「魔法の杖」を探すのをやめ、着実にスキルを積み上げる覚悟を持ちましょう。
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#00a0e9] pl-4">
                            2. 収益ゼロの期間（死の谷）を乗り越える
                        </h2>
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-loose mb-4">
                                    開始直後は、どれだけ作業しても結果が出ない期間が必ずあります。これを「死の谷」と呼びます。
                                    多くの人はここで挫折しますが、これは成長曲線において正常なプロセスです。
                                </p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2 bg-[#f0f4f8] p-4 rounded">
                                    <li>最初の3ヶ月は収益ゼロが当たり前</li>
                                    <li>結果は指数関数的に現れる（最初は横ばい）</li>
                                    <li>他人と比較せず、昨日の自分と比較する</li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 bg-gray-100 h-48 rounded flex items-center justify-center text-gray-400 text-sm border border-gray-200">
                                [成長曲線のグラフイメージ]
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#00a0e9] pl-4">
                            3. 投資対効果（ROI）を意識する
                        </h2>
                        <p className="text-gray-700 leading-loose mb-6">
                            時間は有限です。全ての作業において「これは将来の資産になるか？」を問いかけましょう。
                            単発の労働収入（フロー型）だけでなく、積み上げ型の資産収入（ストック型）を意識して構築することが、自由への近道です。
                        </p>
                    </section>

                    {/* CTA */}
                    <div className="bg-[#0056b3] text-white p-10 rounded-xl text-center shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">準備はできましたか？</h3>
                        <p className="mb-8 opacity-90">
                            正しいマインドセットができたら、次は具体的な方法を選びましょう。
                        </p>
                        <Link
                            href="/categories"
                            className="inline-block bg-white text-[#0056b3] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            カテゴリー一覧へ進む
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
