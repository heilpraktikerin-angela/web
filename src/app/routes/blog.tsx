import { Outlet } from '@remix-run/react';

// 'blog.tsx' here is a so called 'Layout Route'
// which basically wraps around each individual file in the corresponding same named folder (here 'blog')
// -> Any styles defined here will be applied to all files in the 'blog' folder
// More: https://remix.run/docs/en/v1/api/conventions#layout-routes
const Blog = () => {
  // 'Outlet'
  return (
    <div className="flex justify-center">
      <div className="prose tablet:prose-xl py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Blog;
