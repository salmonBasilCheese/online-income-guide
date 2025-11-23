export type StepDetail = {
    head: string;
    desc: string;
    stepId: string; // URL slug
    detailContent?: {
        goal: string;
        actions: {
            title: string;
            content: string; // Markdown supported
            imagePlaceholder?: string;
        }[];
        template?: {
            title: string;
            text: string;
        };
        checklist: string[];
    };
};

export type Phase = {
    title: string;
    steps: StepDetail[];
};

export type Roadmap = {
    title: string;
    description: string;
    phases: Phase[];
};

export const roadmaps: Record<string, Roadmap> = {
    freelance: {
        title: 'フリーランスの始め方',
        description: 'スキルを売り物にして、最初の1円を稼ぐまでの完全ロードマップ',
        phases: [
            {
                title: 'Phase 1: 準備編（1週間目）',
                steps: [
                    {
                        stepId: 'define-service',
                        head: '自分の「売り物」を決める',
                        desc: '「何ができるか」ではなく「誰の何の役に立てるか」を言語化します。例：×プログラミングができる → ○LP制作で集客を支援できる',
                        detailContent: {
                            goal: '自分のスキルを「売れる商品」の形に定義する',
                            actions: [
                                {
                                    title: '1. 「Can（できること）」を書き出す',
                                    content: 'まずは自分ができることを箇条書きにします。\n例：\n- タイピングが早い\n- 画像編集ソフトが使える\n- 英語の読み書きができる\n- 整理整頓が得意'
                                },
                                {
                                    title: '2. 「Who（誰の）」悩みを解決するか考える',
                                    content: 'そのスキルで助かる人は誰かを想像します。\n例：\n- 忙しい経営者（事務作業を代行してほしい）\n- YouTuber（サムネイルを作ってほしい）\n- 海外記事を読みたい人（翻訳してほしい）'
                                },
                                {
                                    title: '3. 商品名を決める',
                                    content: '「〇〇代行」「〇〇制作」など、分かりやすい名前をつけます。\n悪い例：何でもやります\n良い例：YouTubeサムネイル制作代行（クリック率重視）'
                                }
                            ],
                            template: {
                                title: '商品定義シート',
                                text: '■私のスキル（Can）:\n\n■ターゲット（Who）:\n\n■提供価値（Benefit）:\n\n■商品名:\n'
                            },
                            checklist: [
                                '自分ができることを10個以上書き出した',
                                '誰の役に立つか具体的にイメージできた',
                                '一言で伝わる商品名を決めた'
                            ]
                        }
                    },
                    {
                        stepId: 'create-portfolio',
                        head: 'ポートフォリオを準備する',
                        desc: '実績がなくても大丈夫です。架空の案件や、過去の学習成果をまとめて「何ができるか」を可視化しましょう。Notionや無料のHP作成ツールでOKです。',
                        detailContent: {
                            goal: 'クライアントに「この人に頼みたい」と思わせる実績ページを作る',
                            actions: [
                                {
                                    title: '1. 掲載する作品を用意する',
                                    content: '実績がない場合は「架空案件」を作ります。\n例：\n- 架空のカフェのロゴ\n- 架空のイベントのチラシ\n- 自分が書いたブログ記事のURL'
                                },
                                {
                                    title: '2. ポートフォリオサイトを作る',
                                    content: 'エンジニア以外は「Notion」や「Canva」で十分です。無料で作れます。\n構成案：\n- 自己紹介\n- スキルセット（使用ツールなど）\n- 作品一覧（画像＋解説）\n- 料金表（目安）\n- お問い合わせ先'
                                }
                            ],
                            checklist: [
                                '作品を3つ以上用意した',
                                'NotionまたはCanvaでページを作成した',
                                'スマホで見ても崩れていないか確認した'
                            ]
                        }
                    },
                    {
                        stepId: 'register-crowdworks',
                        head: 'クラウドソーシングに登録する',
                        desc: 'まずは「クラウドワークス」と「ランサーズ」の2大サイトに登録。プロフィール写真は清潔感のあるものを、自己紹介文は「クライアント視点」で丁寧に書きましょう。',
                        detailContent: {
                            goal: '仕事を受注できる状態にする',
                            actions: [
                                {
                                    title: '1. アカウント作成',
                                    content: 'クラウドワークスとランサーズの公式サイトにアクセスし、会員登録（無料）を行います。メールアドレスがあれば3分で完了します。'
                                },
                                {
                                    title: '2. プロフィール画像の登録',
                                    content: '顔写真がベストですが、抵抗がある場合は「似顔絵イラスト」や「清潔感のある風景＋アイコン」でも可です。初期設定のままはNGです（信頼されません）。'
                                },
                                {
                                    title: '3. プロフィール文の作成',
                                    content: '以下のテンプレートを使って、信頼感のあるプロフィールを作成しましょう。'
                                }
                            ],
                            template: {
                                title: 'プロフィール文テンプレート',
                                text: 'はじめまして、[名前]と申します。\n\n現在は[職種]として活動しており、[得意分野]を得意としております。\n\n■経歴\n・[経歴1]\n・[経歴2]\n\n■可能な業務\n・[業務1]\n・[業務2]\n\n■稼働時間\n平日：[時間]時間\n休日：[時間]時間\n\n納期を守り、丁寧なコミュニケーションを心がけております。\nご興味を持っていただけましたら、お気軽にご相談ください。\nよろしくお願いいたします。'
                            },
                            checklist: [
                                'クラウドワークス・ランサーズに登録した',
                                'プロフィール画像を設定した',
                                'プロフィール文を入力した',
                                '本人確認書類を提出した（信頼度が大きく上がります）'
                            ]
                        }
                    }
                ]
            },
            {
                title: 'Phase 2: 実践編（2週間目〜1ヶ月目）',
                steps: [
                    {
                        stepId: 'first-task',
                        head: 'タスク案件で実績を作る（評価1〜5件）',
                        desc: 'まずはアンケート回答やデータ入力などの簡単な「タスク案件」をこなし、プラットフォームの使い方に慣れつつ、評価（★5）を貯めます。'
                    },
                    {
                        stepId: 'apply-project',
                        head: 'プロジェクト案件に応募する',
                        desc: 'いよいよ本番です。募集要項を熟読し、「コピペではない」提案文を作成して応募します。最初は10件応募して1件通れば良い方です。めげずに応募し続けましょう。'
                    },
                    {
                        stepId: 'communication',
                        head: '納期を守り、丁寧なコミュニケーションをとる',
                        desc: 'スキル以上に重要なのが「信頼」です。即レス、納期厳守、丁寧な言葉遣いを徹底すれば、必ずリピーターがつきます。'
                    }
                ]
            },
            {
                title: 'Phase 3: 成長編（2ヶ月目以降）',
                steps: [
                    {
                        stepId: 'price-negotiation',
                        head: '単価交渉をする',
                        desc: '信頼関係ができたら、次の発注時に少し単価アップを相談してみましょう。または、より高単価な案件に挑戦します。'
                    },
                    {
                        stepId: 'sns-marketing',
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
                        stepId: 'decide-genre',
                        head: 'ジャンル（参入領域）を決める',
                        desc: '「自分が興味がある・詳しい」かつ「広告案件がある」ジャンルを選びます。HARMの法則（Health, Ambition, Relation, Money）に関連する分野が収益化しやすいです。'
                    },
                    {
                        stepId: 'wordpress-setup',
                        head: 'WordPressブログを開設する',
                        desc: '無料ブログ（Amebaなど）ではなく、WordPress一択です。レンタルサーバー（ConoHa WINGやXserver）を契約し、ドメインを取得してインストールします。'
                    },
                    {
                        stepId: 'asp-registration',
                        head: 'ASPに登録する',
                        desc: '広告案件を探すためにASP（A8.net、もしもアフィリエイトなど）に登録します。まずは審査のないA8.netから始めましょう。'
                    }
                ]
            },
            {
                title: 'Phase 2: 記事執筆（1ヶ月目〜3ヶ月目）',
                steps: [
                    {
                        stepId: 'keyword-research',
                        head: 'キーワード選定をする',
                        desc: '「ラッコキーワード」などのツールを使い、ユーザーが検索しそうなキーワード（悩み）をリストアップします。'
                    },
                    {
                        stepId: 'writing-article',
                        head: '読者の悩みを解決する記事を書く',
                        desc: '日記ではありません。「誰の、どんな悩みを、どうやって解決するか」を意識して記事を書きます。まずは10記事を目指しましょう。'
                    },
                    {
                        stepId: 'article-types',
                        head: '集客記事と収益記事を使い分ける',
                        desc: 'アクセスを集めるための「集客記事」と、商品を売るための「収益記事（キラーページ）」を意識して書き分け、内部リンクで繋ぎます。'
                    }
                ]
            },
            {
                title: 'Phase 3: 分析と改善（4ヶ月目以降）',
                steps: [
                    {
                        stepId: 'search-console',
                        head: 'Google Search Consoleで分析する',
                        desc: 'どのキーワードで検索されているかを確認し、順位が低い記事をリライト（修正）して順位を上げます。'
                    },
                    {
                        stepId: 'sns-integration',
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
                        stepId: 'emergency-fund',
                        head: '生活防衛資金を確保する',
                        desc: '投資は余剰資金で行うのが鉄則です。生活費の3〜6ヶ月分は現金として確保し、それ以外のお金を投資に回します。'
                    },
                    {
                        stepId: 'open-account',
                        head: '証券口座を開設する',
                        desc: '手数料が安いネット証券（SBI証券や楽天証券）を選びましょう。口座開設は無料です。'
                    },
                    {
                        stepId: 'nisa-application',
                        head: 'NISA（少額投資非課税制度）を申し込む',
                        desc: '利益に税金がかからないNISA口座を必ず利用しましょう。これは国が用意した最強の優遇制度です。'
                    }
                ]
            },
            {
                title: 'Phase 2: 積立開始（1ヶ月目）',
                steps: [
                    {
                        stepId: 'select-fund',
                        head: '投資信託（インデックスファンド）を選ぶ',
                        desc: '全世界株式（オール・カントリー）やS&P500（米国株式）に連動する、手数料（信託報酬）の安いファンドを選びます。'
                    },
                    {
                        stepId: 'credit-card-setting',
                        head: 'クレジットカード積立を設定する',
                        desc: '毎月自動で買い付ける設定をします。クレカ積立ならポイントも貯まってお得です。月100円からでも始められます。'
                    }
                ]
            },
            {
                title: 'Phase 3: 継続と放置（2ヶ月目以降）',
                steps: [
                    {
                        stepId: 'ignore-market',
                        head: '相場を見ない（気絶投資）',
                        desc: '株価は毎日変動しますが、一喜一憂してはいけません。長期投資のコツは「忘れること」です。淡々と積立を続けます。'
                    },
                    {
                        stepId: 'increase-investment',
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
                        stepId: 'define-concept',
                        head: '「誰のどんな悩み」を解決するか決める',
                        desc: '自分が過去に乗り越えた悩みや、人より少し得意なことをテーマにします。「HSPの仕事術」「初心者向け動画編集講座」など。'
                    },
                    {
                        stepId: 'platform-selection',
                        head: 'プラットフォームを決める',
                        desc: '最初は「note」や「Brain」などのプラットフォームを利用するのが簡単です。決済システムも用意されています。'
                    }
                ]
            },
            {
                title: 'Phase 2: コンテンツ制作（2週間目〜1ヶ月目）',
                steps: [
                    {
                        stepId: 'create-outline',
                        head: '目次（構成）を作る',
                        desc: 'いきなり書き始めず、まずは目次を作って全体の流れを整理します。読者がステップバイステップで実践できる構成がベストです。'
                    },
                    {
                        stepId: 'content-creation',
                        head: '執筆・制作する',
                        desc: 'テキスト、動画、音声など、自分に合った形式でコンテンツを作ります。最初はテキスト（記事）が修正もしやすくおすすめです。'
                    }
                ]
            },
            {
                title: 'Phase 3: 販売と集客（1ヶ月目以降）',
                steps: [
                    {
                        stepId: 'free-content',
                        head: '無料部分で価値を提供する',
                        desc: 'コンテンツの冒頭や、SNSでの発信で「無料でもこんなに役立つ」と思ってもらうことが重要です。信頼がなければ商品は売れません。'
                    },
                    {
                        stepId: 'collect-reviews',
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
                        stepId: 'check-rules',
                        head: '就業規則を確認する',
                        desc: '会社の就業規則を確認しましょう。副業禁止でも、ポイ活や資産運用は問題ない場合が多いです。'
                    },
                    {
                        stepId: 'time-management',
                        head: '時間の棚卸しをする',
                        desc: '1日のスケジュールを書き出し、副業に使える「隙間時間」を見つけます。通勤時間、テレビを見ている時間などを活用します。'
                    }
                ]
            },
            {
                title: 'Phase 2: 即金性の高いものから（1ヶ月目）',
                steps: [
                    {
                        stepId: 'mercari',
                        head: '不用品販売（メルカリ）',
                        desc: '家にある不用品を売ってみましょう。ネットでお金を稼ぐ感覚と、発送などの手続きを学べます。部屋も片付いて一石二鳥です。'
                    },
                    {
                        stepId: 'self-back',
                        head: '自己アフィリエイト（セルフバック）',
                        desc: 'A8.netなどのASP経由で、クレジットカード作成や資料請求を自分で行い、報酬を得ます。数万円ならすぐに稼げます（単発ですが）。'
                    }
                ]
            },
            {
                title: 'Phase 3: スキル型副業へ移行（2ヶ月目以降）',
                steps: [
                    {
                        stepId: 'choose-skill',
                        head: '興味のあるスキルを選ぶ',
                        desc: '即金系の副業で稼いだ資金を元手に、Webライティングや動画編集などの「スキル」を学び始めます。'
                    },
                    {
                        stepId: 'start-small',
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
                        stepId: 'license',
                        head: '古物商許可の申請（必要に応じて）',
                        desc: '中古品を扱う場合は警察署で「古物商許可」を申請します。新品のみを扱う場合は不要ですが、長くやるなら取得がおすすめです。'
                    },
                    {
                        stepId: 'research-tool',
                        head: 'リサーチツールを入れる',
                        desc: 'Amazonの価格推移が見れる「Keepa」などのツールを導入し、いくらで売れているかを確認できるようにします。'
                    }
                ]
            },
            {
                title: 'Phase 2: 仕入れと販売（1ヶ月目）',
                steps: [
                    {
                        stepId: 'store-resale',
                        head: '店舗せどりから始める',
                        desc: 'ブックオフやドン・キホーテなどの実店舗に行き、セール品やワゴン品をリサーチします。利益が出る商品が見つかったら仕入れます。'
                    },
                    {
                        stepId: 'amazon-fba',
                        head: 'Amazon FBAを利用する',
                        desc: '商品の保管・梱包・発送をAmazonが代行してくれる「FBA」を利用すると、副業でも大量の商品を扱えます。'
                    }
                ]
            },
            {
                title: 'Phase 3: 効率化と拡大（3ヶ月目以降）',
                steps: [
                    {
                        stepId: 'online-resale',
                        head: '電脳せどり（ネット仕入れ）に挑戦',
                        desc: '店舗に行かず、楽天やヤフオクなどネットで仕入れてAmazonで売る手法に広げます。'
                    },
                    {
                        stepId: 'specialize',
                        head: 'ジャンルを特化する',
                        desc: '「家電」「古着」「本」など、得意なジャンルを作ると、目利き力が上がり、リサーチ時間が短縮されます。'
                    }
                ]
            }
        ]
    }
};
