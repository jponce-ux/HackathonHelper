import Card from "@/app/components/Card";
import styles from ".././styles.module.css";
import Jumbotron from "@/app/components/Jumbotron";

export default function Teams() {
  let teamsCounter = 1;
  const teamsLoop = () => {
    for (let i = 0; i < teamsCounter; i++) {
      return (
        <Card
          title="DreamTeam"
          description="1 PM, 3 Devs, 2 QA, 1 UX"
          short={true}
        />
      );
    }
  };
  return (
    <>
      {teamsCounter === 0 ? (
        <Jumbotron
          title="Build Your Dream Team"
          description="Assemble the perfect team to conquer the hackathon! Your team's success starts here."
          cta="Start Your Journey"
          path="/teams/create"
          customClass="w-full"
        />
      ) : (
        <div className="flex w-full flex-col gap-2 pb-0 pt-8">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">
            Your Teams:
          </h1>
          <div className={`${styles.smallWrapper} py-4`}>{teamsLoop()}</div>
        </div>
      )}
    </>
  );
}
