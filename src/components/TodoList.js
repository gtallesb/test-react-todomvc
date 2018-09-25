import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";


class TodoList extends Component {
  constructor(props) {
     super(props);

     this.state = {
      items: []
     };

     this.addItem = this.addItem.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
     this.calculatingTasks = this.calculatingTasks.bind(this);


   }

   deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {

    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
 }

 calculatingTasks() {
    if (this.state.items.length > 1)
     return this.state.items.length + " tasks left";
    else if (this.state.items.length === 0)
      return "0 tasks left";
     else
      return "1 task left";

  }


   addItem(e) {
     if (this._inputElement.value !== "") {

     var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });

    this._inputElement.value = "";
  }



   console.log(this.state.items);

   e.preventDefault();

  }


  render() {
    var tasks = this.calculatingTasks();

    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="To-Do">
            </input>
            <button type="submit">New</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
        <p><strong>{tasks}</strong></p>

      </div>
    );
  }
}

export default TodoList;
