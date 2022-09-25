import React from 'react';

const Blog: React.FC = () => {
  return <div>Jeff</div>;
};

export default Blog;

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta,
  };
}
