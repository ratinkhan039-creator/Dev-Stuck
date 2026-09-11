import { FaStar } from "react-icons/fa";
import type { ItechnologieDataType } from "../../Types/technologieData"
import { IoMdCheckmark } from "react-icons/io";
import type { Dispatch, SetStateAction } from "react";
import { Slide, toast } from "react-toastify";

interface AllCardProps {
    cardInfo: ItechnologieDataType;
    selectedCard: ItechnologieDataType[];
    setSelectedCard: Dispatch<SetStateAction<ItechnologieDataType[]>>
}
export function AllCard({ cardInfo, selectedCard, setSelectedCard }: AllCardProps) {
    const handleAddStuckButton = (addCardInfo: ItechnologieDataType) => {
        const newCard = [...selectedCard, addCardInfo];
        setSelectedCard(newCard);
        toast.success(`${addCardInfo.name} added to your stuck`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        });
    }
    return (
        <>
            <div className={`p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative ${selectedCard.includes(cardInfo) && "p-6 bg-white border border-pink-500 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative"}`}>
                <div className="h-70">
                    {/* Top Section */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 flex items-center justify-center">
                            {/* Icon */}
                            <img src={cardInfo.icon} alt="" />
                        </div>
                        <span className="bg-sky-50 text-sky-600 text-xs font-semibold px-3 py-1 rounded-full">
                            {cardInfo.badge}
                        </span>
                    </div>

                    {/* Content */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{cardInfo.name}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        {cardInfo.description}
                    </p>

                    {/* Footer Info */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
                        <span className="bg-gray-50 px-2 py-1 rounded">{cardInfo.category}</span>
                        <span className="px-2">{cardInfo.difficulty}</span>
                        <span className="ml-auto flex items-center gap-1 font-medium text-gray-900">
                            <FaStar className="text-yellow-500" /> {cardInfo.rating}
                        </span>
                    </div>
                </div>

                {/* Button */}

                <button className={`w-full py-3 rounded-xl  bg-red-100 hover:bg-red-50 transition ${!selectedCard.includes(cardInfo) && "rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium rounded-xl hover:opacity-90 border"}`} onClick={() => { handleAddStuckButton(cardInfo) }} disabled={selectedCard.includes(cardInfo)}>
                    {selectedCard.includes(cardInfo) ? <span className="flex w-full justify-center items-center gap-2 font-medium text-red-500"><IoMdCheckmark /> Added to Stuck</span> : "Add to Stuck"}
                </button>
            </div>
        </>
    )
}