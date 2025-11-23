import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="site-container">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="section-title">オンライン収入ガイドについて</h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        私たちは、誰もが経済的な不安から解放され、<br />
                        自分らしい人生を選択できる社会を目指しています。
                    </p>
                </div>

                {/* Mission Section */}
                <section className="mb-20">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#00a0e9] pl-4">
                                私たちのミッション
                            </h2>
                            <p className="text-gray-700 leading-loose mb-6">
                                インターネットの普及により、個人が収入を得る手段は劇的に増えました。
                                しかし、それと同時に「怪しい情報」や「再現性のないノウハウ」も溢れかえっています。
                            </p>
                            <p className="text-gray-700 leading-loose font-bold">
                                私たちは、誇張のない「リアルな情報」と、長期的な視点に基づいた「正しい知識」を提供することで、
                                あなたの経済的な自立をサポートします。
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-[#f0f9ff] p-10 rounded-lg border border-[#b3e0ff] text-center">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h3 className="text-xl font-bold text-[#0056b3] mb-2">信頼性の担保</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                当サイトの情報は、実体験および信頼できるデータに基づいています。
                                「楽して稼げる」といった甘い言葉ではなく、
                                努力と継続が必要な「ビジネスの本質」をお伝えします。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-20">
                    <h2 className="section-title mb-10">大切にしている3つの価値観</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="text-3xl mb-4 text-[#00a0e9]">01</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">リアリティ</h3>
                            <p className="text-gray-600 leading-relaxed">
                                成功の裏にある失敗や苦労も隠さずに伝えます。
                                綺麗な部分だけでなく、泥臭い現実も知ることが成功への近道です。
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="text-3xl mb-4 text-[#00a0e9]">02</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">長期的視点</h3>
                            <p className="text-gray-600 leading-relaxed">
                                一時的なお小遣い稼ぎではなく、
                                将来にわたって資産となるスキルや仕組みの構築を重視します。
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <div className="text-3xl mb-4 text-[#00a0e9]">03</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">自立と自由</h3>
                            <p className="text-gray-600 leading-relaxed">
                                最終的なゴールは、会社や場所に依存しない生き方です。
                                そのための選択肢を一つでも多く提供します。
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-12 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        まずは「知る」ことから始めましょう
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        どの方法が自分に合っているか分からない場合は、カテゴリー一覧から
                        興味のある分野を探してみてください。
                    </p>
                    <Link
                        href="/categories"
                        className="inline-block bg-[#00a0e9] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0080ba] transition-colors shadow-md"
                    >
                        カテゴリー一覧を見る
                    </Link>
                </div>

            </div>
        </div>
    );
}
