import React, {useState} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';

import '../css/producto-medio.css';



let d = 0;
let x = [];
let y = [''];

const renderTable = (semilla0, semilla1, limite) => {
  if(semilla0.length !== semilla1.length){
    alert('Las semillas deben poseer la misma longitud');
    
    document.location.reload(true);
  }
  else{
    d = parseInt(semilla0.length);
    x[0] = parseInt(semilla0);
    x[1] = parseInt(semilla1);

    for(let i = 1; i <= parseInt(limite); i++){
      y[i] = x[i] * x[i - 1] + "";
      console.log(y[i]);  
      if((y[i].length-d) % 2 !== 0){
        let cero = '0';
        cero += y[i]
        y[i] = cero;
      }
      x[i+1] = digitosMedios(y[i],d);
      console.log('i:', i, ' yi',y[i],' xi', x[i+1],' ri', x[i+1]/Math.pow(10,d));
    
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



const ProductoMedios = () => {

  const [semilla0, setSemilla0] = useState('');
  const [semilla1, setSemilla1] = useState('');
  const [limite, setLimite] = useState('');
  return (
    <div>
        <Header pos='2'/>
        <div className="input-container1">
          <Input onChange={event => setSemilla0(event.target.value)} message={'Ingrese la semilla x0'}/>
          <Input onChange={event => setSemilla1(event.target.value)} message={'Ingrese la semilla x1'}/>
          <Input onChange={event => setLimite(event.target.value)} message={'Ingrese el limite'} />
          <Button onClick={() => {renderTable(semilla0, semilla1, limite)}} text={"Enviar"} />
        </div>
        <Table />
        
        <Footer />
    </div>
  )
}

export default ProductoMedios;