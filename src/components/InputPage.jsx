import { useState } from "react";

import Button from "./Bottone";
import Loading from "./Loading"

import 'bootstrap/dist/css/bootstrap.min.css'
import './InputPage.css'

function InputPage({ musicType }) {
    const [groupList, setGroupList] = useState('')
    const [list, setList] = useState([])
    const [showModal, setShowModal] = useState(false)

    const addGroup = () => {
        if (groupList.trim() !== '') {
            setList([...list, groupList.trim()]);
            setGroupList('')
        }
    }

    const save = () => {
        localStorage.setItem(musicType, JSON.stringify(list))
        alert(`salvato nel local storage con key ${musicType}`)
    }

    const load = () => {
        const loadedGroup = JSON.parse(localStorage.getItem(musicType))
        if (Array.isArray(loadedGroup)) {
            alert(`${musicType} groups are loaded...`)
            setList(loadedGroup)
        } else {
            alert('no groups are stored in local storage')
        }
    }
    
    const storageDelete = () => {
        const deletedGroups = localStorage.getItem(musicType)
        setShowModal(true)
        setList([])
        localStorage.removeItem(musicType)
        if(!deletedGroups){
            alert('localStorage is Empty')
        }
    }

    return (
        <div className="container" id="input">
            <div className="row d-flex justify-content-center">
                <div className='col-12'>
                    <input onChange={event => setGroupList(event.target.value)} className="form-control mb-3" value={groupList} type="text" placeholder={`inserisci i tuoi gruppi ${musicType} preferiti`} />
                </div>
                <Button onClick={addGroup} children={`Add ${musicType} group`} />
                <Button onClick={save} children={`Save in localStorage`} />
                <Button onClick={load} children={`Load from localStorage`} />
                <Button onClick={storageDelete} children={`Delete localStorage`} />
            </div>
            <div className="row d-flex justify-content-center">
                <div className='col-6 d-flex justify-content-center' id="groupList">
                    <ul>
                        {list.map((band, index) => (
                            <li key={index}>{band}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {showModal && <Loading children={`All groups saved in local storage was deleted...`} />}
        </div>
    )
}

export default InputPage