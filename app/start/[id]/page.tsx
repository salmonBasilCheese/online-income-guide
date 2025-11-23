import Link from 'next/link';
import { notFound } from 'next/navigation';

// 詳細なロードマップデータ
const roadmaps = {
    freelance: {
        title: 'フリーランスの始め方',
        description: 'スキルを売り物にして、最初の1円を稼ぐまでの完全ロードマップ',
        phases: [
            {
                title: 'Phase 1: 準備編（1週間目）',
                steps: [
                    {
                        head: '自分の「売り物」を決める',
                        desc: '「何ができるか」ではなく「誰の何の役に立てるか」を言語化します。例：×プログラミングができる → ○LP制作で集客を支援できる'
                    },
                    {
                        head: 'ポートフォリオを準備する',
                        desc: '実績がなくても大丈夫です。架空の案件や、過去の学習成果をまとめて「何ができるか」を可視化しましょう。Notionや無料のHP作成ツールでOKです。'
                    },
                    {
                        head: 'クラウドソーシングに登録する',
                        desc: 'まずは「クラウドワークス」と「ランサーズ」の2大サイトに登録。プロフィール写真は清潔感のあるものを、自己紹介文は「クライアント視点」で丁寧に書きましょう。'
                    }
                ]
            },
            {
                title: 'Phase 2: 実践編（2週間目〜1ヶ月目）',
                steps: [
                    {
                        head: 'タスク案件で実績を作る（評価1〜5件）',
                        desc: 'まずはアンケート回答やデータ入力などの簡単な「タスク案件」をこなし、プラットフォームの使い方に慣れつつ、評価（★5）を貯めます。'
                    },
                    {
                        head: 'プロジェクト案件に応募する',
                        desc: 'いよいよ本番です。募集要項を熟読し、「コピペではない」提案文を作成して応募します。最初は10件応募して1件通れば良い方です。めげずに応募し続けましょう。'
                    },
                    {
                        head: '納期を守り、丁寧なコミュニケーションをとる',
                        desc: 'スキル以上に重要なのが「信頼」です。即レス、納期厳守、丁寧な言葉遣いを徹底すれば、必ずリピーターがつきます。'
                    }
                ]
            },
            {
                title: 'Phase 3: 成長編（2ヶ月目以降）',
                steps: [
                    {
                        head: '単価交渉をする',
                        desc: '信頼関係ができたら、次の発注時に少し単価アップを相談してみましょう。または、より高単価な案件に挑戦します。'
                    },
                    {
                        head: 'SNSで発信する',
                        desc: 'Twitter(X)などで活動を発信し、直接契約（直営業）のルートを開拓します。手数料が引かれない分、利益率が上がります。'
                    }
                ]
            }
        ]
    },
    affiliate: {
        title: 'アフィリエイトの始め方',
        description: 'ブログを開設し、記事を書いて収益化するまでの完全ロードマップ',
        phases: [
            {
                title: 'Phase 1: 環境構築（1週間目）',
                steps: [
                    {
                        head: 'ジャンル（参入領域）を決める',
                        desc: '「自分が興味がある・詳しい」かつ「広告案件がある」ジャンルを選びます。HARMの法則（Health, Ambition, Relation, Money）に関連する分野が収益化しやすいです。'
                    },
                    {
                        head: 'WordPressブログを開設する',
                        desc: '無料ブログ（Amebaなど）ではなく、WordPress一択です。レンタルサーバー（ConoHa WINGやXserver）を契約し、ドメインを取得してインストールします。'
                    },
                    {
                        head: 'ASPに登録する',
                        desc: '広告案件を探すためにASP（A8.net、もしもアフィリエイトなど）に登録します。まずは審査のないA8.netから始めましょう。'
                    }
                ]
            },
            {
                title: 'Phase 2: 記事執筆（1ヶ月目〜3ヶ月目）',
                steps: [
                    {
                        head: 'キーワード選定をする',
                        desc: '「ラッコキーワード」などのツールを使い、ユーザーが検索しそうなキーワード（悩み）をリストアップします。'
                    },
                    {
                        head: '読者の悩みを解決する記事を書く',
                        desc: '日記ではありません。「誰の、どんな悩みを、どうやって解決するか」を意識して記事を書きます。まずは10記事を目指しましょう。'
                    },
                    {
                        head: '集客記事と収益記事を使い分ける',
                        desc: 'アクセスを集めるための「集客記事」と、商品を売るための「収益記事（キラーページ）」を意識して書き分け、内部リンクで繋ぎます。'
                    }
                ]
            },
            {
                title: 'Phase 3: 分析と改善（4ヶ月目以降）',
                steps: [
                    {
                        head: 'Google Search Consoleで分析する',
                        desc: 'どのキーワードで検索されているかを確認し、順位が低い記事をリライト（修正）して順位を上げます。'
                    },
                    {
                        head: 'SNSと連携する',
                        desc: 'SEO（検索流入）だけに頼らず、TwitterやInstagramで記事を紹介して流入経路を増やします。'
                    }
                ]
            }
        ]
    },
    investment: {
        title: '資産運用の始め方',
        description: '少額から始めて、将来の資産を築くための完全ロードマップ',
        phases: [
            {
                title: 'Phase 1: 基礎知識と口座開設（1週間目）',
                steps: [
                    {
                        head: '生活防衛資金を確保する',
                        desc: '投資は余剰資金で行うのが鉄則です。生活費の3〜6ヶ月分は現金として確保し、それ以外のお金を投資に回します。'
                    },
                    {
                        head: '証券口座を開設する',
                        desc: '手数料が安いネット証券（SBI証券や楽天証券）を選びましょう。口座開設は無料です。'
                    },
                    {
                        head: 'NISA（少額投資非課税制度）を申し込む',
                        desc: '利益に税金がかからないNISA口座を必ず利用しましょう。これは国が用意した最強の優遇制度です。'
                    }
                ]
            },
            {
                title: 'Phase 2: 積立開始（1ヶ月目）',
                steps: [
                    {
                        head: '投資信託（インデックスファンド）を選ぶ',
                        desc: '全世界株式（オール・カントリー）やS&P500（米国株式）に連動する、手数料（信託報酬）の安いファンドを選びます。'
                    },
                    {
                        head: 'クレジットカード積立を設定する',
                        desc: '毎月自動で買い付ける設定をします。クレカ積立ならポイントも貯まってお得です。月100円からでも始められます。'
                    }
                ]
            },
            {
                title: 'Phase 3: 継続と放置（2ヶ月目以降）',
                steps: [
                    {
                        head: '相場を見ない（気絶投資）',
                        desc: '株価は毎日変動しますが、一喜一憂してはいけません。長期投資のコツは「忘れること」です。淡々と積立を続けます。'
                    },
                    {
                        head: '入金力を高める',
                        desc: '投資の種銭を増やすために、副業で稼いだお金や、節約で浮いたお金を追加投資に回します。これが資産形成のスピードを加速させます。'
                    }
                ]
            }
        ]
    },
    'content-sales': {
        title: 'コンテンツ販売の始め方',
        description: '自分の知識をデジタル商品にして販売する完全ロードマップ',
        phases: [
            {
                title: 'Phase 1: 商品企画（1週間目）',
                steps: [
                    {
                        head: '「誰のどんな悩み」を解決するか決める',
                        desc: '自分が過去に乗り越えた悩みや、人より少し得意なことをテーマにします。「HSPの仕事術」「初心者向け動画編集講座」など。'
                    },
                    {
                        head: 'プラットフォームを決める',
                        desc: '最初は「note」や「Brain」などのプラットフォームを利用するのが簡単です。決済システムも用意されています。'
                    }
                ]
            },
            {
                title: 'Phase 2: コンテンツ制作（2週間目〜1ヶ月目）',
                steps: [
                    {
                        head: '目次（構成）を作る',
                        desc: 'いきなり書き始めず、まずは目次を作って全体の流れを整理します。読者がステップバイステップで実践できる構成がベストです。'
                    },
                    {
                        head: '執筆・制作する',
                        desc: 'テキスト、動画、音声など、自分に合った形式でコンテンツを作ります。最初はテキスト（記事）が修正もしやすくおすすめです。'
                    }
                ]
            },
            {
                title: 'Phase 3: 販売と集客（1ヶ月目以降）',
                steps: [
                    {
                        head: '無料部分で価値を提供する',
                        desc: 'コンテンツの冒頭や、SNSでの発信で「無料でもこんなに役立つ」と思ってもらうことが重要です。信頼がなければ商品は売れません。'
                    },
                    {
                        head: 'モニターを募集して感想をもらう',
                        desc: '最初は低価格や無料で提供し、感想（レビュー）を集めます。レビューが集まると、後から来た人が安心して購入できるようになります。'
                    }
                ]
            }
        ]
    },
    'side-business': {
        title: '副業全般の始め方',
        description: '会社員を続けながら、安全に月5万円を目指すロードマップ',
        phases: [
            {
                title: 'Phase 1: 環境整備（1週間目）',
                steps: [
                    {
                        head: '就業規則を確認する',
                        desc: '会社の就業規則を確認しましょう。副業禁止でも、ポイ活や資産運用は問題ない場合が多いです。'
                    },
                    {
                        head: '時間の棚卸しをする',
                        desc: '1日のスケジュールを書き出し、副業に使える「隙間時間」を見つけます。通勤時間、テレビを見ている時間などを活用します。'
                    }
                ]
            },
            {
                title: 'Phase 2: 即金性の高いものから（1ヶ月目）',
                steps: [
                    {
                        head: '不用品販売（メルカリ）',
                        desc: '家にある不用品を売ってみましょう。ネットでお金を稼ぐ感覚と、発送などの手続きを学べます。部屋も片付いて一石二鳥です。'
                    },
                    {
                        head: '自己アフィリエイト（セルフバック）',
                        desc: 'A8.netなどのASP経由で、クレジットカード作成や資料請求を自分で行い、報酬を得ます。数万円ならすぐに稼げます（単発ですが）。'
                    }
                ]
            },
            {
                title: 'Phase 3: スキル型副業へ移行（2ヶ月目以降）',
                steps: [
                    {
                        head: '興味のあるスキルを選ぶ',
                        desc: '即金系の副業で稼いだ資金を元手に、Webライティングや動画編集などの「スキル」を学び始めます。'
                    },
                    {
                        head: '小さく始める',
                        desc: 'いきなり高額なスクールに入らず、YouTubeや書籍で独学するか、安価な教材から始めましょう。'
                    }
                ]
            }
        ]
    },
    resale: {
        title: '物販・せどりの始め方',
        description: '安く仕入れて高く売る、商売の基本をマスターするロードマップ',
        phases: [
            {
                title: 'Phase 1: 準備とリサーチ（1週間目）',
                steps: [
                    {
                        head: '古物商許可の申請（必要に応じて）',
                        desc: '中古品を扱う場合は警察署で「古物商許可」を申請します。新品のみを扱う場合は不要ですが、長くやるなら取得がおすすめです。'
                    },
                    {
                        head: 'リサーチツールを入れる',
                        desc: 'Amazonの価格推移が見れる「Keepa」などのツールを導入し、いくらで売れているかを確認できるようにします。'
                    }
                ]
            },
            {
                title: 'Phase 2: 仕入れと販売（1ヶ月目）',
                steps: [
                    {
                        head: '店舗せどりから始める',
                        desc: 'ブックオフやドン・キホーテなどの実店舗に行き、セール品やワゴン品をリサーチします。利益が出る商品が見つかったら仕入れます。'
                    },
                    {
                        head: 'Amazon FBAを利用する',
                        desc: '商品の保管・梱包・発送をAmazonが代行してくれる「FBA」を利用すると、副業でも大量の商品を扱えます。'
                    }
                ]
            },
            {
                title: 'Phase 3: 効率化と拡大（3ヶ月目以降）',
                steps: [
                    {
                        head: '電脳せどり（ネット仕入れ）に挑戦',
                        desc: '店舗に行かず、楽天やヤフオクなどネットで仕入れてAmazonで売る手法に広げます。'
                    },
                    {
                        head: 'ジャンルを特化する',
                        desc: '「家電」「古着」「本」など、得意なジャンルを作ると、目利き力が上がり、リサーチ時間が短縮されます。'
                    }
                ]
            }
        ]
    }
};

export default async function StartGuidePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const roadmap = roadmaps[id as keyof typeof roadmaps];

    if (!roadmap) {
        notFound();
    }

    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-[#e6f7ff] text-[#0056b3] px-4 py-1 rounded-full text-sm font-bold mb-4">
                        実践ロードマップ
                    </span>
                    <h1 className="section-title">{roadmap.title}</h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        {roadmap.description}
                    </p>
                </div>

                {/* Roadmap Steps */}
                <div className="max-w-4xl mx-auto space-y-12">
                    {roadmap.phases.map((phase, index) => (
                        <div key={index} className="relative">
                            {/* Phase Header */}
                            <div className="flex items-center mb-8">
                                <div className="bg-[#00a0e9] text-white font-bold px-6 py-2 rounded-r-full text-lg shadow-md -ml-4 md:-ml-8 z-10">
                                    {phase.title}
                                </div>
                                <div className="h-px bg-gray-200 flex-grow ml-4"></div>
                            </div>

                            {/* Steps */}
                            <div className="space-y-6 pl-4 md:pl-8 border-l-2 border-dashed border-gray-200 ml-4 md:ml-0">
                                {phase.steps.map((step, stepIndex) => (
                                    <div key={stepIndex} className="relative bg-[#f8f9fa] p-6 rounded-lg border border-gray-100 hover:border-[#00a0e9] transition-colors group">
                                        {/* Circle Indicator */}
                                        <div className="absolute -left-[25px] md:-left-[41px] top-6 w-4 h-4 rounded-full bg-white border-4 border-[#00a0e9] group-hover:scale-125 transition-transform"></div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                                            <span className="bg-white text-[#00a0e9] border border-[#00a0e9] w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                                                {stepIndex + 1}
                                            </span>
                                            {step.head}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed pl-11">
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <div className="bg-[#0056b3] text-white p-10 rounded-xl shadow-lg max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">まずは「Phase 1」の最初のステップから</h3>
                        <p className="mb-8 opacity-90">
                            全てを一度にやる必要はありません。<br />
                            まずは今日、最初の1つだけをクリアしてください。それが大きな一歩になります。
                        </p>
                        <Link
                            href="/categories"
                            className="inline-block bg-white text-[#0056b3] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            他のカテゴリーも見る
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
