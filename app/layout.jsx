import "./globals.css";
import Provider from "@/context/Provider";

export const metadata = {
  title: "HMSI UNPAM",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
