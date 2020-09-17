import {
  GET_STUDENTS,
  GET_SINGLE,
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from "./types";
import axios from "axios";
export const getStudents = () => async (dispatch) => {
  console.log("getting");
  const res = await axios.get(
    "http://localhost:8080/api/v1/studentinfosystem/students"
  );
  dispatch({
    type: GET_STUDENTS,
    payload: res.data,
  });
};

export const getStudent = (id) => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:8080/api/v1/studentinfosystem/singlestudent/${id}`
  );
  dispatch({
    type: GET_SINGLE,
    payload: res.data,
  });
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `http://localhost:8080/api/v1/studentinfosystem/deletestudent/${id}`
    );
    dispatch({
      type: DELETE_STUDENT,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DELETE_STUDENT,
      payload: id,
    });
  }
};
export const addStudent = (student) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:8080/api/v1/studentinfosystem/addstudent",
    student
  );
  dispatch({
    type: ADD_STUDENT,
    payload: res.data,
  });
};
export const updateStudent = (student) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:8080/api/v1/studentinfosystem/updatestudent/${student.id}`,
    student
  );
  dispatch({
    type: UPDATE_STUDENT,
    payload: res.data,
  });
};
