import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#333333] text-white pt-16 pb-8">
            <div className="site-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#00a0e9] rounded flex items-center justify-center text-white font-bold">
                                ¥
                            </div>
                            <span className="text-lg font-bold">オンライン収入ガイド</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            正しい知識と健全なマインドセットで、<br />
                            あなたの経済的自立を支援します。
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 border-b border-gray-600 pb-2 inline-block">コンテンツ</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/categories" className="hover:text-white transition-colors">カテゴリー一覧</Link></li>
                            <li><Link href="/mindset" className="hover:text-white transition-colors">マインドセット</Link></li>
                            <li><Link href="/success-stories" className="hover:text-white transition-colors">成功事例インタビュー</Link></li>
                            <li><Link href="/news" className="hover:text-white transition-colors">新着情報</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 border-b border-gray-600 pb-2 inline-block">サポート</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">当サイトについて</Link></li>
                            <li><Link href="/faq" className="hover:text-white transition-colors">よくある質問</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
                            <li><Link href="/sitemap" className="hover:text-white transition-colors">サイトマップ</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 border-b border-gray-600 pb-2 inline-block">規約・ポリシー</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/terms" className="hover:text-white transition-colors">利用規約</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-white transition-colors">免責事項</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Online Income Guide. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
