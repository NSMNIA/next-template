import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Minus,
  Plus,
  X,
} from "lucide-react"

export type Icon = React.SVGProps<SVGSVGElement>

export const Icons = {
  logo: (props: Icon) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 28 37"
      {...props}
    >
      <path d="M17.13 8.22243h-1.5988V23.7533H17.13c1.0003 0 1.5987-.5581 1.5987-2.1112V10.3337c0-1.55311-.5984-2.11127-1.5987-2.11127Z" />
      <path d="M8.67851 10.5289v1.7223c0 1.7922.75455 2.3663 1.99019 2.3663h1.2073V8.22243h-1.5091c-1.17434 0-1.68839.70393-1.68839 2.30647Z" />
      <path d="M13.7037 0 0 2.74486V28.8864L13.7037 37l13.7037-8.1136V2.74486L13.7037 0Zm8.5721 21.6297c0 3.4662-1.6814 5.3542-5.0976 5.3542h-5.2191v-9.2851h-1.1808c-1.55504 0-2.14304.6487-2.14304 2.6626v6.6225H5.23367v-6.4386c0-2.4205.55881-4.0519 2.26937-4.5796v-.0629c-1.52104-.6197-2.23537-2.0429-2.23537-4.2698v-1.3313c0-3.34514 1.521-4.98624 5.06353-4.98624h6.847c3.4017 0 5.0976 1.89284 5.0976 5.35904v10.9552Z" />
    </svg>
  ),
  close: X,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  check: Check,
  minus: Minus,
  plus: Plus,
}
