import { ThemeProvider } from "@/components/Theme-provider";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import FlyingDroneOverlay from "@/components/FlyingDroneOverly";
import ClientOnly from "@/components/ClientOnly";

const inter = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "SkyStore - Drone Experience",
  description:
    "A beautiful drone eCommerce frontend built with Next.js, GSAP, and AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <ClientOnly>
            <FlyingDroneOverlay />
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
