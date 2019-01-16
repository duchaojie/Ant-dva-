class Son extends React.Component {
  render() {
    return <input onChange={this.props.onChange} />;
  }
}

class Father extends React.Component {
  constructor() {
    super();
    this.state = {
      son: "",
    }
  }
  changeHandler(e) {
    this.setState({
      son: e.target.value,
    });
  }
  render() {
    return (
<div>
      <Son onChange={this.changeHandler.bind(this)} />
      <p>这里显示 Son 组件的内容：{this.state.son}</p>
    </div>
);
  }
}

ReactDOM.render(<Father />, mountNode);
