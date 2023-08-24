import Layout from "@/components/layout/layout";
import "@/styles/main.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
