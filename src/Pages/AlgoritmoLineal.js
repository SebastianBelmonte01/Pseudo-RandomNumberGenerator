import React, {useState} from 'react'
import '../css/algoritmo-lineal.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';
import Message from '../components/Message';





let components = [];

const renderTable = (semilla, limite, k) => {
    const columns = [];
    let x =[];
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

    components[0] = "g="+ g+"\n";
    components[1] = "m="+ m+"\n";
    components[2] = "c="+ c+"\n";
    components[3] = "a="+ a+"\n";





    console.log(c);

    for(let i = 1; i <= parseInt(limite); i++){
        let rows = [];
        x[i] = ((x[i-1] * a) + c) % m;
        console.log("x ",x[i]);
        rows[0] = i;
        rows[1] = x[i];
        rows[2] = (x[i] / (m - 1)).toFixed(4);
        console.log("rs", rows[2]);
        columns[i-1] = rows;
    }

    return columns;
}

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

const sendInformation = () => {
    return components;
}

const AlgoritmoLineal = () => {
 const [semilla, setSemilla]= useState('');
 const [limite, setLimite]= useState('');
 const [k,setK] = useState('');
 const [body, setBody] = useState([]);
 const [header, setHeader] = useState([]);
 const titles = ['i','xi','ri'];
 const [information, setInformation] = useState('');


  return (
    <div>
        <Header pos={'3'} />
        <div className="input-container">
           <Input message="Ingrese la semilla" onChange={event => setSemilla(event.target.value)}/>
           <Input message="Ingrese el limite" onChange={event => setLimite(event.target.value)}/> 
           <Input message="Ingrese k" onChange={event =>setK(event.target.value)}/> 
           <Button text="Enviar" onClick={()=> {setBody(renderTable(semilla, limite, k)); setHeader(titles); setInformation(sendInformation())}}/>
           <Message message={information} />
        </div>
        <Table headers={header} bodyTable={body}/>
        <Footer />
    </div>
  )
}

export default AlgoritmoLineal;