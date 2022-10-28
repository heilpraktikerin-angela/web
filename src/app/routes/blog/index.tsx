import React from 'react';

const Blog: React.FC = () => {
  return <div>coming soon</div>;
};

export default Blog;

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta,
  };
}
