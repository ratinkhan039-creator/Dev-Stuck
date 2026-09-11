THE DEV STUCK

Description:
The Dev Stuk application for devlopers helper. This application can you saved tecnology list.Your learning technologies and this tecnologies any time add or remove for your stuck. Or this is a very helpfull app.




This application create using:
1:React.js
2:Tailwind CSS, DaisyUI
3:TypeScript / JavaScript (ES6+)
4:React-Toastify (NPM Package)
5:JSON (for technology data)
6:Vite (build tool)




Our application features:
1: All technologies here and listing for your approch
2: Added technologies 1 by 1 removeal
3: Added technologies all removeal




What is JSX, and why is it used in React?
Ans: JSX is java script xml. This is similer from HTML. React uses JSX bequse jsx wrait ui and reuseble


What is the difference between props and state?
Ans: Props is data shearing for perent conponet to child component . State is a react hook and his stored a data.


What does the useState hook do, and where did you use it in this project?
Ans: useState is a react hook and his stored a data. ExploreTechnologies, AllCard and SelectedCard components using useState.


What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: The useEffect using for react component control side effect.loading JSON data using asyncronus operetion. Becose We fetch the data every time the component renders.


Why does every item in a .map() list need a unique key prop?
Ans: Bucose a singel item data or anathar singal item data mach thear using key prop


What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering is Conditionaly whrite ui. 
Example:
{selectedCard.length === 0 ? <div className=" border border-dashed border-gray-400 w-full h-25 rounded-2xl flex items-center justify-center"><p className="text-gray-400">Your stuck is empty</p></div> : <div><div className="flex flex-col gap-3 my-5">
{
   selectedCard.map(card => <SelectedTechCard selectedCard={card} handleRemoveButton={handleRemoveButton} />) }
    </div>
     {/* Remove All Button */}
      <button className="w-full py-3 border border-red-500 text-red-500 font-medium rounded-2xl text-sm hover:bg-red-50 transition" onClick={handleRemoveAllButton}> Remove All
      </button>
      </div>}

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: Pass data from a parent component to a child component Props becuse Props is data shearing for perent conponet to child component. a child send something back to the parent using props for funtion refarance.
