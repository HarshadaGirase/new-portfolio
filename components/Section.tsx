/** Section shell: hatched band, then a heading row offset by the left rail. */
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-4">
      <div className="ml-4 h-5 border-y border-l border-line hatch sm:ml-8" />
      <div className="ml-4 border-b border-l border-line px-5 py-5 sm:ml-8 sm:px-10">
        <h2 id={`${id}-title`} className="font-pixel text-3xl font-semibold tracking-wide sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
