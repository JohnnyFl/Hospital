const db = require("../db");

class Department {
	static getDepartments = async () => {
		try {
			return await db.any("SELECT * FROM department");
		} catch (e) {
			console.log(e);
		}
	};

	static getDepartment = async id => {
		try {
			return await db.any("SELECT * FROM department WHERE ID = $1", [id]);
		} catch (e) {
			console.log(e);
		}
	};

	static addDepartment = async name => {
		try {
			return await db.any(
				"INSERT INTO department (name) VALUES ($1) RETURNING name, id",
				[name]
			);
		} catch (e) {
			console.log(e);
		}
	};

	static updateDepartment = async (id, name) => {
		try {
			return await db.any(
				"UPDATE department SET name = $1 WHERE ID = $2 RETURNING name, id",
				[name, id]
			);
		} catch (e) {
			console.log(e);
		}
	};

	static deleteDepartment = async id => {
		try {
			return await db.any("DELETE FROM department WHERE id = $1 RETURNING id", [
				id
			]);
		} catch (e) {
			console.log(e);
		}
	};
}

module.exports = Department;
