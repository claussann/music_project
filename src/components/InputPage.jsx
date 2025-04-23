import Button from "./Bottone";
import Typography from '../components/Typography';

import 'bootstrap/dist/css/bootstrap.min.css'
import './InputPage.css'
import { useState } from "react";
import { useEffect } from "react";

function InputPage({ musicType }) {
    const [groupList, setGroupList] = useState('')
    const [list,setList] = useState([])

    const addGroup = () => {
        if(groupList.trim() !== ''){
            setList([...list, groupList.trim()]);
            setGroupList('')
        }
    }

    return (
        <div className="container" id="input">
            <div className="row d-flex justify-content-center">
                <div className='col-12'>
                    <input onChange={event => setGroupList(event.target.value)} className="form-control mb-3" value={groupList} type="text" placeholder={`inserisci i tuoi gruppi ${musicType} preferiti`} />
                </div>
                <Button onClick={addGroup} children={`Add ${musicType} group`} />
            </div>
            <div className="row d-flex justify-content-center">
                <div className='col-6 d-flex justify-content-center' id="groupList">
                    <ul>
                    {list.map((band) => (
                            <li>{band}</li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InputPage