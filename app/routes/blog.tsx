import React from 'react';
import { Outlet } from '@remix-run/react';
import { tss } from '~/core/helper/tss';
import PageLayout from '~/components/layout/PageLayout';

// 'blog.tsx' here is a so called 'Layout Route'
// which basically wraps around each individual file in the corresponding same named folder (here 'blog')
// -> Any styles defined here will be applied to all files in the 'blog' folder
// More: https://remix.run/docs/en/v1/api/conventions#layout-routes
const Blog: React.FC = () => {
  // 'Outlet'
  return (
    <PageLayout>
      <div className={BlogContainer}>
        <Outlet />
      </div>
    </PageLayout>
  );
};

export default Blog;

const BlogContainer = tss`
  prose
  tablet:prose-xl
  py-10
  test
`;
