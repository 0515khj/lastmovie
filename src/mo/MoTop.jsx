
const MoTop = ({cpcp}) => {
    return (
        <div>
            <h1>영화 관리 리스트</h1>

<select onClick={cpcp}>
<option value="">==정렬==</option>
<option value="genre">장르</option>
<option value="name">제목</option>
<option value="date">개봉일</option>
</select>
        </div>
    );
};

export default MoTop;