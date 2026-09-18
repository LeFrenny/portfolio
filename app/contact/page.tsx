import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
export const metadata: Metadata = { title: "Contact" };
const contacts = [
  {
    label: "Email",
    description: "The best place to start a conversation.",
    value: "nitish.kumar.stats@gmail.com",
    href: "mailto:nitish.kumar.stats@gmail.com",
    icon: "✉",
  },
  {
    label: "GitHub",
    description: "Code, experiments, and works in progress.",
    value: "Solace00",
    href: "https://github.com/Solace00",
    icon: "⌘",
  },
  {
    label: "LinkedIn",
    description: "For opportunities and professional connections.",
    value: "Nitish Kumar",
    href: "https://www.linkedin.com/in/nitish01/",
    icon: "↗",
  },
];
export default function ContactPage() {
  return (
    <>
      <SectionHeader
        eyebrow="The next conversation"
        title="Got something in mind?"
        description="I’m open to opportunities, collaborations, and conversations about things we both find interesting."
      />
      <div className="contact-list">
        {contacts.map((contact) => (
          <a key={contact.label} href={contact.href} className="contact-item">
            <span className="contact-icon" aria-hidden="true">
              {contact.icon}
            </span>
            <div>
              <h2>{contact.label}</h2>
              <p>{contact.description}</p>
              <span className="contact-value">{contact.value}</span>
            </div>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
      <div className="resume-strip">
        <div>
          <h2>Want the background?</h2>
          <p>My education, experience, and projects in one place.</p>
        </div>
        <a className="button" href="/resume.pdf" download>
          Download resume <span aria-hidden="true">↓</span>
        </a>
      </div>
    </>
  );
}
