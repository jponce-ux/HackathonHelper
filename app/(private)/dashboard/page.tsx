import Projects from "../projects/page";
import Teams from "../teams/page";

export default function Dashboard() {
  return (
    <>
      <Projects/>
      <div className="h-4 w-full"></div>
      <Teams />
    </>
  );
}
