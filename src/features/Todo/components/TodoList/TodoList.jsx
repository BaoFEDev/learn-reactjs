import React from 'react'
import PropTypes from "prop-types";

const TodoList = (props) => {
    let { todoList } = props;
    return (
        <ul>
            {todoList.map(i => (
                <li key={i.id}>{i.title}</li>
            ))}
        </ul>
    )
}
TodoList.propTypes = {
    todoList: PropTypes.array
};
TodoList.defaultProps = {
    todoList: []
};
export default TodoList
