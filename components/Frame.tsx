/** The page column: near full-bleed with thin side rules, per the reference. */
export default function Frame({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-[1280px] border-line min-[1300px]:border-x">{children}</main>
  );
}
