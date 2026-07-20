import Image from "next/image";
import AppNav from "@/components/AppNav";
import founderImage from "../../../founder.png";

const values = [
  { title: "Innovation", text: "Wir denken voraus und entwickeln kreative Lösungen, die Unternehmen online voranbringen." },
  { title: "Orientierung", text: "Wir arbeiten zielgerichtet und halten den Weg vom ersten Gespräch bis zum Launch klar." },
  { title: "Qualität", text: "Wir verbinden saubere Technik, Design und eine professionelle Onlinepräsenz." },
  { title: "Zielstrebigkeit", text: "Wir setzen Ideen fokussiert um und schaffen sichtbaren Fortschritt." },
];

const team = [
  {
    name: "Panat Ruangsri",
    role: "CEO & Founder | Developer",
    href: "https://www.linkedin.com/in/panat-ruangsri-28a137288/",
    image: "/wendico-live/about-founder.jpg",
  },
  {
    name: "Tim Biedermann",
    role: "CEO & Founder | Developer",
    href: "https://www.linkedin.com/in/tim-biedermann-ba5b35286/",
    image: "/wendico-live/about-team.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="standard-page">
      <AppNav active="ueber-uns" />
      <section className="standard-hero standard-hero-split" aria-labelledby="about-page-title">
        <div>
          <p>Über Uns</p>
          <h1 id="about-page-title">Wer sind wir?</h1>
          <span>
            Jung, orientiert und zielstrebig: Seit Anfang 2025 gegründet von zwei Auszubildenden, um Onlinepräsenz und Qualität auf ein neues Level zu heben.
          </span>
        </div>
        <div className="standard-image-panel">
          <Image src={founderImage} alt="Panat Ruangsri und Tim Biedermann von Wendico" priority />
        </div>
      </section>

      <section className="standard-section" aria-labelledby="values-title">
        <div className="section-heading section-heading-split">
          <div>
            <p>Ein junges Unternehmen mit Sitz im Zürcher Weinland</p>
            <h2 id="values-title">Unsere Werte prägen, wie wir arbeiten.</h2>
          </div>
          <span>Unsere Werte sind der Kern unseres Unternehmens. Sie prägen, wie wir arbeiten, denken und mit unseren Kunden umgehen.</span>
        </div>
        <div className="standard-card-grid four-columns">
          {values.map((value) => (
            <article className="standard-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="standard-section" aria-labelledby="team-title">
        <div className="big-statement">
          <p>Unsere Teammitglieder</p>
          <h2 id="team-title">Panat und Tim entwickeln Wendico.</h2>
        </div>
        <div className="standard-card-grid two-columns">
          {team.map((person) => (
            <a className="standard-card standard-link-card" href={person.href} key={person.name} target="_blank" rel="noreferrer">
              <Image className="team-member-photo" src={person.image} alt={person.name} width={520} height={520} />
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <strong>LinkedIn ansehen</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}