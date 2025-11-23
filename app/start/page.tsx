import Link from 'next/link';

export default function StartPage() {
    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="site-container">
                <div className="text-center mb-16">
                    <h1 className="section-title">スタートガイド</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        何から始めればいいかわからない方へ。<br />
                        収益化までの道のりを3つのステップで解説します。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 flex-shrink-0">
                            <div className="bg-[#e6f7ff] text-[#00a0e9] h-full min-h-[200px] rounded-xl flex flex-col items-center justify-center p-6 border border-[#b3e0ff]">
                                <span className="text-6xl font-bold opacity-20 mb-2">01</span>
                                <h2 className="text-2xl font-bold">現状把握と<br />目標設定</h2>
                            </div>
                        </div>
                        <div className="md:w-2/3 py-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">なぜ稼ぎたいのかを明確にする</h3>
                            <p className="text-gray-700 leading-loose mb-4">
                                まずは目的を明確にしましょう。「月5万円の副収入が欲しい」「将来的に独立したい」「スキルを身につけたい」など、目的によって選ぶべき手段は異なります。
                            </p>
                            <div className="bg-gray-50 p-4 rounded border border-gray-200">
                                <p className="font-bold text-sm text-gray-600 mb-2">チェックリスト</p>
                                <ul className="list-none space-y-2 text-sm text-gray-700">
                                    <li className="flex items-center gap-2">✅ 確保できる作業時間はどれくらいか？</li>
                                    <li className="flex items-center gap-2">✅ 使える初期費用はあるか？</li>
                                    <li className="flex items-center gap-2">✅ 興味のある分野は何か？</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="h-8 border-l-2 border-dashed border-gray-300 ml-16 md:ml-[16.66%]"></div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 flex-shrink-0">
                            <div className="bg-[#e6f7ff] text-[#00a0e9] h-full min-h-[200px] rounded-xl flex flex-col items-center justify-center p-6 border border-[#b3e0ff]">
                                <span className="text-6xl font-bold opacity-20 mb-2">02</span>
                                <h2 className="text-2xl font-bold">カテゴリー<br />の選択</h2>
                            </div>
                        </div>
                        <div className="md:w-2/3 py-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">自分に合った方法を選ぶ</h3>
                            <p className="text-gray-700 leading-loose mb-4">
                                目標に合わせて、取り組むカテゴリーを選びます。初心者は「リスクが低く」「スキルが身につく」ものから始めるのがおすすめです。
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                <Link href="/categories" className="text-[#00a0e9] font-bold hover:underline">
                                    カテゴリー一覧を見る →
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="h-8 border-l-2 border-dashed border-gray-300 ml-16 md:ml-[16.66%]"></div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 flex-shrink-0">
                            <div className="bg-[#e6f7ff] text-[#00a0e9] h-full min-h-[200px] rounded-xl flex flex-col items-center justify-center p-6 border border-[#b3e0ff]">
                                <span className="text-6xl font-bold opacity-20 mb-2">03</span>
                                <h2 className="text-2xl font-bold">学習と<br />実践</h2>
                            </div>
                        </div>
                        <div className="md:w-2/3 py-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">小さく始めて、継続する</h3>
                            <p className="text-gray-700 leading-loose mb-4">
                                完璧を目指さず、まずは行動に移しましょう。失敗は学びの一部です。
                                マインドセットを保ちながら、コツコツと継続することが成功への唯一の道です。
                            </p>
                            <Link
                                href="/mindset"
                                className="inline-block bg-gray-900 text-white px-6 py-2 rounded text-sm font-bold hover:bg-gray-700 transition-colors"
                            >
                                マインドセットを学ぶ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
