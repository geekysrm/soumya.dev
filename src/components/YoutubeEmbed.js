export default function YoutubeEmbed({ videoId }) {
  return (
    <div className="embed-container">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
        allowFullScreen
        frameBorder={0}
      />
    </div>
  );
}
