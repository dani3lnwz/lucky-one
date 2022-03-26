import React from 'react';

const Extra = () => {
    return (
        <div>
            <h5>How React Works?</h5>
            <p>React does not commit state changes one after the other,if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates.</p>
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