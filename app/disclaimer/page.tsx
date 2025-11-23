export default function DisclaimerPage() {
    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        免責事項
                    </h1>
                    <p className="text-gray-600">
                        最終更新日: 2024年11月1日
                    </p>
                </div>

                <div className="max-w-4xl mx-auto prose prose-lg">
                    {/* Important Notice */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-12 rounded-r-lg">
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                            <span className="mr-2">⚠️</span>
                            重要なお知らせ
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            当サイトの情報を利用する際は、必ずこの免責事項をお読みください。
                            当サイトを利用した時点で、本免責事項に同意したものとみなします。
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            1. 情報の正確性について
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            当サイトは、掲載する情報について細心の注意を払っておりますが、その正確性、完全性、有用性、安全性等について、いかなる保証もするものではありません。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            当サイトの情報は、予告なく変更または削除される場合があります。また、情報の更新が遅れる場合や、最新の情報でない場合があります。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            2. 収益の保証について
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            当サイトで紹介する方法やノウハウは、あくまで情報提供を目的としたものであり、収益や成果を保証するものではありません。
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            実際の収益は、個人の努力、スキル、市場環境、タイミングなど、様々な要因に左右されます。成功事例として紹介されている内容も、すべての方に当てはまるものではありません。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            当サイトの情報を利用した結果、期待した収益が得られなかった場合でも、当サイトは一切の責任を負いません。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            3. 投資・金融商品に関する免責
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            当サイトで紹介する投資や金融商品に関する情報は、一般的な情報提供を目的としたものであり、投資勧誘や金融商品の推奨を目的とするものではありません。
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            投資にはリスクが伴います。元本割れの可能性があることを十分にご理解ください。投資判断は、ご自身の責任において行ってください。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            当サイトの情報を利用した投資により損失が発生した場合でも、当サイトは一切の責任を負いません。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            4. 外部リンクについて
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            当サイトから外部サイトへのリンクが含まれている場合がありますが、リンク先のサイトの内容について、当サイトは一切の責任を負いません。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            リンク先のサイトをご利用になる場合は、各サイトの利用規約やプライバシーポリシーをご確認ください。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            5. アフィリエイトプログラムについて
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            また、その他のアフィリエイトプログラムに参加している場合があります。これらのリンクを経由して商品を購入された場合、当サイトに紹介料が支払われることがあります。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            6. 損害賠償の責任範囲
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            当サイトの情報を利用したことにより発生したあらゆる損害（直接的、間接的、特別、付随的、結果的損害を含む）について、当サイトは一切の責任を負いません。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            これには、利益の損失、データの損失、業務の中断、その他の金銭的損失が含まれますが、これらに限定されません。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            7. 法令遵守について
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            当サイトで紹介する方法を実践する際は、関連する法令を遵守してください。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            副業禁止規定、古物商許可、確定申告など、法的義務については、ご自身で確認し、必要な手続きを行ってください。法令違反により生じた損害について、当サイトは一切の責任を負いません。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            8. 免責事項の変更
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            当サイトは、本免責事項を予告なく変更することがあります。変更後の免責事項は、当サイトに掲載した時点から効力を生じるものとします。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            9. お問い合わせ
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            本免責事項に関するお問い合わせは、<a href="/contact" className="text-[#00a0e9] hover:underline">お問い合わせフォーム</a>よりお願いいたします。
                        </p>
                    </section>
                </div>

                {/* Related Links */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="bg-gray-50 p-8 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-4 text-center">
                            関連ページ
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/terms" className="text-[#00a0e9] hover:underline">
                                利用規約
                            </a>
                            <span className="text-gray-400">|</span>
                            <a href="/privacy" className="text-[#00a0e9] hover:underline">
                                プライバシーポリシー
                            </a>
                            <span className="text-gray-400">|</span>
                            <a href="/contact" className="text-[#00a0e9] hover:underline">
                                お問い合わせ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
