import React, {useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';
import Message from '../components/Message';

let x = [];
let components = [];

const renderTable = (semilla, limite, k) => {
    let columns = [];
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
            let row = [];

            x[i] = ((x[i-1] * a) ) % m;
            row[0] = i;
            row[1] = x[i];
            row[2] = (x[i] / (m - 1)).toFixed(4);

            columns[i - 1] = row;
    
        }
    
        console.log(g,"g");
        console.log(m,"m");
        console.log(a,"a");

        
        components[0] = "g="+ g+"\n";
        components[1] = "m="+ m+"\n";
        components[2] = "a="+ a+"\n";
    }
    return columns;

}

const sendInformation = () => {
    return components;
}


const AlgoritmoMultiplicativo = () => {
    const[semilla, setSemilla] = useState('');
    const[k, setK] = useState('');
    const[limite, setLimite] = useState('');
    const [header, setHeader] = useState([]);
    const [body, setBody] = useState([]);
    const titles = ['i','xi','ri'];
    const [information, setInformation] = useState('');
 
  return (
    <div> 
        <Header pos='4'/>
        <div className="input-container">
            <Input message='Ingrese la semilla' onChange={event => setSemilla(event.target.value)} />
            <Input message='Ingrese el limite' onChange={event => setLimite(event.target.value)} />
            <Input message='Ingrese el k' onChange={event=> setK(event.target.value)} />
            <Button text="Enviar" onClick={() => {setBody(renderTable(semilla, limite, k)); setHeader(titles); setInformation(sendInformation())}} />
            <Message message={information} />
        </div>
        <Table headers={header} bodyTable={body}/>

        <Footer />

    </div>
  )
}

export default AlgoritmoMultiplicativo