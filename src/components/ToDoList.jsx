import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHideCompletedCheckboxChecked: false,
    };
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>{this.props.owner}'s To Do List</h1>
        <label htmlFor="done-checkbox">Hide Completed Tasks</label>
        <input
          onClick={() => {
            this.setState({
              isHideCompletedCheckboxChecked: !this.state
                .isHideCompletedCheckboxChecked,
            });
          }}
          checked={this.state.isHideCompletedCheckboxChecked}
          type="checkbox"
          id="done-checkbox"
        />
        <ul>
          {this.props.todos
            .filter(todo => {
              return (
                !todo.isComplete ||
                (todo.isComplete && !this.state.isHideCompletedCheckboxChecked)
              );
            })
            .map(individualTodoInsideOfTodos => {
              return (
                <li key={individualTodoInsideOfTodos.id}>
                  {individualTodoInsideOfTodos.isComplete ? (
                    <del>{individualTodoInsideOfTodos.display}</del>
                  ) : (
                    individualTodoInsideOfTodos.display
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
