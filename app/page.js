import Link from "next/link";
import StudentInfo from "./week-2/student-info";

export default function Home() {
    return (
      <main>

          <h1 class="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
        <h2><Link className="underline text-white-600 hover:text-cyan-300" href="./week-2/">Week 2 Assignment</Link></h2>
      </main>
    );
  }