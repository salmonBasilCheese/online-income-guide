export default function GrowthCurveGraph() {
    return (
        <div className="w-full h-full flex items-center justify-center bg-white p-4 rounded-lg">
            <svg viewBox="0 0 400 250" className="w-full h-auto max-w-md">
                {/* Axes */}
                <line x1="40" y1="210" x2="380" y2="210" stroke="#333" strokeWidth="2" />
                <line x1="40" y1="210" x2="40" y2="20" stroke="#333" strokeWidth="2" />

                {/* Labels */}
                <text x="370" y="230" fontSize="12" textAnchor="middle" fill="#666">時間</text>
                <text x="20" y="20" fontSize="12" textAnchor="middle" fill="#666">成果</text>

                {/* Ideal Curve (Linear - Dashed) */}
                <path
                    d="M 40 210 L 360 50"
                    fill="none"
                    stroke="#ccc"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                />
                <text x="200" y="120" fontSize="10" fill="#999" transform="rotate(-25 200,120)">理想のイメージ</text>

                {/* Reality Curve (Exponential) */}
                <path
                    d="M 40 210 C 150 210, 250 210, 360 50"
                    fill="none"
                    stroke="#00a0e9"
                    strokeWidth="4"
                />
                <text x="280" y="160" fontSize="12" fontWeight="bold" fill="#00a0e9">現実の成長曲線</text>

                {/* Valley of Death Area */}
                <text x="150" y="190" fontSize="12" fontWeight="bold" fill="#cc0000">死の谷</text>
                <path
                    d="M 100 180 L 120 195 L 140 180"
                    fill="none"
                    stroke="#cc0000"
                    strokeWidth="1"
                />
            </svg>
        </div>
    );
}
