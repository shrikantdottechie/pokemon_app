const React = require('react');
const pokemon = require('../models/pokemon.js');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};
class Show extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <>
                <h1>Gotta Catch 'Em All</h1>
                <h3>Show Page </h3>
                <div style={myStyle}>My First React Show page!</div>
                <div>

                    <ul>

                        <li>

                            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.substr(1).toLowerCase()}</h2>
                            {' '}
                            {' '}
                            <img src={pokemon.img + '.jpg'} />
                            <br></br>
                            {' '}
                            <a href='\pokemon'>
                                <h2>back</h2>
                            </a>{' '}
                            <br />
                        </li>
                    </ul>
                </div>
            </>
        )
    }

};
module.exports = Show;

