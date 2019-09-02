import React from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';

function Table_home() {
    return (
        <center>
            <div className="withtable">
                <Table bordered responsive striped border hover class>
                    <thead>
                        <th> Sr.no.</th>
                        <th>Complaints Nearby</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Patchwork needed on M.G. Road</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Viresh needs to be baby-sitted</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Your kid did not complete his homework</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Someone stole your dog</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>There might be a surprise test tomorrow</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Just trying to fill out the page</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Almost reached there</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>One of the last elements</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>This is the last complaint</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </center>
    )
}
export default Table_home