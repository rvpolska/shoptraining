

function Buttons({filteredClothes,data,setShop}){

    return(
        <div className="container">
            <button className="button" onClick={()=> setShop(data) (1)}>All</button>
            <button className="button" onClick={()=> filteredClothes ('nike')}>Nike</button>
            <button className="button" onClick={()=> filteredClothes ('reebok')}>Reebok</button>
            <button className="button" onClick={()=> filteredClothes ('underarmour')}>Underarmour</button>
            <button className="button" onClick={()=> filteredClothes ('newbalance')}>New Balance</button>
        </div>
    )

}


export default Buttons;
