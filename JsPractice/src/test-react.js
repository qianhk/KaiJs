import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {liked: false};
  }

  handleClick = () => {
    this.setState({liked: !this.state.liked});
  }

  render() {
    let text = this.state.liked ? 'like' : "don't like"
    return <h1 onClick={this.handleClick}>Hello, I {text} {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <HelloMessage name="Spirit" />,
  document.getElementById('root2')
);