export default function MetaTags({
  title,
  author,
  description,
  type,
  url,
  image,
  twitterHandle,
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="author" content={author}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter meta properties below: */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="twitterHandle" />
      <meta name="twitter:creator" content="twitterHandle" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </>
  );
}
