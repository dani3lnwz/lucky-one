import React from 'react';
import './Extra.css'

const Extra = () => {
    return (
        <div className='Ans'>
            <h5>How React Works?</h5>
            <p>React worksin declarative way.Declaretive means developers don't need to mentioned how this code will work rather than developer only write expressions fow what we want.React is a javascript library,Javascript  ads interectivity to our website and make it eaiser.React use declarative code to create components.which is give us opportinity to show data called information dynamiclly. React does not commit state changes one after the other,if there are multiple state changes. In fancy words, React does batch updates.</p>
            <h5>Difrence between props and state.</h5>
            <p>props: <br />
            1:props are read only. <br />
            2:props can not be modified. <br />
            3:Props are immutable. <br />
            state: <br />
            1:state changes can be asynchronous. <br />
            2:State can be modified using this.setState. <br />
            3:State are mutable.</p>
        </div>
    );
};

export default Extra;