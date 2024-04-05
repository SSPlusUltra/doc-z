'use client'

import Tiptap from '../../components/editor/rte'
import { useEffect, useState } from 'react'
import { socket } from '../socket'
import { useAppSelector } from '@/redux/store'

export default function Home() {
   return (
      <div className="flex items-center justify-center h-screen">
         <Tiptap />
      </div>
   )
}
