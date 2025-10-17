import Card from "@/app/components/Card";
import styles from ".././styles.module.css";
import Jumbotron from "@/app/components/Jumbotron";

export default function Projects() {
  let projectsCount = 1;

  const cardsLoop = () =>{
    for (let i = 0; i < projectsCount; i++) {
      return (   <Card
        imageSrc="/iagenerated/roger.png"
        title="Proyecto Uno"
        description="High-frequency specialty laminates enable radars and antennas on these types of rovers and the vehicles that get them there. These radars and antennas aid in communicating maneuver commands with the vehicle, transmitting collected data and other important functions. When these materials perform properly and reliably, they collect data beyond expectations. Now, the hope is they will also return that data, in the form of physical samples, back to Earth."
      />)
    }
  }

  return (
    <>
      {projectsCount === 0 ? (
        <Jumbotron
          title="Create your First Project"
          description="Assemble the perfect team to conquer the hackathon! Your team's success starts here."
          cta="Start Your Journey"
          path="/teams/create"
          customClass="w-full"
        />
      ) : (
        <div className="flex w-full flex-col gap-2">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-200">
            Your Projects:
          </h1>
          <div className={` ${styles.wrapper} py-4`}>
            {cardsLoop()}
          </div>
        </div>
      )}
    </>
  );
}
