import Link from 'next/link';

export default function Home() {
  // Categories data - Simplified for professional display
  const categories = [
    { id: 'freelance', title: 'フリーランス', desc: 'スキルを活かす', icon: '💼' },
    { id: 'affiliate', title: 'アフィリエイト', desc: 'ブログで収益化', icon: '📝' },
    { id: 'investment', title: '資産運用', desc: '将来への備え', icon: '📈' },
    { id: 'side-business', title: '副業全般', desc: '隙間時間を活用', icon: '💻' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#e6f7ff] py-20 overflow-hidden">
        <div className="site-container flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              知識は、<br />
              <span className="text-[#00a0e9]">自由へのパスポート</span>になる。
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              「会社に依存せず生きていきたい」<br />
              そんなあなたのための、副業・資産形成の羅針盤。<br />
              正しい知識とマインドセットで、新しい一歩を踏み出しましょう。
            </p>
            <Link
              href="/start"
              className="inline-block bg-[#00a0e9] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0080ba] transition-colors shadow-lg"
            >
              まずはここからスタート
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            {/* Abstract Visual Representation */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
                alt="Financial Planning Workspace"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00202e]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction / Concept Section */}
      <section className="py-20">
        <div className="site-container">
          <h2 className="section-title">
            オンライン収入ガイドとは
          </h2>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-lg text-gray-700 leading-loose">
              「オンライン収入ガイド」は、インターネットを活用した多様な収益化方法と、
              それを継続するためのマインドセットを学ぶための情報サイトです。
              一時的なブームに流されない、堅実な資産形成とスキルアップを目指します。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
              <div className="p-6 bg-[#f8f9fa] rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#0056b3] mb-3">01. 学ぶ</h3>
                <p className="text-sm text-gray-600">基礎知識から実践的なノウハウまで、体系的に学習できます。</p>
              </div>
              <div className="p-6 bg-[#f8f9fa] rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#0056b3] mb-3">02. 実践する</h3>
                <p className="text-sm text-gray-600">具体的なステップに沿って、実際に収益化への一歩を踏み出します。</p>
              </div>
              <div className="p-6 bg-[#f8f9fa] rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#0056b3] mb-3">03. 続ける</h3>
                <p className="text-sm text-gray-600">マインドセットを整え、挫折せずに継続する力を養います。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Clean Grid */}
      <section className="py-20 bg-[#f0f4f8]">
        <div className="site-container">
          <h2 className="section-title">
            カテゴリーから探す
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="info-card group text-center hover:border-[#00a0e9]"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/categories" className="text-[#00a0e9] font-bold hover:underline">
              全てのカテゴリーを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Mindset Section - Highlighted */}
      <section className="py-20">
        <div className="site-container">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block bg-[#e6f7ff] text-[#0056b3] px-4 py-1 rounded-full text-sm font-bold">
                重要コンテンツ
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                成功のためのマインドセット
              </h2>
              <p className="text-gray-700 leading-relaxed">
                手法だけでは成功できません。
                「なぜやるのか」「どう続けるか」という土台が最も重要です。
                収益ゼロの期間を乗り越えるメンタリティを身につけましょう。
              </p>
              <Link
                href="/mindset"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors"
              >
                マインドセットを学ぶ
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
              <div className="bg-[#f9fafb] p-4 rounded text-center border border-gray-100">
                <div className="text-2xl mb-2">💪</div>
                <div className="text-sm font-bold">継続力</div>
              </div>
              <div className="bg-[#f9fafb] p-4 rounded text-center border border-gray-100">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm font-bold">目標設定</div>
              </div>
              <div className="bg-[#f9fafb] p-4 rounded text-center border border-gray-100">
                <div className="text-2xl mb-2">🧘</div>
                <div className="text-sm font-bold">メンタルケア</div>
              </div>
              <div className="bg-[#f9fafb] p-4 rounded text-center border border-gray-100">
                <div className="text-2xl mb-2">🤝</div>
                <div className="text-sm font-bold">仲間づくり</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0056b3] text-white text-center">
        <div className="site-container">
          <h2 className="text-3xl font-bold mb-6">
            まずは無料で始めましょう
          </h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            登録は完全無料。あなたのペースで学び、実践できます。
            新しい可能性への第一歩を、ここから踏み出してください。
          </p>
          <button className="bg-white text-[#0056b3] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            今すぐスタートする
          </button>
        </div>
      </section>
    </>
  );
}
