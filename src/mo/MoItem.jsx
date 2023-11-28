
const MoItem = ({item,Del,onEdit}) => {
    const {genre, date, name,actor,id} = item  
    

  
const onSubmit = (e) =>{
    e.preventDefault()
}
   
    return (
        <li onSubmit={onSubmit}>
            <strong>{genre}</strong>
            <strong>{name}</strong>
            <strong>{actor}</strong>
            <strong>{date}</strong>
            <strong>
            <button type="submit" onClick={()=>onEdit(id)}><i className="xi-pen"></i></button>
            <button onClick={()=>Del(id)}><i className="xi-trash"></i></button>
            </strong>
        </li>
        
    );
};

export default MoItem;