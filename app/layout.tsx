import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "赵艺薇 | 个人作品集",
  description: "赵艺薇的产品设计、内容运营、城市研究与开源项目作品集。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
