import Link from 'next/link';
import { notFound } from 'next/navigation';

// カテゴリーデータの定義
const categories = {
    freelance: {
        title: 'フリーランス',
        subtitle: 'スキルを活かして働く',
        description: 'プログラミング、デザイン、ライティングなど、あなたの専門スキルを企業や個人に提供して報酬を得る働き方です。場所や時間にとらわれず、自分のペースで働けるのが最大の魅力です。',
        pros: ['働く場所と時間を自由に選べる', '収入の上限がない（スキル次第）', '人間関係のストレスが少ない'],
        cons: ['収入が不安定になりがち', '自己管理能力が必須', '社会的信用が会社員より低い場合がある'],
        steps: [
            '自分の「売り物（スキル）」を明確にする',
            'クラウドソーシングサイト（CrowdWorksなど）に登録する',
            'プロフィールを充実させ、安価な案件から実績を作る',
            '徐々に単価を上げ、直接契約を目指す'
        ]
    },
    affiliate: {
        title: 'アフィリエイト',
        subtitle: '商品紹介で収益化',
        description: 'ブログやSNSで企業の商品やサービスを紹介し、そこから購入や申し込みが発生した場合に成果報酬を受け取る仕組みです。初期費用がほとんどかからず、在庫を持つリスクもありません。',
        pros: ['初期費用が安く、リスクが低い', '一度仕組みを作れば不労所得に近い収入になる', 'マーケティングスキルが身につく'],
        cons: ['収益化までに時間がかかる（半年〜1年以上）', 'Googleの検索アルゴリズムの影響を受けやすい', '継続的な記事更新が必要'],
        steps: [
            '発信するジャンル（テーマ）を決める',
            'WordPressでブログを開設する',
            'ASP（A8.netなど）に登録し、紹介する商品を探す',
            '読者の悩みを解決する記事を書き続ける'
        ]
    },
    investment: {
        title: '資産運用',
        subtitle: 'お金に働いてもらう',
        description: '株式、投資信託、不動産などにお金を投じ、そこから得られる配当や値上がり益で資産を増やす方法です。労働収入だけでなく、資産収入（不労所得）を得るための重要な手段です。',
        pros: ['労働時間を増やさずに収入を増やせる', '複利効果で雪だるま式に資産が増える', 'インフレ（物価上昇）対策になる'],
        cons: ['元本割れのリスクがある', 'ある程度の元手資金が必要', '短期で大きく稼ぐのは難しい（投機になる）'],
        steps: [
            '生活防衛資金（生活費の3〜6ヶ月分）を貯める',
            '証券口座（楽天証券、SBI証券など）を開設する',
            'NISA（少額投資非課税制度）を活用する',
            '全世界株式やS&P500などのインデックスファンドを毎月積み立てる'
        ]
    },
    'content-sales': {
        title: 'コンテンツ販売',
        subtitle: '知識を販売する',
        description: 'あなたの持っている知識、経験、ノウハウを文章、動画、音声などのデジタルコンテンツとして販売するビジネスです。note、Brain、Udemyなどのプラットフォームを活用します。',
        pros: ['利益率が極めて高い（ほぼ100%）', '在庫リスクがなく、複製コストがゼロ', '自分の強みを活かせる'],
        cons: ['実績や権威性がないと売れにくい', 'コンテンツの品質が低いとクレームになる', '集客スキルが必須'],
        steps: [
            '誰のどんな悩みを解決するか決める',
            'SNSで情報発信をし、ファン（見込み客）を集める',
            '無料プレゼントなどで信頼を構築する',
            '有料商品を販売する'
        ]
    },
    'side-business': {
        title: '副業全般',
        subtitle: '隙間時間の活用',
        description: '本業を持ちながら、空いた時間を使って収入を得る活動全般を指します。データ入力、アンケートモニター、ポイント活動（ポイ活）、Uber Eatsなど、特別なスキルがなくても始められるものも多くあります。',
        pros: ['即金性が高いものが多い', '本業以外の収入源がある安心感', '様々な仕事を体験できる'],
        cons: ['時間の切り売りになりがち（労働集約型）', '本業との両立で疲弊するリスク', '大きく稼ぐのは難しい場合がある'],
        steps: [
            '使える時間（平日夜、土日など）を把握する',
            'スマホやPCでできる簡単な案件を探す',
            '実際にやってみて、自分に合うものを探す',
            '慣れてきたら、より単価の高い仕事に挑戦する'
        ]
    },
    resale: {
        title: '物販・せどり',
        subtitle: '安く仕入れて高く売る',
        description: '店舗やネットショップで安く商品を仕入れ、Amazonやメルカリなどで高く販売して差額（利益）を得るビジネスです。商売の基本であり、結果が出るのが早いのが特徴です。',
        pros: ['即金性が高く、結果が出やすい', '特別なスキルがなくても始められる', 'ビジネスの基本（安く買って高く売る）が学べる'],
        cons: ['仕入れ資金が必要', '在庫を抱えるリスクがある', '梱包・発送作業の手間がかかる'],
        steps: [
            '不用品販売から始めて、メルカリの使い方を覚える',
            'リサイクルショップやセール品で利益商品を探す',
            'AmazonのFBA（配送代行）などを利用して効率化する',
            '仕入れジャンルを広げていく'
        ]
    }
};

type CategoryKey = keyof typeof categories;

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const category = categories[id as CategoryKey];

    if (!category) {
        notFound();
    }

    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="site-container">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <Link href="/categories" className="text-[#00a0e9] hover:underline mb-4 inline-block">
                        ← カテゴリー一覧に戻る
                    </Link>
                    <h1 className="section-title mb-4">{category.title}</h1>
                    <p className="text-xl text-[#00a0e9] font-bold mb-6">{category.subtitle}</p>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-loose">
                        {category.description}
                    </p>
                </div>

                {/* Pros & Cons Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-[#f0f9ff] p-8 rounded-lg border border-[#b3e0ff]">
                        <h2 className="text-xl font-bold text-[#0056b3] mb-6 flex items-center">
                            <span className="bg-[#0056b3] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">👍</span>
                            メリット
                        </h2>
                        <ul className="space-y-3">
                            {category.pros.map((pro, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <span className="text-[#00a0e9] mr-2">✔</span>
                                    {pro}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#fff5f5] p-8 rounded-lg border border-[#ffcccc]">
                        <h2 className="text-xl font-bold text-[#cc0000] mb-6 flex items-center">
                            <span className="bg-[#cc0000] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">⚠️</span>
                            デメリット・注意点
                        </h2>
                        <ul className="space-y-3">
                            {category.cons.map((con, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <span className="text-[#cc0000] mr-2">!</span>
                                    {con}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">始め方のステップ</h2>
                    <div className="space-y-6">
                        {category.steps.map((step, index) => (
                            <div key={index} className="flex items-center bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <span className="text-3xl font-bold text-[#00a0e9] opacity-30 mr-6 w-12 text-right">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <p className="text-lg text-gray-800 font-bold">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Link
                        href={`/start/${id}`}
                        className="inline-block bg-[#00a0e9] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0080ba] transition-colors shadow-lg"
                    >
                        {category.title}の具体的な始め方を見る →
                    </Link>
                </div>
            </div>
        </div>
    );
}
