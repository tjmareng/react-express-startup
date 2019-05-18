import React from "react";
import "./App.css";
import 'semantic-ui/dist/semantic.min.css';
import { Button, Segment, Input, Form } from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      greeting: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <div>
        <Segment basic textAlign="center" vertical>
          <Form class="ui form" onSubmit={this.handleSubmit}>
            <Input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder="First Name"
            />
            <Button class="ui button" type="submit">
              Submit
            </Button>
          </Form>
          <p>{this.state.greeting}</p>
        </Segment>
      </div>
    );
  }
}

export default App;
