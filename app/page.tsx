import dynamic from "next/dynamic"

// Dynamically import the 3D component with no SSR to avoid hydration issues
const NextBlocks = dynamic(() => import("@/next-blocks"), { ssr: false })

export default function Home() {
  return (
    <NextBlocks />
  )
}
