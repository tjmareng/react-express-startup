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
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(event) {
    this.setState({ name: event.target.value });
  }

  submit(event) {
    event.preventDefault();
    fetch(`/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <div>
        <Segment basic textAlign="center" vertical>
          <Form class="ui form" onSubmit={this.submit}>
            <Input
              value={this.state.name}
              onChange={this.change}
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
