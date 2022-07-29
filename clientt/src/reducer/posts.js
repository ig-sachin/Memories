import { CREATE, DELETE, FETCHALL, LIKE, UPDATE } from "../constants/actionTypes";
// step7

// in reducer 'state' always be equal to something
// we cannot have it equal to nothing
export default (posts = [], action) => {
    switch (action.type) {
        case FETCHALL:
            return action.payload;

        case CREATE:
            return [...posts, action.payload]

        case UPDATE:
        case LIKE:
            // here we have used ternanry operator
            // if our payload ID is matches the postID then return the newly updated post else return post
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)


        case DELETE:
            // here we are filtering and taking only those post whose ID is not deleted
            return posts.filter((post) => post._id !== action.payload._id)

        default:
            return posts;
    }
}