const express = require("express");
const router = express.Router();
const staff = require("../model/staff");

router.get("/", (req, res) => {
	staff
		.getStaff()
		.then(data => res.json(data))
		.catch(e => console.log(e));
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	staff
		.getPerson(id)
		.then(data => res.json(data))
		.catch(e => console.log(e));
});

router.post("/", (req, res) => {
	const { firstName, lastName } = req.body;

	if (firstName && lastName) {
		staff
			.addMedic(req.body)
			.then(data => res.status(201).json(data))
			.catch(e => console.log(e));
	} else if (!firstName) {
		res.status(400).json({ message: "First name is required" });
	} else if (!lastName) {
		res.status(400).json({ message: "Last name is required" });
	} else {
		res.status(400);
	}
});

router.put("/:id", (req, res) => {
	const { id } = req.params;
	const { firstName, lastName } = req.body;

	if (firstName && lastName) {
		staff
			.updateMedic(id, req.body)
			.then(data => res.status(201).json(data))
			.catch(e => console.log(e));
	} else if (!firstName) {
		res.status(400).json({ message: "First name is required" });
	} else if (!lastName) {
		res.status(400).json({ message: "Last name is required" });
	} else {
		res.status(400);
	}
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	if (id) {
		staff
			.deleteMedic(id)
			.then(id =>
				res.status(200).json({ message: `Person with id ${id} deleted` })
			)
			.catch(e => console.log(e));
	} else {
		res.status(400).json({ message: "ID is required" });
	}
});

module.exports = router;
