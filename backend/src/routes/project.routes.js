import { Router } from "express";
const router = Router();

router.get("/",(req,res)=>{
    res.send("This is project list");
});

router.get("/:id",(req,res)=>{
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid project ID"
        });
    }

    if (id < 10) {
        return res.send("This is a valid ID");
    }

    return res.status(404).json({
        message: "Project not found"
    });
});

router.post("/",(req,res)=>{
    const project = req.body;
    res.status(201).json({
        message : "project created"
    });
});

router.delete("/:id",(req,res)=>{
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid project ID"
        });
    }

    if (id < 10) {
        return res.send("Project deleted successfully!");
    }

    return res.status(404).json({
        message: "Project not found"
    });
});

export default router;

