import React from 'react';


class Form extends React.Component {
  state = {
    label: ""
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onFormName(this.state.label);
    this.setState({
      label: ""
    })
  }

  render(){
    return (
      <div>
        <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
          <input type="text" className="form-control" onChange={this.onLabelChange}
          placeholder="Please, enter the organization's name" value={this.state.label} />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}





export default Form;
