const TeacherDepartmentModel = require("../modules/TeacherDepartmentModule")

const Department = async (req, res, next) => {
    try {
        const { department, salary, isAdmin } = req.body

        const checkFields = [department, salary, isAdmin].some(ele => ele === "")
        if (checkFields) {
            return res.status(201).json({ message: 'all fields are required!' })
        }

        if (isAdmin !== "true") {
            return res.status(201).json({ message: 'this is not a admin!' })
        }

        const checkData = await TeacherDepartmentModel?.findOne({ department })
        if (checkData) {
            return res.status(201).json({ message: 'this department is already exists!' });
        }

        const newAddDepartment = await TeacherDepartmentModel?.create({ department, salary, isAdmin })

        return res.status(200).json({ departmentData: newAddDepartment })

    } catch (error) {
        console.log(error);
    }
}

const GetAllDepartments = async (req, res, next) => {
    const allDepartments = await TeacherDepartmentModel?.find();
    return res.status(200).json({ departments: allDepartments })
}

module.exports = { Department, GetAllDepartments }