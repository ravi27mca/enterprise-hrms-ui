import * as yup from "yup";

const departmentSchema = yup.object({

    departmentName: yup
        .string()
        .required("Department Name is required"),

    manager: yup
        .string()
        .required("Manager Name is required"),

    location: yup
        .string()
        .required("Location is required"),

    employeeCount: yup
        .number()
        .typeError("Employee Count must be a number")
        .required("Employee Count is required"),

    status: yup.boolean(),

});

export default departmentSchema;