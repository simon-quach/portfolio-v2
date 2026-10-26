// Small header used at the top of each prototype
export default function LabNote({
  title,
  source,
  children,
}: {
  title: string;
  source: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-[2rem]">
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-[6px] text-[12px] text-light-description">
        inspired by {source}
      </div>
      <div className="mt-[10px] max-w-[520px]">{children}</div>
    </div>
  );
}
