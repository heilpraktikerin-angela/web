import { Outlet } from '@remix-run/react';
import clsx from "clsx";

// 'blog.tsx' here is a so called 'Layout Route'
// which basically wraps around each individual file in the corresponding same named folder (here 'blog')
// -> Any styles defined here will be applied to all files in the 'blog' folder
// More: https://remix.run/docs/en/v1/api/conventions#layout-routes
const Blog = () => {
  // 'Outlet'
  return (
    <div className={OuterBlogContainer}>
      <div className={BlogContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;

const OuterBlogContainer = clsx("flex", "justify-center");
const BlogContainer = clsx("prose", "tablet:prose-xl",  "py-10");
