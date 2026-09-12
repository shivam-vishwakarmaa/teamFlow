import express from "express";
import projectsRoutes from "./routes/project.routes"
const app = express();

app.use(express.json());
app.use("/api/projects",projectsRoutes);
export default app;