'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ChecklistBox({ items, returnUrl }: { items: string[]; returnUrl: string }) {
    const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(items.length).fill(false));

    const handleCheck = (index: number) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    const allChecked = checkedItems.every(item => item);

    return (
        <div className="bg-white border-2 border-[#00a0e9] rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                完了チェックリスト
            </h3>
            <div className="space-y-3">
                {items.map((item, i) => (
                    <label key={i} className="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                        <input
                            type="checkbox"
                            checked={checkedItems[i]}
                            onChange={() => handleCheck(i)}
                            className="mt-1 w-5 h-5 text-[#00a0e9] rounded border-gray-300 focus:ring-[#00a0e9]"
                        />
                        <span className="ml-3 text-gray-700 text-sm leading-relaxed">
                            {item}
                        </span>
                    </label>
                ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500 mb-2">
                    {allChecked ? '🎉 完璧です！次のステップへ進みましょう！' : '全てチェックしたら次のステップへ！'}
                </p>
                <Link
                    href={returnUrl}
                    className="block w-full bg-[#00a0e9] text-white font-bold py-3 rounded-lg hover:bg-[#008bc9] transition-colors"
                >
                    ロードマップに戻る
                </Link>
            </div>
        </div>
    );
}
