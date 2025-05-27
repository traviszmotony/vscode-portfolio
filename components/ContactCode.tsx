import styles from "@/styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "traviszmotony2@gmail.com",
    href: "mailto:traviszmotony2@gmail.com",
  },
  {
    social: "github",
    link: "traviszmotony",
    href: "https://github.com/traviszmotony",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
