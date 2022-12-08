const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New pokemon page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action="/pokemon" method="POST">
                    Name: <input type="text" name="name" /><br />
                    img : <input type="text" name="image-url" /><br />
                    <input type="submit" name="" value="Create pokemon" />
                </form>
            </div>);
    }
}

module.exports = New;