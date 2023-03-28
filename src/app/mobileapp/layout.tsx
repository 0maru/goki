export default function MobileappLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <p>モバイルアプリ用</p>
      {children}
    </section>
  );
}
