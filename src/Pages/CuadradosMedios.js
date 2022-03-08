import React, {useState} from 'react';
import '../css/cuadrados-medios.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Table from '../components/Table';
import '../components/Table/table.css';
import Button from '../components/Button';


let x = [];
let y = [''];
let d = 0;

const renderTable = (semilla, limite) => {
    let rows = [];
    
    d = parseInt(semilla.length);
    x[0] = semilla;
    for(let i = 1; i <= parseInt(limite); i++){
        let columns = [];
        y[i] = Math.pow(parseInt(x[i-1]),2) + "";
        if((y[i].length-d) % 2 !== 0){
            let cero = '0';
            cero += y[i]
            y[i] = cero;
        }
        x[i] = digitosMedios(y[i],d);
        columns[0] = i;
        columns[1] = y[i];
        columns[2] = x[i];
        columns[3] =  x[i]/Math.pow(10,d);
        rows[i-1]= columns;

       

    }



    if(degenerado() === -1){
        console.log('No se degenerado.');
    }
    else{
        console.log('Si degenerado en ' + degenerado());

    }

    return rows;

}

const degenerado = () => {
    for(let i = 0; i < x.length; i++) {
        for(let j = i + 1; j < x.length; j++) {
            if(x[i] === x[j]){
                console.log('DEgenea', x[i]);
                return i;
            }
        }
    }
    return -1;

}


const digitosMedios = (y,d) => {
    console.log('y: ', y);


    let cantidadNumerosNoMedios = parseInt((y.length - d)/ 2);
    let medios = '';
    for(let i = cantidadNumerosNoMedios; i < y.length - cantidadNumerosNoMedios; i++){
        medios += y.charAt(i);
        console.log(medios);
    }

    return parseInt(medios);
}



const CuadradosMedios = () => {
    const [semilla, setSemilla] = useState(''); 
    const [limite, setLimite] = useState('');
    const [body, setBody] = useState([]);
    const [headers, setHeaders] = useState([]);
    const titles = ['i','yi','xi','ri'];



    return(
        <div>
             <Header pos="1"/>
             <div className="input-container">
                <Input  onChange={event => {setSemilla(event.target.value)}} message="Ingrese la semilla"/>
                <Input onChange={event => setLimite(event.target.value)}message="Ingrese el límite"/>
                <Button onClick={() => {(setBody(renderTable(semilla,limite))); setHeaders(titles)}} text={"Enviar"}/>
             </div>
             <Table headers={headers} bodyTable={body} /> 
             <Footer/>
        </div>
    );
}

export default CuadradosMedios;