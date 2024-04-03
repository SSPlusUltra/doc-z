import Image from 'next/image'
import Tiptap from '../../components/editor/rte'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Tiptap />
    </div>
  )
}
