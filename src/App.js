import { useState } from "react";
import { HashRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import RewardPage from "./RewardPage"; // Strona z nagrodą

const images = [
    { src: "./assets/images/twinky1.jpg", isTarget: true },
    { src: "./assets/images/vampire1.webp", isTarget: true },
    { src: "./assets/images/dog1.png", isTarget: false },
    { src: "./assets/images/twinky2.jpg", isTarget: true },
    { src: "./assets/images/cat1.png", isTarget: false },
    { src: "./assets/images/vampire2.jpg", isTarget: true },
    { src: "./assets/images/car.jpg", isTarget: false },
    { src: "./assets/images/twinky3.jpg", isTarget: true },
    { src: "./assets/images/vampire3.jpg", isTarget: true }
];

function CaptchaPage() {
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();

    const toggleImage = (index) => {
        setSelected((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const handleVerify = () => {
        const correctSelection = selected.every(index => images[index].isTarget);
        if (correctSelection && selected.length > 0) {
            navigate("/reward");
        } else {
            alert("Nieprawidłowa selekcja, spróbuj ponownie.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 p-6 text-white">
            <h1 className="text-3xl font-extrabold mb-6">🎉 Odbierz swoją nagrodę! 🎁</h1>
            <button
                onClick={() => setShowCaptcha(true)}
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
                Odbierz nagrodę
            </button>

            {showCaptcha && (
                <div className="mt-6 p-6 bg-white text-black rounded-lg shadow-xl w-96 border border-gray-300">
                    <p className="text-lg font-semibold mb-4 text-center">🖼️ Zaznacz wszystkie obrazki z Twinkami i Wampirami:</p>
                    <div className="grid grid-cols-3 gap-3">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img.src}
                                alt="captcha"
                                className="w-24 h-24 object-cover cursor-pointer border-4 rounded-lg transition-all "
                                style={selected.includes(index) ? { borderColor: 'green', transform: 'scale(1.05)' } : { borderColor: 'gray' }}
                                onClick={() => toggleImage(index)}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleVerify}
                        className="mt-4 w-full py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    >
                        ✅ Zweryfikuj
                    </button>
                </div>
            )}
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CaptchaPage />} />
                <Route path="/reward" element={<RewardPage />} />
            </Routes>
        </Router>
    );
}
