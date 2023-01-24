const Validation = (values) => {
    let errors = {};
    if (!values.userName) {
      errors.userName = "Name is Required";
    } else if (values.userName.length < 5) {
      errors.userName = "Name must be more than 5 char";
    }
    if (!values.email) {
      errors.email = "Email is Reruired";
    } else if (values.email.length < 8) {
      errors.email = "Email must be more than 8 char";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone number required";
    } else if (values.phoneNumber.length < 10) {
      errors.phoneNumber = "Phone number must be at least 10 number";
    }
    return errors;
  };
  export default Validation;
  