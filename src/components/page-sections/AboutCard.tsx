'use client';

interface AboutCardProps {
  title: string;
  children: React.ReactNode;
  Icon: React.ReactNode;
}
export default function AboutCard({title, children, Icon}: AboutCardProps) {
  return (
    <div className="flex h-96 w-80 flex-col items-center justify-between gap-4 rounded-2xl bg-black p-8 text-white">
      <p className="text-4xl text-secondary">{title}</p>
      <p className="flex h-24 w-full items-center justify-center">{Icon}</p>
      <p className="h-full text-center text-lg">{children}</p>
    </div>
  );
}
