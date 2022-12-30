import * as React from 'react';
import TestNetCard from '../../components/TestNetCard';
import '';

export const TestNetsList = (props) => {
    console.log('hiii ', props.data);
    // const { testnet } = props.data;
    return (<div id="testnets">
        <div className='title'>Testnets ({6})</div>
        {
            // testnet.map(item => <TestNetCard key={item.id} data={item}/>)
        }
    </div>);
}