import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FC, useEffect, useState } from 'react'
import ToolBar from './toolbar'
import { socket } from '@/socket'

const Tiptap = () => {
   const [edata, setData] = useState('')

   useEffect(() => {
      socket.on('editorData', (data) => {
         editor?.commands.setContent(data)
      })
   }, [socket, socket.id, edata])

   const editor = useEditor({
      extensions: [StarterKit],
      content: edata,
      onUpdate: ({ editor }) => {
         const newData = editor.getHTML()
         socket.emit('editorData', newData)
      },
   })

   if (!editor) {
      return null
   }

   return (
      <div className="editor-container">
         <ToolBar editor={editor} />
         <EditorContent editor={editor} />
      </div>
   )
}

export default Tiptap
