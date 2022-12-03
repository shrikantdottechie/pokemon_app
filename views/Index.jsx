const React = require('react');
const pokemon = require('../models/pokemon.js');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};
class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <>
                <h1>See All The Pokemon!</h1>
                <div style={myStyle}>My First React Index Component!</div>
                <div>
                <h2>Pokemon Index Page</h2>
                <ul>
                    {pokemon.map((role,x) => {
                        return (
                            <li>
                                The{' '}
                                <a href={`/pokemon/${x}`}>
                                {role.name.charAt(0).toUpperCase() + role.name.substr(1).toLowerCase()}
                                </a>{' '}
                                is {role.img} <br></br>
                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
         </>
        )
    }

};
module.exports = Index;