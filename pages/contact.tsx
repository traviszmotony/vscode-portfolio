import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        Feel free to reach out to me through any of the social platforms below.
        I&apos;m always open to new opportunities and connections.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;

# touched on 2025-05-27T16:49:24.418243Z
# touched on 2025-05-27T16:49:31.473888Z
# touched on 2025-05-27T16:49:34.292341Z