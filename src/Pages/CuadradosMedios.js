import React, {useState} from 'react';
import '../css/cuadrados-medios.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Table from '../components/Table';
import '../components/Table/table.css';
import Button from '../components/Button';
import ReactDOM from 'react-dom';


let d = 0;
let x = [];
let y = [''];



// const Table = () => {
//     return(
//         // console.log('i:', i, ' yi',y,' xi', x[i],' ri', x[i]/Math.pow(10,d));

//         <div className="general-container">
//             <div className="table-container">
//                 <table>
//                     <tbody>
//                         <tr>
//                             <th>i</th>
//                             <th>yi</th>
//                             <th>xi</th>
//                             <th>ri</th>

//                         </tr>
//                         <tr>
//                             {
//                                 () => {
//                                     for(let i = 1; i <= d; i++){
//                                     <>
//                                         <td>i</td>
//                                         <td>y[i]</td>
//                                         <td>x[i]</td>
//                                         <td>{x[i]/Math.pow(10,d)}</td>   
//                                     </>

//                                     }
                                    
//                                 }
 
                                
//                             }
                     

//                         </tr>

//                     </tbody>
//                 </table> 
//             </div>
//         </div>

//     );
// }

const renderTable = (semilla, limite) => {
    d = parseInt(semilla.length);
    x[0] = semilla;
    for(let i = 1; i <= parseInt(limite); i++){
        y[i] = Math.pow(parseInt(x[i-1]),2) + "";
        // console.log('d',d,'y[i]',y[i]);
        // console.log((y[i]-d) % 2);
        if((y[i].length-d) % 2 !== 0){
            // console.log('Entreo');
            let cero = '0';
            cero += y[i]
            y[i] = cero;
        }
        x[i] = digitosMedios(y[i],d);
        console.log('i:', i, ' yi',y[i],' xi', x[i],' ri', x[i]/Math.pow(10,d));
    }
    // ReactDOM.render(Table, document.getElementById('root'));

    if(degenerado() === -1){
        console.log('No se degenerado.');
    }
    else{
        console.log('Si degenerado en ' + degenerado());

    }
    



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

const buscarPorPosicion = (num) => {
    for(let i = 0; i < x.length; i++) {
        if(num === x[i]){
            console.log(i);
            return i;
        }
    }
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
    return(
        <div>
             <Header pos="1"/>
             <div className="input-container">
                <Input  onChange={event => {setSemilla(event.target.value)}} message="Ingrese la semilla"/>
                <Input onChange={event => setLimite(event.target.value)}message="Ingrese el límite"/>
                <Button onClick={() => renderTable(semilla,limite)} text={"Enviar"}/>
             </div>
             <Table/>        
             <Footer/>
        </div>
    );
}

export default CuadradosMedios;