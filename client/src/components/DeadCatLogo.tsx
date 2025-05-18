import logoImage from "../assets/deadcatBOUNCE-text.png";

export default function DeadCatLogo() {
  return (
    <div className="flex items-center justify-center">
      <img 
        src={logoImage} 
        alt="deadcatBOUNCE" 
        className="h-auto w-64 md:w-80" 
      />
    </div>
  );
}
