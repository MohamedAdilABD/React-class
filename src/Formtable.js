import React, { useState } from 'react';
//import './Formtable.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function Formtable() {
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [mul, setMul] = useState("")
    const [newval, setNewVal] = useState([])

    // const updatemultt = (number) => { }

    const setMultipleValue = (value) => {
        setMul(value);
    };
    const multipletable = (e) => {
        e.preventDefault();
        let startVal = parseInt(start);
        let endVal = parseInt(end);
        let mulVal = parseInt(mul);
        if (isNaN(startVal) || isNaN(endVal) || isNaN(mulVal)) {
            alert("Please enter valid number.");
            return;
        }
        let tableData = [];
        while (startVal <= endVal) {
            let res = startVal * mulVal;
            // tableData = [
            //     ...tableData,
            //     {start: startVal, endval: endVal, mulval: mulVal, result: result }
            // ];
            tableData.push({
                starta: startVal,
                enda: endVal,
                mula: mulVal,
                result: res
            })
            startVal++;
        }

        setNewVal(tableData);
    }
    return (
        <>
        <div className='box'>
            <h1>Tables</h1>
            <Form style={{ margin: "40px" }} onSubmit={multipletable}>
                <Row>
                    <input className='inp'
                        type='number'
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        placeholder='start' /> {""}

                    <input className='inp'
                        type='number'
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        placeholder='end' /> {""}
                </Row>
                <Row>

                    <button type="button" className='btn' onClick={() => setMultipleValue(1)}>1</button>
                    <button type="button" className='btn' onClick={() => setMultipleValue(2)}>2</button>
                    <button type="button" className='btn' onClick={() => setMultipleValue(3)}>3</button>
                    <button type="button" className='btn' onClick={() => setMultipleValue(4)}>4</button>
                    <button type="button" className='btn' onClick={() => setMultipleValue(5)}>5</button>
                </Row>
                <Row>

                    <button type="button" className='btn' onClick={() => setMultipleValue(6)}>6</button>
                    <button type="button" className='btn' onClick={() => setMultipleValue(7)}>7</button>
                    <button type="button" className='btn' onClick={() => setMultipleValue(8)}>8</button>
                    <button type="button" className='btn' onClick={() => setMultipleValue(9)}>9</button>
                    <button type="button" className='btn' onClick={() => setMultipleValue(10)}>10</button>
                </Row>


                {/* <input
            type='number'
            value={mul}
            onChange={(e) => setMul(e.target.value)}
            placeholder='multiple'/> {""} */}
                <br /> <br />
                <input className='btsub' type='submit' />
            </Form>
        </div>
          <div>
          {newval.length > 0 && (
              <table>
                  <thead>
                      <tr>
                          <th>Start Value</th>
                          <th>end Value</th>
                          <th>multiply By</th>
                          <th>Result</th>
                      </tr>
                  </thead>
                  <tbody>
                      {newval.map((item, index) => (
                          <tr key={index}>
                              <td>{item.startval}</td>
                              <td>{item.endval}</td>
                              <td>{item.mulval}</td>
                              <td>{item.result}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          )}
      </div>
      </>
    )
}