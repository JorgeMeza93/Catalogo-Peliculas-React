export default function Paginacion(props){
  
    const getPaginas = () => {
        const resultado = [];
        for(let i = 0; i < props.total; i++){
            resultado.push(<a onClick={props.onChange} className={props.pagina === (i + 1) ? "active" : ""} href="#">{i+ 1}</a>)
            return resultado;
        }
    }
    return(
        <div className="topbar-filter">
            <label>Movies per page:</label>
            <select>
                <option value="range">5 Movies</option>
                <option value="saab">10 Movies</option>
            </select>
            <div className="pagination2">
                <span>Páginae {props.pagina} de {props.total}:</span>
                
                {getPaginas()} 
                

                <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
      </div>

    );
}