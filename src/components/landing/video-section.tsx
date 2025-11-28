export function VideoSection() {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.youtube.com/embed/FDaQ_lRuFhE?autoplay=1&mute=1&loop=1&playlist=FDaQ_lRuFhE&controls=0&modestbranding=1&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
