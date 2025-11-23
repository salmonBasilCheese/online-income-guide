export default function NewsPage() {
    const newsItems = [
        {
            id: 1,
            date: '2024年11月20日',
            category: 'お知らせ',
            title: 'サイトリニューアルのお知らせ',
            content: 'より使いやすく、より分かりやすいサイトを目指して、デザインと構成を全面的にリニューアルいたしました。各カテゴリーごとの詳細なロードマップや、ステップバイステップのアクションガイドを追加しています。'
        },
        {
            id: 2,
            date: '2024年11月15日',
            category: '新機能',
            title: '「Deep Dive」機能を追加しました',
            content: '各ロードマップのステップごとに、具体的なアクション、テンプレート、チェックリストを含む詳細ガイドページを追加しました。「何をすればいいか分からない」という悩みを解消します。'
        },
        {
            id: 3,
            date: '2024年11月10日',
            category: 'コンテンツ',
            title: '成功事例インタビューを公開しました',
            content: '実際にオンライン収入を得ている4名の方々のインタビューを公開しました。リアルな体験談とアドバイスをぜひご覧ください。'
        },
        {
            id: 4,
            date: '2024年11月5日',
            category: 'お知らせ',
            title: 'カテゴリー別スタートガイドを公開',
            content: 'フリーランス、アフィリエイト、投資、コンテンツ販売、副業、物販の6カテゴリーについて、初心者向けの詳細なロードマップを公開しました。'
        },
        {
            id: 5,
            date: '2024年11月1日',
            category: 'コンテンツ',
            title: 'マインドセットページを追加',
            content: 'オンライン収入を得るために必要な心構えや、挫折しないためのメンタル管理について解説したページを追加しました。'
        },
        {
            id: 6,
            date: '2024年10月25日',
            category: 'お知らせ',
            title: 'サイトを公開しました',
            content: 'オンライン収入ガイドを正式に公開いたしました。無料または低資金から始められる6つのカテゴリーについて、信頼できる情報を提供してまいります。'
        }
    ];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'お知らせ':
                return 'bg-blue-100 text-blue-800';
            case '新機能':
                return 'bg-green-100 text-green-800';
            case 'コンテンツ':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        新着情報
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        サイトの更新情報や新しいコンテンツのお知らせをお届けします。
                    </p>
                </div>

                {/* News List */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {newsItems.map((item) => (
                        <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                                <span className={`text-xs px-3 py-1 rounded-full font-bold ${getCategoryColor(item.category)}`}>
                                    {item.category}
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">
                                {item.title}
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Archive Notice */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-500">
                        過去のお知らせは随時アーカイブされます
                    </p>
                </div>
            </div>
        </div>
    );
}
