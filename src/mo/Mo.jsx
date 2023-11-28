import './style.scss'
import MoForm from './MoForm';
import MoList from './MoList';
import {useRef, useState } from 'react';
import MoTop from './MoTop';

const Mo = () => {

    const [data , setData]=useState([])
    const [edit , setEdit] = useState(false)
    const [ Mo , setMo]=useState({
        genre:'' , date:'', name:'',actor:''
    })
    const no = useRef(1)
    const ref = useRef()

    const cp = (e) =>{
        const {name , value} = e.target
        setMo({
            ...Mo,
            [name]:value
        })
    }

    const cpcp =(e)=>{
        const {value} = e.target
        setData([...data].sort((a,b)=>a[value] > b[value] ? 1: -1))
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!Mo.name || !Mo.genre || !Mo.actor || Mo.date < 1) return
        if(edit) {
            setData(data.map(item => item.id === Mo.id ? Mo : item))
            setEdit(false)
        }else{
            Mo.id = no.current++
            setData([...data,Mo])
        }
        setMo({genre:'' , date:'', name:'',actor:''})
            ref.current.focus();
           
    }

     const Del =(id)=>{
        setData(data.filter(item=> item.id !==id))
     }

     

     const onEdit =(id) =>{
        setEdit(!edit)
        setMo(data.find(item => item.id === id))
     }


    return (
        <div className='khj'>
                <MoTop cpcp={cpcp}/>
            <div className="boss">
                <MoForm onSubmit={onSubmit} cp={cp} Mo={Mo} ref={ref} edit={edit} />
                <MoList data={data} Del={Del}  onEdit={onEdit} />
            </div>
        </div>
    );
};

export default Mo;