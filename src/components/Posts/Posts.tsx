import { useEffect, useState } from "react";
import SearchPost from "../SearchPost/SearchPost";
import axios, { AxiosResponse } from "axios";
import { PostsResponse } from "../../models/posts";
import PostItem from "../PostItem/PostItem";

const Posts = () => {
  const [posts, setPosts] = useState<PostsResponse>([]);
  console.log(posts);
  useEffect(() => {
    async function getUserData() {
      try {
        const response: AxiosResponse<PostsResponse> = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?page=${1}&_limit=${10}`
        );
        setPosts(response.data); // Тип данных автоматически приводится к типу User
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Failed to fetch user data");
      }
    }
    getUserData();
  }, []);

  return (
    <>
      <SearchPost />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Posts;
