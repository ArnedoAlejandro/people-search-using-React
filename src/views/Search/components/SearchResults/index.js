import "./estilos.css";

export default function SearchResults({results, isSearching}){
    return(
        <div  style ={{
                textAlign: "center",
                padding: "0rem 2rem",
                marginTop:" 10px",
                width: "90%",
                
                

        }}>
            {!results.length && isSearching && <p>No existen resultados</p>}

            {results?.map((value)=>{
                return(
                    <div  key={value.id} style={{
                        fontSize: "large",
                        fontFamily: "sans-serif",
                        color: "white",
                        backgroundColor : "#2C3E50",
                        border: "5px solid",
                        borderColor: "#04101C",
                        whidth:"300px",
                        marginTop:"1rem",
                        marginButton : "1rem" ,
                        padding: 10,
                        
                        borderRadius: "10px",
                        
                      
                    }}>

                        <p>{value.name}</p>
                        <p>{value.email}</p>
                    </div>
                )
            })}
        </div>
    );
}