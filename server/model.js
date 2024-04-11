// Model file

import { pool } from "./server.js";

export async function getBlogs() {
  try {
    const client = await pool.connect();
    const blogQuery = await client.query("SELECT * FROM blogs");
    client.release();
    return blogQuery.rows;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}
