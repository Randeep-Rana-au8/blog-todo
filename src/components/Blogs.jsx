import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../actions/actions";

const Blogs = (props) => {
  console.log(props);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.addTodo(event.target.title.value);
          event.target.title.value = "";
        }}
      >
        <input type="text" name="title" required />
        <button type="submit">Submit</button>
      </form>

      {props.blogs.map((blog) => (
        <div>
          <h2 key={blog.id}>{blog.content}</h2>
          <button onClick={() => props.deleteTodo(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps, { addTodo, deleteTodo })(Blogs);
