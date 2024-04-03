'use client'

import { Editor } from '@tiptap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faBold,
   faCode,
   faItalic,
   faList,
   faQuoteRightAlt,
   faStrikethrough,
} from '@fortawesome/free-solid-svg-icons'

interface ToolbarProps {
   editor: Editor
}

const ToolBar: React.FC<ToolbarProps> = ({ editor }) => {
   return (
      <div className="flex flex-row gap-2 border border-black ring-2 ring-black rounded-tl-lg rounded-tr-lg pl-2 ml-0.5 w-60">
         <div className="border border-black ring-1 ring-black rounded-sm pr-2 pl-2 h-6 mt-1 mb-1 hover:bg-green-700">
            <button
               onClick={() => editor.chain().focus().toggleBold().run()}
               className={`text-black ${editor.isActive('bold') ? 'is-active' : ''}`}
            >
               <FontAwesomeIcon icon={faBold} size="sm" />
            </button>
         </div>
         <div className="border border-black ring-1 ring-black rounded-sm pr-2 pl-2 h-6 mt-1 mb-1 hover:bg-green-700">
            <button
               onClick={() => editor.chain().focus().toggleItalic().run()}
               className={`text-black ${editor.isActive('italic') ? 'is-active' : ''}`}
            >
               <FontAwesomeIcon icon={faItalic} size="sm" />
            </button>
         </div>
         <div className="border border-black ring-1 ring-black rounded-sm pr-2 pl-2 h-6 mt-1 mb-1 hover:bg-green-700">
            <button
               onClick={() => editor.chain().focus().toggleBulletList().run()}
               className={`text-black ${editor.isActive('list-desc') ? 'is-active' : ''}`}
            >
               <FontAwesomeIcon icon={faList} size="sm" />
            </button>
         </div>
         <div className="border border-black ring-1 ring-black rounded-sm pr-2 pl-2 h-6 mt-1 mb-1 hover:bg-green-700">
            <button
               onClick={() => editor.chain().focus().toggleCodeBlock().run()}
               className={`text-black ${editor.isActive('codeBlock') ? 'is-active' : ''}`}
            >
               <FontAwesomeIcon icon={faCode} size="sm" />
            </button>
         </div>
         <div className="border border-black ring-1 ring-black rounded-sm pr-2 pl-2 h-6 mt-1 mb-1 hover:bg-green-700">
            <button
               onClick={() => editor.chain().focus().toggleBlockquote().run()}
               className={`text-black ${editor.isActive('blockquote') ? 'is-active' : ''}`}
            >
               <FontAwesomeIcon icon={faQuoteRightAlt} size="sm" />
            </button>
         </div>
         <div className="border border-black ring-1 ring-black rounded-sm pr-2 pl-2 h-6 mt-1 mb-1 hover:bg-green-700">
            <button
               onClick={() => editor.chain().focus().toggleStrike().run()}
               className={`text-black ${editor.isActive('strike') ? 'is-active' : ''}`}
            >
               <FontAwesomeIcon icon={faStrikethrough} size="sm" />
            </button>
         </div>
      </div>
   )
}

export default ToolBar
