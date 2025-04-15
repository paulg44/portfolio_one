// Test folder for now to see if I can embed a Youtube video. I plan on doing a series of me completing frontend mentor challenges etc

export function VideoBlog() {
  return (
    <div>
      <h2>Video Blog</h2>
      <iframe
        width={420}
        height={315}
        title="test video"
        src="https://www.youtube.com/embed?v=0HCOzB0noiI&list=PLCuUzw-sRFKiKKSto_kNEDnh17_EgmVvl"
      ></iframe>
    </div>
  );
}
