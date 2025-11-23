export default function TermsPage() {
    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        利用規約
                    </h1>
                    <p className="text-gray-600">
                        最終更新日: 2024年11月1日
                    </p>
                </div>

                <div className="max-w-4xl mx-auto prose prose-lg">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            第1条（適用）
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            本利用規約（以下「本規約」といいます）は、当サイト「オンライン収入ガイド」（以下「当サイト」といいます）が提供するすべてのサービス（以下「本サービス」といいます）の利用条件を定めるものです。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            利用者の皆様（以下「ユーザー」といいます）には、本規約に従って本サービスをご利用いただきます。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            第2条（利用登録）
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            当サイトは会員登録を必要とせず、すべてのコンテンツを無料で閲覧できます。本サイトにアクセスした時点で、本規約に同意したものとみなします。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            第3条（禁止事項）
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>当サイトのコンテンツを無断で複製、転載、改変する行為</li>
                            <li>当サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                            <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
                            <li>不正アクセスをし、またはこれを試みる行為</li>
                            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                            <li>不正な目的を持って本サービスを利用する行為</li>
                            <li>当サイトの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
                            <li>当サイトが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
                            <li>その他、当サイトが不適切と判断する行為</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            第4条（本サービスの提供の停止等）
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            当サイトは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                            <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                            <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                            <li>その他、当サイトが本サービスの提供が困難と判断した場合</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            第5条（著作権）
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            当サイトに掲載されているコンテンツ（文章、画像、動画、プログラムなど）の著作権は、当サイトまたは正当な権利を有する第三者に帰属します。ユーザーは、当サイトの事前の許可なく、これらのコンテンツを複製、転載、改変、公衆送信等することはできません。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            第6条（免責事項）
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            当サイトは、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            詳細は<a href="/disclaimer" className="text-[#00a0e9] hover:underline">免責事項</a>をご確認ください。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            第7条（利用規約の変更）
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            当サイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の本規約は、当サイトに掲載した時点から効力を生じるものとします。
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#00a0e9]">
                            第8条（準拠法・裁判管轄）
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            本規約の解釈にあたっては、日本法を準拠法とします。
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            本サービスに関して紛争が生じた場合には、当サイトの所在地を管轄する裁判所を専属的合意管轄とします。
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
                            <a href="/privacy" className="text-[#00a0e9] hover:underline">
                                プライバシーポリシー
                            </a>
                            <span className="text-gray-400">|</span>
                            <a href="/disclaimer" className="text-[#00a0e9] hover:underline">
                                免責事項
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
