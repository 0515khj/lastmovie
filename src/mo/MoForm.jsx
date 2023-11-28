
const MoForm = ({onSubmit,Mo,cp,ref,edit}) => {
    const {genre, date, name,actor} = Mo

    

    return (
        <div className="box con1">
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="" >장르</label>
                    <input type="text" value={genre} name="genre"onChange={cp} ref={ref}
                    placeholder="볼링치고싶다"/>
                </p>
                <p>
                    <label htmlFor="">제목</label>
                    <input type="text" value={name} name="name" onChange={cp} ref={ref}
                    placeholder="볼링"/>
                </p>
                <p>
                    <label htmlFor="" >주인공</label>
                    <input type="text" value={actor} name="actor" onChange={cp} ref={ref} 
                    placeholder="김현진"/>
                </p>
                <p>
                    <label htmlFor="">개봉일</label>
                    <input type="number" value={date} name="date" onChange={cp} ref={ref}
                    placeholder="2023-11-28" />
                </p>
                <p>
                    <button type="submit">
                     {
                        edit ? '수정':'등록'
                     }
                    </button>
                </p>
            </form>
        </div>
    );
};

export default MoForm;