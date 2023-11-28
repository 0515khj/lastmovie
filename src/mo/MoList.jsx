import MoItem from "./MoItem";



const MoList = ({data , Del ,onEdit}) => {

    return (
        <div className="con2">
            <p>
                <span >장르</span>
                <span >제목</span>
                <span >주인공</span>
                <span >개봉일</span>
                <span >관리</span>
            </p>        
            <ul className="list">
               {
                data.map(item=><MoItem key={item.id} item={item} Del={Del} onEdit={onEdit}
                   />)
               }
            </ul>
        </div>
    );
};

export default MoList;