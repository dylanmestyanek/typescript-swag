import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface Props {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class App extends React.Component<Props> {
  state = { fetching: false };

  componentDidUpdate(prevProps: Props): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  fetchData = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo) => (
      <div key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}>
        {todo.title}
      </div>
    ));
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchData}>Fetch</button>
        {this.renderList()}
        {this.state.fetching && "LOADING..."}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
