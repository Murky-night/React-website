let Food = ({items = [], category = "Category"}) => {

    items.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse alphabet
    // fruits.sort((a,b) => a.price - b.price); //Numerical
    // fruits.sort((a,b) => b.price - a.price); //Reverse numeric

    const listItems = items.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.price}</b>
                                            </li>)

    // const cheapFruits = fruits.filter(fruit => fruit.price < 50);

    // const cheapItems = cheapFruits.map(cheapFruits => <li key={cheapFruits.id}>
    //                                         {cheapFruits.name}: &nbsp;
    //                                         <b>{cheapFruits.price}</b>
    //                                         </li>)

    return (<>  
                {/* <ol>{cheapItems}</ol> */}
                {items.length > 0 ? <h3 className="list-category">{category}</h3> : null}
                {items.length > 0 ? <ol className="list-item">{listItems}</ol> : null}  
            </>
    );
}
export default Food