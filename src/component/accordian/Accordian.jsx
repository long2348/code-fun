import { useState } from 'react';
import data from './data';
import './Accordian.scss';

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enabledMulti, setEnabledMulti] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSelect = (id) => {
        setSelected(id === selected ? null : id);
    }

    const handleMutilSelected = (id) => {
        let arrayMulti = [...multiple];
        const findIndexId = arrayMulti.indexOf(id);

        if (findIndexId === -1) arrayMulti.push(id);
        else arrayMulti.splice(findIndexId, 1);

        setMultiple(arrayMulti);
    }

    return (
        <>
            <div className='wrapper'>
                <button onClick={() => setEnabledMulti(!enabledMulti)}>
                    {enabledMulti ? "Disable Multi Selection" : "Enable Multi Selection"}
                </button>
                <div className='accordian'>
                    {
                        data && data.length > 0 ? (
                            data.map((dataItem) => <div className='item'>
                                <div onClick={enabledMulti ? () => handleMutilSelected(dataItem.id) : () => handleSelect(dataItem.id)} className='title'>
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enabledMulti ? multiple.indexOf(dataItem.id) !== -1 && <div className='content'> {dataItem.answer} </div>
                                        : selected === dataItem.id && <div className='content'> {dataItem.answer} </div>
                                }
                            </div>)
                        )

                            : (<div>
                                data not found
                            </div>)
                    }
                </div>
            </div>
        </>
    );
}

export default Accordian;