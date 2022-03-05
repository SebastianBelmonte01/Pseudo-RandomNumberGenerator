import React from 'react';
import '../css/cuadrados-medios.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Table from '../components/Table';
import Button from '../components/Button';


const renderTable = () => {


}

const CuadradosMedios = () => {
    return(
        <div>
             <Header pos="1"/>
             <div className="input-container">
                <Input message="Ingrese la semilla"/>
                <Input message="Ingrese el límite"/>
                <Button onClick={renderTable} text={"Button"}/>
             </div>
             <Table/>        
             <Footer/>
        </div>
    );
}

export default CuadradosMedios;