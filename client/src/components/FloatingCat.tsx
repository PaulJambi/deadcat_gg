import catImage from "@assets/hypurrr_DCB.png";

export default function FloatingCat() {
  return (
    <div className="floating-cat mb-4">
      <img
        src={catImage}
        alt="Dead Cat Character"
        className="w-36 h-auto md:w-48"
      />
    </div>
  );
}
