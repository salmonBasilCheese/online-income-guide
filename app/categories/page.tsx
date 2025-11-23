import Link from 'next/link';

export default function CategoriesPage() {
    const categories = [
        {
            id: 'freelance',
            title: 'フリーランス',
            desc: 'スキルを活かして働く',
            details: 'プログラミング、デザイン、ライティングなど、専門スキルを提供して報酬を得る方法です。',
            icon: '💼'
        },
        {
            id: 'affiliate',
            title: 'アフィリエイト',
            desc: '商品紹介で収益化',
            details: 'ブログやSNSで商品を紹介し、購入されると成果報酬が得られる仕組みです。',
            icon: '📝'
        },
        {
            id: 'investment',
            title: '資産運用',
            desc: 'お金に働いてもらう',
            details: '株式投資、投資信託、NISAなどを活用し、長期的な資産形成を目指します。',
            icon: '📈'
        },
        {
            id: 'content-sales',
            title: 'コンテンツ販売',
            desc: '知識を販売する',
            details: 'noteやUdemyなどで、自分の知識やノウハウをデジタルコンテンツとして販売します。',
            icon: '📚'
        },
        {
            id: 'side-business',
            title: '副業全般',
            desc: '隙間時間の活用',
            details: 'データ入力、ポイ活、アンケートモニターなど、手軽に始められる副業を紹介します。',
            icon: '💻'
        },
        {
            id: 'resale',
            title: '物販・せどり',
            desc: '安く仕入れて高く売る',
            details: '商品の価格差を利用して利益を得る、商売の基本となるビジネスモデルです。',
            icon: '📦'
        }
    ];

    return (
        <div className="py-16 bg-[#f0f4f8] min-h-screen">
            <div className="site-container">
                <div className="text-center mb-12">
                    <h1 className="section-title">カテゴリー一覧</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        あなたの興味やスキル、ライフスタイルに合った収益化の方法を見つけましょう。<br />
                        各カテゴリーでは、基礎知識から実践的なノウハウまでを網羅しています。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/category/${cat.id}`}
                            className="info-card group hover:border-[#00a0e9] block h-full"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-4xl bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {cat.icon}
                                </div>
                                <span className="text-[#00a0e9] text-sm font-bold border border-[#00a0e9] px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    詳細を見る
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00a0e9] transition-colors">
                                {cat.title}
                            </h2>
                            <p className="text-sm font-bold text-gray-500 mb-3">
                                {cat.desc}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {cat.details}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
