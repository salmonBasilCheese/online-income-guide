'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'サイトに関する質問',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, this would send data to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                category: 'サイトに関する質問',
                message: ''
            });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="py-12 bg-white min-h-screen">
            <div className="site-container">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        お問い合わせ
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        サイトに関するご質問やご意見がございましたら、<br />
                        以下のフォームよりお気軽にお問い合わせください。
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {/* Important Notice */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
                        <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                            <span className="mr-2">⚠️</span>
                            ご注意ください
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-2 ml-6 list-disc">
                            <li>個別の副業相談や投資アドバイスには対応しておりません</li>
                            <li>サイトのコンテンツに関するご質問のみ受け付けております</li>
                            <li>回答までに数日〜1週間程度お時間をいただく場合があります</li>
                            <li>すべてのお問い合わせに回答できるとは限りません</li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    {submitted ? (
                        <div className="bg-green-50 border-2 border-green-500 rounded-xl p-12 text-center">
                            <div className="text-6xl mb-4">✅</div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                送信完了
                            </h2>
                            <p className="text-gray-700">
                                お問い合わせありがとうございました。<br />
                                内容を確認の上、ご連絡させていただきます。
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm">
                            {/* Name */}
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                                    お名前 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a0e9] focus:border-transparent"
                                    placeholder="山田 太郎"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                                    メールアドレス <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a0e9] focus:border-transparent"
                                    placeholder="example@email.com"
                                />
                            </div>

                            {/* Category */}
                            <div className="mb-6">
                                <label htmlFor="category" className="block text-sm font-bold text-gray-900 mb-2">
                                    お問い合わせ種別 <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a0e9] focus:border-transparent"
                                >
                                    <option>サイトに関する質問</option>
                                    <option>コンテンツの誤りの指摘</option>
                                    <option>掲載内容のリクエスト</option>
                                    <option>その他</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                                    お問い合わせ内容 <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={8}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a0e9] focus:border-transparent resize-none"
                                    placeholder="お問い合わせ内容をご記入ください"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#00a0e9] text-white font-bold py-4 rounded-lg hover:bg-[#008bc9] transition-colors"
                            >
                                送信する
                            </button>

                            <p className="text-xs text-gray-500 mt-4 text-center">
                                送信いただいた個人情報は、お問い合わせ対応のみに使用し、
                                <a href="/privacy" className="text-[#00a0e9] hover:underline">プライバシーポリシー</a>
                                に基づき適切に管理いたします。
                            </p>
                        </form>
                    )}

                    {/* Alternative Contact */}
                    <div className="mt-12 text-center bg-gray-50 p-8 rounded-xl">
                        <h3 className="font-bold text-gray-900 mb-4">
                            よくある質問もご確認ください
                        </h3>
                        <p className="text-gray-600 mb-6">
                            多くの疑問はFAQページで解決できるかもしれません
                        </p>
                        <a
                            href="/faq"
                            className="inline-block bg-white text-[#00a0e9] border-2 border-[#00a0e9] font-bold px-6 py-3 rounded-lg hover:bg-[#00a0e9] hover:text-white transition-colors"
                        >
                            FAQを見る
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
