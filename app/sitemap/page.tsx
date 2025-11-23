import Link from 'next/link';

export default function SitemapPage() {
    const siteStructure = [
        {
            category: 'メインコンテンツ',
            pages: [
                { title: 'ホーム', url: '/', description: 'サイトトップページ' },
                { title: 'カテゴリー一覧', url: '/categories', description: '6つの収益化カテゴリーの概要' },
                { title: 'マインドセット', url: '/mindset', description: '成功するための心構えと考え方' },
                { title: 'スタートガイド', url: '/start', description: '収益化までの2ステップガイド' },
                { title: '当サイトについて', url: '/about', description: 'サイトの理念と運営方針' }
            ]
        },
        {
            category: 'カテゴリー別詳細',
            pages: [
                { title: 'フリーランス', url: '/category/freelance', description: 'スキルを売り物にする方法' },
                { title: 'アフィリエイト', url: '/category/affiliate', description: 'ブログで広告収入を得る方法' },
                { title: '投資', url: '/category/investment', description: '資産運用で将来に備える方法' },
                { title: 'コンテンツ販売', url: '/category/content-sales', description: '知識を商品化する方法' },
                { title: '副業全般', url: '/category/side-business', description: '会社員が安全に副業を始める方法' },
                { title: '物販・せどり', url: '/category/resale', description: '商品を仕入れて販売する方法' }
            ]
        },
        {
            category: 'ロードマップ',
            pages: [
                { title: 'フリーランスの始め方', url: '/start/freelance', description: '準備から成長までの完全ロードマップ' },
                { title: 'アフィリエイトの始め方', url: '/start/affiliate', description: 'ブログ開設から収益化まで' },
                { title: '投資の始め方', url: '/start/investment', description: '口座開設から積立投資まで' },
                { title: 'コンテンツ販売の始め方', url: '/start/content-sales', description: '企画から販売まで' },
                { title: '副業の始め方', url: '/start/side-business', description: '環境整備から実践まで' },
                { title: '物販の始め方', url: '/start/resale', description: 'リサーチから販売まで' }
            ]
        },
        {
            category: 'コミュニティ',
            pages: [
                { title: '成功事例インタビュー', url: '/success-stories', description: '実際に稼いでいる方々の体験談' },
                { title: '新着情報', url: '/news', description: 'サイトの更新情報' }
            ]
        },
        {
            category: 'サポート',
            pages: [
                { title: 'よくある質問（FAQ）', url: '/faq', description: '疑問や不安の解消' },
                { title: 'お問い合わせ', url: '/contact', description: 'サイトに関するご質問' },
                { title: 'サイトマップ', url: '/sitemap', description: 'このページ' }
            ]
        },
        {
            category: '規約・ポリシー',
            pages: [
                { title: '利用規約', url: '/terms', description: 'サイト利用のルール' },
                { title: 'プライバシーポリシー', url: '/privacy', description: '個人情報の取り扱い' },
                { title: '免責事項', url: '/disclaimer', description: '責任の範囲について' }
            ]
        }
    ];

    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        サイトマップ
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        当サイトの全ページを一覧でご確認いただけます。
                    </p>
                </div>

                {/* Sitemap */}
                <div className="max-w-5xl mx-auto space-y-12">
                    {siteStructure.map((section, idx) => (
                        <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#00a0e9]">
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {section.pages.map((page, pageIdx) => (
                                    <Link
                                        key={pageIdx}
                                        href={page.url}
                                        className="block p-4 border border-gray-200 rounded-lg hover:border-[#00a0e9] hover:bg-[#f0f9ff] transition-all group"
                                    >
                                        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#00a0e9] transition-colors">
                                            {page.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {page.description}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-2 font-mono">
                                            {page.url}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <div className="mt-12 text-center bg-gray-50 p-8 rounded-xl max-w-3xl mx-auto">
                    <p className="text-sm text-gray-600">
                        ※ 各ロードマップ内の詳細ステップページ（Deep Dive）は、<br />
                        各カテゴリーのロードマップページからアクセスできます。
                    </p>
                </div>
            </div>
        </div>
    );
}
