const React = require('react');
const DefaultLayout = require('./default');
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
                <DefaultLayout title={"Pokemon Index Page"}>
                    
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
                                        <br />
                                        <br></br>
                                        <a href={`/pokemon/${role._id}/edit`}>Edit This pokemon</a>
                                        <br />
                                        <br />
                                        <br></br>
                                        {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                                        <form action={`/pokemon/${role._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="DELETE" />
                                        </form>
                                        <br />
                                        <br></br>
                                        <br />
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                </DefaultLayout>
            </>
        )
    }

};
module.exports = Index;