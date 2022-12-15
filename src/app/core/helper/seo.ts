export function getSocialMetas(loader: any, options: TGetSocialMetaOptions) {
  const { title, description, keywords = '', image } = options;
  const contactConfig = loader.data.contactConfig;

  // TODO extract from loader
  const url = '';

  return {
    title,
    description,
    keywords,
    image,
    'og:url': url,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'twitter:card': image ? 'summary_large_image' : 'summary',
    'twitter:creator': contactConfig.twitterHandle,
    'twitter:site': contactConfig.twitterHandle,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:alt': title,
  };
}

type TGetSocialMetaOptions = {
  image?: string;
  title: string;
  description: string;
  keywords?: string;
};
