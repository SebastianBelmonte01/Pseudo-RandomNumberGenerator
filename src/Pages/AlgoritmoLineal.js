import React, {useState} from 'react'
import '../css/algoritmo-lineal.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';


let x = [];



 const primoCercano = (m) => {
    for(let i = m + 1; true; i++) {
        let c = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j === 0){  
                c++;
            }

        }
        if(c === 2){
            return parseInt(i);
        }
    }
}

const renderTable = (semilla, limite, k) => {
    x[0] = semilla;
    console.log(semilla,": semilla");
    console.log(limite,": limite");
    console.log(k,": k");

    let g = Math.ceil(Math.log(limite) / Math.log(2));
    let m = Math.pow(2,g);
    const c = primoCercano(m);
    let a = 1 + (4 * parseInt(k));

    console.log(g,"g");
    console.log(m,"m");
    console.log(c,"c");
    console.log(a,"a");




    console.log(c);

    for(let i = 1; i <= parseInt(limite); i++){
        x[i] = ((x[i-1] * a) + c) % m;
    }

    for(let i = 1; i < x.length; i++){
        console.log("x ",x[i]);
    }
}

const AlgoritmoLineal = () => {
 const [semilla, setSemilla]= useState('');
 const [limite, setLimite]= useState('');
 const [k,setK] = useState('');
  return (
    <div>
        <Header pos={'3'} />
        <div className="input-container">
           <Input message="Ingrese la semilla" onChange={event => setSemilla(event.target.value)}/>
           <Input message="Ingrese el limite" onChange={event => setLimite(event.target.value)}/> 
           <Input message="Ingrese k" onChange={event =>setK(event.target.value)}/> 
           <Button text="Enviar" onClick={()=> renderTable(semilla, limite, k)}/>
        </div>
        <Table />

        <Footer />
    </div>
  )
}

export default AlgoritmoLineal;