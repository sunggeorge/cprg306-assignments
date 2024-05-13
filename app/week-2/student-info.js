import Link from "next/link";

export default function StudentInfo() {
    return(
        <div>
            <p>Yik Sung</p>
            <p><Link className="underline text-cyan-600 hover:text-cyan-600" href="https://github.com/sunggeorge">https://github.com/sunggeorge</Link></p>
        </div>
    );
}