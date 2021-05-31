import React, { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';

const Pozo = () => {

    const { pozitos, setPozitos } = useContext(HomeContext);
    const AddPozito = () => setPozitos([...pozitos, Date.now()])

    return (
        <div>
            <br />
            <button onClick={AddPozito} className="btn btn-success">Add Pozito</button>
            {pozitos.length > 0 && pozitos.map(x => <div key={x}>{x}</div>)}
        </div>
    );
}

export default Pozo;
