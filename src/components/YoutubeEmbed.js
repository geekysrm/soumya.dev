export default function YoutubeEmbed({ videoId }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }",
        }}
      />
      <div className="embed-container">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          allowFullScreen
          frameBorder={0}
        />
      </div>
    </>
  );
}
