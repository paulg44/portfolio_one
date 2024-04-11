// Controller file

import * as blogsModel from "./model.js";

export async function getBlogsController(req, res) {
  try {
    const blogs = await blogsModel.getBlogs();
    res.json().status(200);
    console.log(`Success payload: ${blogs}`);
  } catch (error) {
    console.error("Error executing query");
    req
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
}
