import catImage from "../assets/hypurrr_DCB-removebg-preview.png";

export default function FloatingCat() {
  return (
    <div className="floating-cat mb-1">
      <img
        src={catImage}
        alt="Dead Cat Character"
        className="w-36 h-auto md:w-48"
      />
    </div>
  );
}
