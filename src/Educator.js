import React from 'react';
import ReactDOM from 'react-dom';

const courses = [
  { id: 1, name: 'Angular', educator: 'Rob' },
  { id: 2, name: 'ReactJS', educator: 'John' },
  { id: 3, name: 'AJAX', educator: 'Max' },
];
class Educator extends React.Component {
  state = {
    courseData: courses,
    selected: false,
  };

  constructor(props) {
    super(props);
    console.log('Initialization phase: constructor() executed');
  }

  componentWillMount = () => {
    console.log('Mounting Phase: componentWillMount() executed');
  };

  render = () => {
    var users = this.state.courseData;
    console.log('Mounting Phase: render() executed');
    return (
      <div>
        <h4>UI Courses List</h4>
        <div>
          {users.map((userDetails) => {
            return (
              <div key={userDetails.id}>
                <b>Course: </b>
                {userDetails.name} <br />
                <b>Educator: </b>
                {userDetails.educator} <br />
                <button onClick={this.clickHandler}>Details</button>
                <br />
                <br />
              </div>
            );
          })}
        </div>
        <button onClick={this.exitComponent}>Exit</button>
      </div>
    );
  };

  componentDidMount = () => {
    console.log('Mounting Phase: componentDidMount() executed');
  };

  clickHandler = () => {
    console.log('Details button clicked, state will change');
    this.setState({ selected: true });
  };

  exitComponent = () => {
    console.log('Exit Button Clicked, component will be destroyed');
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  };

  componentWillMount = () => {
    console.log("Un-Mounting Phase: 'componentWillUnmount()' executed");
  };
}

export default Educator;
