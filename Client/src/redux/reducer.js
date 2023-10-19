const initialState= {
    myFavorites: [],
    allCharacters:[]
};


const rootReducer = (state=initialState, {type, payload})=>{
  switch (type) {
    case "ADD_FAV":
        return { ...state, myFavorites: payload, allCharacters: payload };


        case "REMOVE_FAV":
      return { ...state, myFavorites: payload };

    

        case "ORDER":
            let copy4= state.allCharacters.sort((a,b) => { 
                if (payload==='A'){
                    return a.id - b.id
                }else if (payload==='D'){
                    return b.id - a.id
                }else {
                return 0;
            }
             })

            return{
                ...state,
                myFavorites: copy4
            
            }

            case "FILTER":
                let copy3= state.allCharacters.filter((char)=> char.gender===payload )
            return{

                ...state,
                myFavorites:copy3
            }



    default:
        return {
            ...state
  }
 }
}
export default rootReducer