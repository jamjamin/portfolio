import Image from "next/image";
import Link from "next/link";
import './globals.css';

export default function Home() {
  return (
      <div className="main">
      <div className="top">
          Ben Rodenas
      </div>
      <div className="page-main">
          <Image
          src="/images/jamjamin.png"
          width={ 158 }
          height={ 211 }
          alt="Profile pic of Ben"
          />
        <h2> Ben Rodenas</h2>
        <h4> Benjamin Todd Depaynos Rodenas </h4>
        <Link href="/projectlist"><button className="home-button"> View Projects </button></Link>
        <button className="home-button"> Download CV </button>
      </div>
    </div>

  );
}
