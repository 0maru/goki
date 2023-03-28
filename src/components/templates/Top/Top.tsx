import { pageTitle } from '@/components/meta';
import Head from 'next/head';

export const Top = () => {
  return (
    <main>
      <Head>
        <title>{pageTitle('サイトトップ')}</title>
      </Head>
      <p>トップページ</p>
    </main>
  );
};
