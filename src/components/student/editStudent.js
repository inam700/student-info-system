import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import { getStudent, updateStudent } from "../../actions/studentActions";

class EditStudent extends Component {
  state = {
    studentName: "",
    department: "",
    email: "",
    phone: "",
    errors: {},
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { studentName, department, email, phone } = nextProps.students;
    this.setState({
      studentName,
      department,
      email,
      phone,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getStudent(id);
  }

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

    const { id } = this.props.match.params;

    const updStudent = {
      id,
      studentName,
      department,
      email,
      phone,
    };

    this.props.updateStudent(updStudent);

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
        <div className="card mb-3">
          <div className="card-header">Edit Student</div>
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
                value="Update Student"
                className="btn btn-light btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  students: state.students.item,
});

export default connect(mapStateToProps, { getStudent, updateStudent })(
  EditStudent
);
