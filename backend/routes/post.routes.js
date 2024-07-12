import express from 'express';
import { comentOnPost, createPost, deletePost, likeUnlikePost, getAllPost, getLikedPosts, getFollowingPosts , getUserPosts} from '../controllers/post.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.post("/like/:id", protectRoute, likeUnlikePost);
router.post("/comment/:id", protectRoute, comentOnPost);
router.delete("/:id", protectRoute, deletePost);
//get
router.get("/all", protectRoute, getAllPost);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/user/:username", protectRoute, getUserPosts);

export default router;