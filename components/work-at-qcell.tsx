import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export default function WorkAtQcell() {
  return (
    <div className="flex flex-col w-full bg-black text-white border-t border-b border-blue-500">
      {/* Top section */}
      <div className="p-8 pb-12 flex flex-col items-center text-center">
        <p className="text-sm mb-2">Work at Qcell</p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join a <span className="text-amber-400">team and inspire</span> the work.
        </h2>

        <p className="text-sm mb-6 max-w-xs">
          We offer more than just a paycheck. QCell is committed to helping you grow — personally and professionally.
          See our areas of work, locations, and opportunities for students.
        </p>

        <Link href="#" className="text-blue-400 text-sm flex items-center hover:underline">
          Learn about Work at Qcell &gt;
        </Link>
      </div>

      {/* Bottom section with image and quote */}
      <div className="relative">
        <Image
          src="/images/qcell-employee.png"
          alt="Qcell employee"
          width={500}
          height={400}
          className="w-full h-auto"
        />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <blockquote className="mb-2">
            <p className="text-xl md:text-2xl font-medium">"I feel like my voice actually matters here."</p>
          </blockquote>

          <p className="text-xs mb-8">Amanda, Customer Care Support</p>

          <button className="flex items-center space-x-2 text-xs">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white">
              <Play size={12} />
            </span>
            <span>Watch the Film</span>
          </button>
        </div>
      </div>
    </div>
  )
}
