import React from 'react'

import {SignUp} from "@/components/signup";

const page = () => {
  return (
    <div>

      <p className="text-4xl font-bold m-2">FreeLanc<span className="text-blue-500">r</span></p>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default page