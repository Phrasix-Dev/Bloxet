import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin:0,
        background:"#0a0a12",
        color:"white",
        fontFamily:"Arial"
      }}>
        {children}
      </body>
    </html>
  );
}
