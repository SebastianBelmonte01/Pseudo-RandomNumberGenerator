import React from 'react';
import './table.css';

const Table = () => {
    return(
        <div className="general-container">
            <div className="table-container">
                <table>
                    <tbody>
                        <tr>
                            <th>0</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>

                        </tr>
                        <tr>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>
                            <td>Hola</td>

                        </tr>

                    </tbody>
                </table> 
            </div>
        </div>

    );
        {/* <table>
            <tr>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>

            </tr>
        </table> */}

}

export default Table;