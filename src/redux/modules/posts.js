const moduleName = "posts";

const GET_POSTS = `${moduleName}/GET_POSTS`;
const DELETE_CURRENT_POST = `${moduleName}/DELETE_CURRENT_POST`;
const CREATE_POST = `${moduleName}/CREATE_POST`;

const defaultState = {
  posts: [],
};

export const posts = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload };
    case DELETE_CURRENT_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload),
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [payload.post, ...state.posts],
      };

    default:
      return state;
  }
};

export const getPosts = () => async (dispatch) => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => dispatch({ type: GET_POSTS, payload: data }))
    .catch((err) => console.log(err));
};

export const deleteCurrentPost = (id) => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  })
    .then(() => dispatch({ type: DELETE_CURRENT_POST, payload: { id } }))
    .catch((err) => console.log(err));
};

export const createPost = (post) => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: post,
  })
    .then(() => dispatch({ type: CREATE_POST, payload: { post } }))
    .catch((err) => console.log(err));
};
