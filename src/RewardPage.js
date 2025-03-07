import rewardImage from "./assets/images/reward.png";

export default function RewardPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-green-800 text-white text-center p-6">
            <img src={rewardImage} alt="Nagroda" className="w-full max-w-2xl rounded-lg shadow-xl" />
            <h2 className="text-2xl font-bold mt-6">Ale to nie wszystko!</h2>
            <p className="text-lg mt-2">Informacje wkrótce!</p>
        </div>
    );
}
