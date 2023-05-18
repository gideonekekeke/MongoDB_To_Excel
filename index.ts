import express from "express";
import exportToExcelRouter from "./router";

// Create an Express application
const app = express();

// Add the exportToExcel router as a middleware
app.use("/", exportToExcelRouter);

// Start the server
app.listen(7000, () => {
	console.log("Server is running on port 3000");
});
