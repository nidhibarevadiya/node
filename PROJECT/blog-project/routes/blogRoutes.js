import express from "express";
import Blog from "../models/Blog.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.render("index", { blogs });
});

router.get("/blogs/create", (req, res) => res.render("create"));
router.post("/blogs", async (req, res) => {
  try { await new Blog(req.body).save(); res.redirect("/"); }
  catch (err) { res.status(400).send("Error saving blog"); }
});

router.get("/blogs/edit/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("edit", { blog });
});
router.post("/blogs/update/:id", async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});
router.get("/blogs/delete/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

router.get("/blogs/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("details", { blog });
});
export default router;
