import Cover from "@/views/auth/Cover";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background">
      <div className="grid grid-cols-2">
        <div>
          <Cover />
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
}
