import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="site-container h-20 flex items-center justify-between">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-[#00a0e9] rounded flex items-center justify-center text-white font-bold text-xl">
                        ¥
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-800 leading-none group-hover:text-[#00a0e9] transition-colors">
                            オンライン収入ガイド
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium tracking-wider">
                            ONLINE INCOME GUIDE
                        </span>
                    </div>
                </Link>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/about" className="text-sm font-bold text-gray-600 hover:text-[#00a0e9] transition-colors">
                        当サイトについて
                    </Link>
                    <Link href="/categories" className="text-sm font-bold text-gray-600 hover:text-[#00a0e9] transition-colors">
                        カテゴリー
                    </Link>
                    <Link href="/mindset" className="text-sm font-bold text-gray-600 hover:text-[#00a0e9] transition-colors">
                        マインドセット
                    </Link>
                    <Link
                        href="/start"
                        className="bg-[#00a0e9] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#008bc9] transition-colors"
                    >
                        はじめる
                    </Link>
                </nav>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden p-2 text-gray-600">
                    <span className="block w-6 h-0.5 bg-gray-600 mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-gray-600 mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-gray-600"></span>
                </button>
            </div>
        </header>
    );
}
