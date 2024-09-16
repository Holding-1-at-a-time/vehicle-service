import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthTokenFetcher } from "convex/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App Title",
  description: "My app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexProviderWithClerk client={{
      setAuth: function (_fetchToken: AuthTokenFetcher): void {
        throw new Error("Function not implemented.");
      },
      clearAuth: function (): void {
        throw new Error("Function not implemented.");
      }
    }} useAuth={function (): { isLoaded: boolean; isSignedIn: boolean | undefined; getToken: (options: { template?: "convex"; skipCache?: boolean; }) => Promise<string | null>; } {
      throw new Error("Function not implemented.");
    }}>
      <html lang="en">
        <body className={inter.className}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ConvexProviderWithClerk>
  );
}
