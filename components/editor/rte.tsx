'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: '<p>Hello World! 🌎️</p>',
  })

  if (!editor) {
    return null
  }

  return (
    <>
    <div  className=''> 
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
    </>
  );
}

export default Tiptap
