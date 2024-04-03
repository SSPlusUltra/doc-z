'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBar from './toolbar'
import BulletList from '@tiptap/extension-bullet-list'

const Tiptap = () => {
   const editor = useEditor({
      extensions: [
         StarterKit,
         BulletList.configure({
            itemTypeName: 'listItem',
            keepMarks: true,
            keepAttributes: true,
            HTMLAttributes: {
               class: 'list-disc',
            },
         }),
      ],
      content: '<p>Hello World! 🌎️</p>',
   })

   if (!editor) {
      return null
   }

   return (
      <>
         <div className="">
            <div>
               <ToolBar editor={editor} />
               <EditorContent editor={editor} />
            </div>
         </div>
      </>
   )
}

export default Tiptap
