import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jeremy J McWilliams Portfolio",
  description: "Jeremy McWilliams Portfolio containing Software Engineering & craft projects",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex flex-col justify-center ">
        <h1 className="text-5xl dark:text-white">Jeremy J. McWilliams</h1>
        <h2 className="text-3xl text-blue-400">Software Engineer</h2>
     </div>
     </div>
  );  
}
