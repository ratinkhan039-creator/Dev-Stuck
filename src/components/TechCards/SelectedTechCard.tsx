import type { ItechnologieDataType } from "../../Types/technologieData";

interface SelectedCardProps {
    selectedCard: ItechnologieDataType;
    handleRemoveButton: (yourStuckCard:ItechnologieDataType) => void
}

const SelectedTechCard = ({ selectedCard,handleRemoveButton }: SelectedCardProps) => {
    
    return (
        <>
        <div className="flex items-center sm:px-3 px-2 justify-between h-15 border border-white hover:border rounded-2xl hover:border-gray-400">
                <div className="flex gap-3">
                    <img src={selectedCard.icon} alt="" className="w-10 h-10" />
                    <div>
                        <h4 className="font-semibold text-gray-900 text-sm leading-tight">{selectedCard.name}</h4>
                        <span className="text-xs text-gray-400">{selectedCard.category}</span>
                    </div>
                </div>
                <button className="hover:text-red-500 cursor-pointer" onClick={() => handleRemoveButton(selectedCard)}>
                    ✕
                </button>
            </div>
        </>
    );
};

export default SelectedTechCard;