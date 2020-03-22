const db = require("../db");

class Staff {
	static getStaff = async () => {
		try {
			return await db.any("SELECT * FROM STAFF");
		} catch (e) {
			console.log(e);
		}
	};

	static getPerson = async id => {
		try {
			return await db.any("SELECT * FROM STAFF WHERE ID = $1", [id]);
		} catch (e) {
			console.log(e);
		}
	};

	static addMedic = async info => {
		const { firstName, lastName, age, male, spec } = info;
		try {
			return await db.any(
				"INSERT INTO STAFF (FIRST_NAME, LAST_NAME, AGE, MALE, SPEC) VALUES ($1, $2, $3, $4, $5) RETURNING FIRST_NAME, LAST_NAME, AGE, MALE, SPEC",
				[firstName, lastName, age, male, spec]
			);
		} catch (e) {
			console.log(e);
		}
	};

	static updateMedic = async (id, info) => {
		const { firstName, lastName, age, male, spec } = info;
		try {
			return await db.any(
				"UPDATE STAFF SET FIRST_NAME = $1, LAST_NAME = $2, AGE = $3, MALE = $4, SPEC = $5 WHERE ID = $6 RETURNING FIRST_NAME, LAST_NAME, AGE, MALE, SPEC",
				[firstName, lastName, age, male, spec, id]
			);
		} catch (e) {
			console.log(e);
		}
	};

	static deleteMedic = async id => {
		try {
			return await db.any("DELETE FROM STAFF WHERE ID = $1 RETURNING ID", [id]);
		} catch (e) {
			console.log(e);
		}
	};
}

module.exports = Staff;
