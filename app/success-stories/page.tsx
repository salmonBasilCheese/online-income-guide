export default function SuccessStoriesPage() {
    const stories = [
        {
            id: 1,
            name: '田中 健太さん（32歳）',
            category: 'フリーランス',
            achievement: '副業開始3ヶ月で月収10万円達成',
            period: '2024年6月〜',
            image: '👨‍💼',
            story: `
                会社員として働きながら、週末にWebライティングの副業を開始しました。
                最初は1文字0.5円の案件からスタートしましたが、実績を積み重ねることで
                3ヶ月後には1文字2円の案件を受注できるようになりました。
                
                現在は月に20本ほどの記事を執筆し、安定して月10万円の副収入を得ています。
            `,
            advice: '最初は単価が低くても、とにかく実績を作ることが大切です。丁寧な仕事を続ければ、必ず単価は上がります。'
        },
        {
            id: 2,
            name: '佐藤 美咲さん（28歳）',
            category: 'アフィリエイト',
            achievement: 'ブログ開設1年で月収5万円突破',
            period: '2023年4月〜',
            image: '👩‍💻',
            story: `
                育児中の専業主婦として、子どもが寝た後の時間を使ってブログを始めました。
                最初の半年間は収益ゼロでしたが、諦めずに記事を書き続けた結果、
                7ヶ月目に初めて1,000円の報酬が発生しました。
                
                現在は月間3万PVのブログに成長し、安定して月5万円の収益を得ています。
            `,
            advice: '最初の半年は本当に辛いですが、そこを乗り越えれば必ず結果はついてきます。継続は力なりです。'
        },
        {
            id: 3,
            name: '山田 大輔さん（45歳）',
            category: '投資',
            achievement: '積立投資5年で資産500万円達成',
            period: '2019年1月〜',
            image: '👨‍🏫',
            story: `
                40歳で将来の不安を感じ、つみたてNISAを開始しました。
                最初は月3万円からスタートし、昇給に合わせて徐々に増額。
                現在は月5万円を全世界株式インデックスファンドに積み立てています。
                
                5年間で元本300万円が500万円に成長し、老後への不安が大きく軽減されました。
            `,
            advice: '投資は早く始めるほど有利です。少額からでもいいので、今すぐ始めることをおすすめします。'
        },
        {
            id: 4,
            name: '鈴木 香織さん（35歳）',
            category: 'コンテンツ販売',
            achievement: 'noteで初月から3万円の売上',
            period: '2024年3月〜',
            image: '👩‍🎨',
            story: `
                前職で培ったSNS運用のノウハウをnoteにまとめて販売しました。
                価格は980円に設定し、Twitterで無料部分を公開したところ、
                初月で30部以上が売れ、3万円の売上を達成しました。
                
                現在は第2弾、第3弾も販売し、月平均で8万円ほどの収益になっています。
            `,
            advice: '自分の経験は必ず誰かの役に立ちます。「こんなこと誰でも知ってる」と思わず、勇気を出して発信してみてください。'
        }
    ];

    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        成功事例インタビュー
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        実際にオンライン収入を得ている方々の生の声をお届けします。<br />
                        あなたの一歩を踏み出す勇気になれば幸いです。
                    </p>
                </div>

                {/* Stories */}
                <div className="space-y-12">
                    {stories.map((story) => (
                        <div key={story.id} className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-6 mb-6">
                                <div className="text-6xl">{story.image}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-2xl font-bold text-gray-900">{story.name}</h2>
                                        <span className="bg-[#00a0e9] text-white text-xs px-3 py-1 rounded-full font-bold">
                                            {story.category}
                                        </span>
                                    </div>
                                    <p className="text-lg font-bold text-[#00a0e9] mb-1">{story.achievement}</p>
                                    <p className="text-sm text-gray-500">活動期間: {story.period}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                    <span className="text-xl mr-2">📖</span>
                                    ストーリー
                                </h3>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                        {story.story.trim()}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#fff9e6] border-l-4 border-[#ffc107] p-6 rounded-r-lg">
                                <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                                    <span className="mr-2">💡</span>
                                    これから始める方へのアドバイス
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {story.advice}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center bg-gradient-to-r from-[#e6f7ff] to-[#f0f9ff] p-12 rounded-xl">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        あなたも今日から始めてみませんか？
                    </h2>
                    <p className="text-gray-600 mb-6">
                        上記の方々も、最初は全くの初心者からスタートしました。
                    </p>
                    <a
                        href="/start"
                        className="inline-block bg-[#00a0e9] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#008bc9] transition-colors"
                    >
                        スタートガイドを見る
                    </a>
                </div>
            </div>
        </div>
    );
}
