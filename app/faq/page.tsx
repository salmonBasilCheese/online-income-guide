'use client';

import { useState } from 'react';

export default function FAQPage() {
    const [openId, setOpenId] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            category: '全般',
            question: 'このサイトは無料で利用できますか？',
            answer: 'はい、当サイトのすべてのコンテンツは完全無料でご利用いただけます。会員登録も不要です。'
        },
        {
            id: 2,
            category: '全般',
            question: '本当に稼げるようになりますか？',
            answer: '当サイトは情報提供を目的としており、収益を保証するものではありません。しかし、正しい知識と継続的な努力により、多くの方が実際に収益を得ています。成功事例インタビューもぜひご覧ください。'
        },
        {
            id: 3,
            category: '始め方',
            question: '初心者ですが、どこから始めればいいですか？',
            answer: 'まず「マインドセット」ページで心構えを学び、次に「カテゴリー一覧」から興味のある分野を選んでください。各カテゴリーには初心者向けのロードマップが用意されています。'
        },
        {
            id: 4,
            category: '始め方',
            question: '資金はどのくらい必要ですか？',
            answer: 'カテゴリーによって異なりますが、フリーランスやアフィリエイトは初期費用ほぼゼロで始められます。投資は少額（月1,000円〜）から、物販は数万円の仕入れ資金が必要になります。'
        },
        {
            id: 5,
            category: '始め方',
            question: '副業禁止の会社員でもできますか？',
            answer: '就業規則を必ず確認してください。副業禁止でも、資産運用（投資）やポイ活は問題ない場合が多いです。また、匿名でできるブログやコンテンツ販売も選択肢になります。'
        },
        {
            id: 6,
            category: '実践',
            question: 'どのくらいの期間で成果が出ますか？',
            answer: 'カテゴリーによって大きく異なります。フリーランスは1〜2ヶ月、アフィリエイトは6ヶ月〜1年、投資は長期（5年以上）が目安です。即金性を求めるなら、フリーランスや物販がおすすめです。'
        },
        {
            id: 7,
            category: '実践',
            question: '1日どのくらいの時間が必要ですか？',
            answer: '副業として始める場合、1日1〜2時間が目安です。週末にまとめて作業する方法もあります。重要なのは「毎日少しずつでも継続すること」です。'
        },
        {
            id: 8,
            category: '実践',
            question: '挫折しそうです。どうすればいいですか？',
            answer: 'まず「マインドセット」ページの「成長曲線」を見てください。最初の数ヶ月は成果が出ないのが普通です。小さな目標を設定し、達成感を積み重ねることが継続のコツです。'
        },
        {
            id: 9,
            category: 'トラブル',
            question: '詐欺に遭わないか心配です',
            answer: '「絶対稼げる」「1日5分で月30万」などの誇大広告には絶対に近づかないでください。当サイトでは、地道な努力が必要な正攻法のみを紹介しています。'
        },
        {
            id: 10,
            category: 'トラブル',
            question: '確定申告は必要ですか？',
            answer: '副業の所得が年間20万円を超える場合、確定申告が必要です。また、住民税は金額に関わらず申告が必要な自治体もあります。詳しくは税務署や税理士にご相談ください。'
        },
        {
            id: 11,
            category: 'サイト',
            question: '情報は信頼できますか？',
            answer: '当サイトは、公的機関の情報や実際の成功事例に基づいて作成しています。ただし、最終的な判断はご自身で行ってください。'
        },
        {
            id: 12,
            category: 'サイト',
            question: '個別の相談はできますか？',
            answer: '申し訳ございませんが、現在は個別相談には対応しておりません。お問い合わせフォームからサイトに関するご質問は受け付けております。'
        }
    ];

    const categories = ['全般', '始め方', '実践', 'トラブル', 'サイト'];

    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        よくある質問（FAQ）
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        オンライン収入に関するよくある質問をまとめました。<br />
                        疑問や不安の解消にお役立てください。
                    </p>
                </div>

                {/* FAQ by Category */}
                <div className="max-w-4xl mx-auto space-y-12">
                    {categories.map((category) => (
                        <div key={category}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#00a0e9]">
                                {category}
                            </h2>
                            <div className="space-y-4">
                                {faqs
                                    .filter((faq) => faq.category === category)
                                    .map((faq) => (
                                        <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                                            <button
                                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                                className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
                                            >
                                                <span className="font-bold text-gray-900 pr-4 flex items-start">
                                                    <span className="text-[#00a0e9] mr-3 flex-shrink-0">Q.</span>
                                                    <span>{faq.question}</span>
                                                </span>
                                                <span className="text-2xl text-gray-400 flex-shrink-0">
                                                    {openId === faq.id ? '−' : '+'}
                                                </span>
                                            </button>
                                            {openId === faq.id && (
                                                <div className="px-6 pb-6 bg-gray-50">
                                                    <div className="flex items-start">
                                                        <span className="text-[#00a0e9] font-bold mr-3 flex-shrink-0">A.</span>
                                                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 text-center bg-gray-50 p-12 rounded-xl max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        解決しない疑問がありますか？
                    </h2>
                    <p className="text-gray-600 mb-6">
                        お問い合わせフォームからご質問ください
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-[#00a0e9] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#008bc9] transition-colors"
                    >
                        お問い合わせ
                    </a>
                </div>
            </div>
        </div>
    );
}
