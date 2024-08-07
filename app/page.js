import Link from "next/link";
import StudentInfo from "./week-2/student-info";

export default function Home() {
    return (
      <main>

        <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
        <h2><Link className="weekLinkClass" href="./week-2/">Week 2 Assignment</Link></h2>
        <h2><Link className="weekLinkClass" href="./week-3/">Week 3 Assignment</Link></h2>
        <h2><Link className="weekLinkClass" href="./week-4/">Week 4 Assignment</Link></h2>
        <h2><Link className="weekLinkClass" href="./week-5/">Week 5 Assignment</Link></h2>
        <h2><Link className="weekLinkClass" href="./week-6/">Week 6 Assignment</Link></h2>
        <h2><Link className="weekLinkClass" href="./week-7/">Week 7 Assignment</Link></h2>
        <h2><Link className="weekLinkClass" href="./week-8/">Week 8 Assignment</Link></h2>
        <h2><Link className="weekLinkClass" href="./week-10/">Week 10 Assignment</Link></h2>
      </main>
    );
  }