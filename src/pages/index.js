import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Description will go into a meta tag in <head />">
      <main>
        <Redirect to="innbyggerflate" />;
      </main>
    </Layout>
  );
}
