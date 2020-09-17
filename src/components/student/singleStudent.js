import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStudent } from "../../actions/studentActions";

class Student extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getStudent(id);
  }

  render() {
    const {
      studentId,
      studentName,
      department,
      phone,
      email,
    } = this.props.students;
    return (
      <div className="container">
        <h3 style={{ textAlign: "center" }}>Get details of every Student </h3>
        <div className="card" key={studentId} style={{width:"20rem"}}>
          <div className="card-body">
            <h2 className="card-title">{studentName}</h2>
            <p className="card-text">Dept: {department}</p>
            <p className="card-text">Contact No: {phone}</p>
            <p className="card-text">E-Mail: {email}</p>
            <Link to={`/update-student/${studentId}`} className="card-link">
              Update
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  students: state.students.item,
});
export default connect(mapStateToProps, { getStudent })(Student);
