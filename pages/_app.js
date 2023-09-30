import Layout from "@/components/layout/Layout";
import { SessionProvider } from "next-auth/react";
import "@/styles/main.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  );
}
