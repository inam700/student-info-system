import {
  GET_STUDENTS,
  GET_SINGLE,
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_SINGLE:
      return {
        ...state,
        item: action.payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case DELETE_STUDENT:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        items: state.items.map((student) =>
          student.id === action.payload.id
            ? (student = action.payload)
            : student
        ),
      };
    default:
      return state;
  }
}
