import React from 'react';
import './table.css';

const Table = ({headers, bodyTable}) => {
    return(
        <div className="general-container">
            <div className="table-container">
                <table>
                    <tbody>
                       <tr>
                            {
                                headers.map((item,index)=><th key={item + '-' + index}>{item}</th>)
                            }

                        </tr>
                            {
                                bodyTable.map((row, index) => 
                                    (
                                        <tr key={'row-' + index}>{row.map( (column, colIndex) => <td key={'column' + '-' + colIndex}>{column}</td>)}</tr>
                                    ))
                            }
 
                    </tbody>
                </table> 
            </div>
        </div>

    );
}

export default Table;