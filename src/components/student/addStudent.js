import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { addStudent } from "../../actions/studentActions";

class AddStudent extends Component {
  state = {
    studentName: "",
    department: "",
    email: "",
    phone: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { studentName, department, email, phone } = this.state;

    // Check For Errors
    if (studentName === "") {
      this.setState({ errors: { studentName: "Name is required" } });
      return;
    }
    if (department === "") {
      this.setState({ errors: { department: "Department is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newStudent = {
      studentName,
      department,
      email,
      phone,
    };

    this.props.addStudent(newStudent);

    // Clear State
    this.setState({
      studentName: "",
      department: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { studentName, department, email, phone, errors } = this.state;

    return (
      <div className="container">
        <div className="card mb-3" style={{ marginTop: "10px" }}>
          <div className="card-header">Add New Student</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                label="Student Name"
                name="studentName"
                placeholder="Enter Name"
                value={studentName}
                onChange={this.onChange}
                error={errors.studentName}
              />
              <TextInputGroup
                label="Department"
                name="department"
                placeholder="Enter Department"
                value={department}
                onChange={this.onChange}
                error={errors.department}
              />
              <TextInputGroup
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />
              <TextInputGroup
                label="Phone"
                name="phone"
                placeholder="Enter Phone"
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
              />
              <input
                type="submit"
                value="Add Student"
                className="btn btn-light btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addStudent })(AddStudent);
