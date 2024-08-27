import Link from "next/link"

export default function Home() {
  return (
    <div className="container">
      <div className="mx-auto grid max-w-[600px] gap-4 py-4">
        <h1 className="text-5xl font-bold leading-relaxed">Next.js Template</h1>
        <h2 className="text-balance text-2xl font-medium">
          with Tailwind CSS, PostCSS, shadcn/ui, TypeScript, ESLint, Prettier,
          Stylelint, and Husky
        </h2>
        <p className="text-xs">
          <Link href="https://github.com/NSMNIA">By NSMNIA</Link>
        </p>
      </div>
    </div>
  )
}
