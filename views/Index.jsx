const React = require('react');

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
                    <>
                        <nav>
                            <a href="/pokemon/new">Create a New Pokemon</a>
                        </nav>
                        <ul>
                            {pokemon.map((role, i) => {
                                return (
                                    <li>
                                        The
                                        {' '}
                                        <a href={`/pokemon/${role.id}`}>
                                            {role.name.charAt(0).toUpperCase() + role.name.substr(1).toLowerCase()}
                                        </a>
                                        {' '}

                                        <br />
                                        <br></br>
                                        <br />
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                </div>
            </>
        )
    }

};
module.exports = Index;