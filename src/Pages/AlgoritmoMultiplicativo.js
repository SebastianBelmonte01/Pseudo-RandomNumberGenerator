import React, {useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';

let x = [];

const renderTable = (semilla, limite, k) => {
    if(parseInt(semilla) % 2 === 0){
        alert('La semilla debe ser impar');
        document.location.reload(true);
    }
    else{
        x[0] = semilla;
        console.log(semilla,": semilla");
        console.log(limite,": limite");
        console.log(k,": k");
    
        let g = Math.round((Math.log(limite) / Math.log(2) + 2));
        let m = Math.pow(2,g);
        let a = 3 + (8 * parseInt(k));

        for(let i = 1; i <= parseInt(limite); i++){
            x[i] = ((x[i-1] * a) ) % m;
            console.log("x ",x[i]);
    
        }
    
        console.log(g,"g");
        console.log(m,"m");
        console.log(a,"a");
    }

}


const AlgoritmoMultiplicativo = () => {
    const[semilla, setSemilla] = useState('');
    const[k, setK] = useState('');
    const[limite, setLimite] = useState('');
  return (
    <div> 
        <Header pos='4'/>
        <div className="input-container">
            <Input message='Ingrese la semilla' onChange={event => setSemilla(event.target.value)} />
            <Input message='Ingrese el limite' onChange={event => setLimite(event.target.value)} />
            <Input message='Ingrese el k' onChange={event=> setK(event.target.value)} />
            <Button text="Enviar" onClick={() => renderTable(semilla, limite, k)} />
        </div>
        <Table />

        <Footer />

    </div>
  )
}

export default AlgoritmoMultiplicativo