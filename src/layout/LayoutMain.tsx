import AppBarMain from "../components/AppBarMain";
import "../styles/globals.css";

export default function LayoutMain({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <section>
      {/* <AppBarMain /> */}
      {children}
    </section>
  );
}
