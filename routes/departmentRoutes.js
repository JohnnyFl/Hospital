const express = require("express");
const router = express.Router();
const department = require("../model/department");

router.get("/", (req, res) => {
	department
		.getDepartments()
		.then(data => res.status(200).json(data))
		.catch(e => console.log(e));
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	department
		.getDepartment(id)
		.then(data => res.status(200).json(data))
		.catch(e => console.log(e));
});

router.post("/", (req, res) => {
	const { name } = req.body;
	department
		.addDepartment(name)
		.then(data => res.status(201).json(data))
		.catch(e => console.log(e));
});

router.put("/:id", (req, res) => {
	const { name } = req.body;
	const { id } = req.params;
	if (name) {
		department
			.updateDepartment(id, name)
			.then(data => res.status(200).json(data))
			.catch(e => console.log(e));
	} else {
		res.status(400).json({ message: "Name of Department is required" });
	}
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	if (id) {
		department
			.deleteDepartment(id)
			.then(data => res.status(200).json(data))
			.catch(e => console.log(e));
	} else {
		res.status(400).json({ message: "ID is required" });
	}
});

module.exports = router;
