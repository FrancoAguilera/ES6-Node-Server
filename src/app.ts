const { loadEnvFile } = require('node:process');
loadEnvFile();

import app from "./server";
import { connectDB } from "./db/connection";

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
