import React from 'react';

const Home = () => {
    return (
        <div>
            <div>Home component is the very best</div>
            <button onClick={ () => console.log('Hi there')}>Press me!</button>
        </div>
    );
}

export default Home;