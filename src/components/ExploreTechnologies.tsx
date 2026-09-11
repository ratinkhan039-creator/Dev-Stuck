import { use, useState } from "react";
import type { ItechnologieDataType } from "../Types/technologieData";
import SelectedTechCard from "./TechCards/SelectedTechCard";
import { AllCard } from "./TechCards/AllCard";
import { Slide, toast } from "react-toastify";

interface ExploreTechnologiesProps {
    technologieData: Promise<ItechnologieDataType[]>
    selectedCard: ItechnologieDataType[];
}

const ExploreTechnologies = ({ technologieData }: ExploreTechnologiesProps) => {
    const resData = use(technologieData);
    const [selectedCard, setSelectedCard] = useState([]);

    const handleRemoveButton = (yourStuckCard: ItechnologieDataType) => {
        const newSelectedCard = selectedCard.filter(card => card.id !== yourStuckCard.id);
        setSelectedCard(newSelectedCard);
    }
    const handleRemoveAllButton = () => {
        const newSelectedCard: [] = [];
        setSelectedCard(newSelectedCard);
        toast.success('Your stack is clear', {
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
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto md:px-6 px-4">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="md:text-3xl text-2xl md:text-start text-center font-bold text-gray-900">
                        Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Technologies</span>
                    </h2>
                    <p className="text-gray-500 mt-1 md:text-md text-sm md:text-start text-center">Pick one technology per category to build your ideal stack.</p>
                </div>
                <div className="grid lg:grid-cols-[2fr_1fr] md:grid-cols-[1.5fr_1.5fr] sm:grid-cols-1 gap-9">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5">
                        {
                            resData.map(cardInfo => <AllCard cardInfo={cardInfo} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />)
                        }
                    </div>
                    {/*Selected */}
                    <div>
                        <div className="max-w-sm w-full bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                            {/* Header */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-900 tracking-tight">Your Stack</h2>
                                <p className="text-sm text-gray-400 mt-0.5">
                                    {selectedCard.length === 0 ? "No technologies selected yet" : `${selectedCard.length} Technology Selected`}
                                </p>
                            </div>

                            {/* Selected Items List */}

                            {selectedCard.length === 0 ? <div className=" border border-dashed border-gray-400 w-full h-25 rounded-2xl flex items-center justify-center"><p className="text-gray-400">Your stuck is empty</p></div> : <div><div className="flex flex-col gap-3 my-5">
                                {
                                    selectedCard.map(card => <SelectedTechCard selectedCard={card} handleRemoveButton={handleRemoveButton} />)
                                }
                            </div>
                                {/* Remove All Button */}
                                <button className="w-full py-3 border border-red-500 text-red-500 font-medium rounded-2xl text-sm hover:bg-red-50 transition" onClick={handleRemoveAllButton}>
                                    Remove All
                                </button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExploreTechnologies;