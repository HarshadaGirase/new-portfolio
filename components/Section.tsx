/** Section shell: hatched band, then the heading row, sharing the page gutter. */
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
      <div className="h-4 border-y border-line hatch" />
      <div className="border-b border-line px-5 py-5 sm:px-8">
        <h2 id={`${id}-title`} className="font-pixel text-3xl sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
