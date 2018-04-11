/*
 Each of the below functions returns an object with a type property by which the reducer determines how the state is to be updated.

 Besides type these payloads can have any property as values which can later be used inside the reducer function while modifying the state.

 We update the actions/index.js file so that we can access all actions in one place.
*/

export const addPost = content => {
  return {
    type: 'ADD_POST',
    content
  }
}

export const updatePost = (id, content) => {
  return {
    type: 'UPDATE_POST',
    id,
    content
  }
}

export const deletePost = id=> {
  return {
    type: 'DELETE_POST',
    id
  }
}