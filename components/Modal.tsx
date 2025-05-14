import React from 'react'
import { useState } from 'react';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className="fixed inset-0 bg-slate-500/50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Modal Content</h2>
            <p>This is the content of the modal.</p>
            <button onClick={() => setIsOpen(false)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
    </div>
  )
}

export default Modal