import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | BlogTech",
  description: "Fale conosco: dúvidas, sugestões e colaborações.",
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
