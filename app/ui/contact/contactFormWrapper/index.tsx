// import React, {useState, useEffect, useRef} from 'react';

// export default function ContactFormWrapper() {

//   const renderInputField = (placeholderText: string, id: string, height?: string) => {
//     return (
//       <div className="flex w-full justify-center items-center mb-2 mt-2 ">
//         <div className="flex flex-col w-1/2 ">
//           <input
//             type="text"
//             placeholder={placeholderText}
//             id={id}
//             className={`flex w-full p-2 rounded-lg border border-transparent focus:border-t-red-500 focus:border-b-red-500 outline-none ${height ? `h-${height}` : ''}`} 
//           />
//         </div>
//       </div>
//     );
//   }
  
  
//   return (
//     <div className="flex flex-col h-full w-full justify-center items-center">
      
//       <div className="flex flex-col w-1/2 justify-center items-center rounded-lg shadow-lg bg-gray-600">
//         {/* Your Form Content */}
//         <div className="flex flex-col items-center h-20 justify-center">
//           <h1 className="flex text-white ">contact form</h1>
//         </div>

//         {/* Drop us a message */}
//         <div className="flex w-1/2 justify-center  text-center">
//           <div className="flex justify-center">
//             <h1 className="text-white">
//               Drop us a message, or checkout out our footer<br />
//               for more contact information
//             </h1>
//           </div>
//         </div>

//         {/* Add input fields */}
//         {renderInputField('Your name', 'nameInput')}
//         {renderInputField('Your email address', 'emailInput')}
//         {renderInputField('Contact number', 'contactNumberInput')}
//         {renderInputField('Your message', 'messageInput', '20')}
//       </div>
//     </div>
//   );
// }
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function ContactFormWrapper() { 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full w-full justify-center items-center space-y-8">
        <div className="flex flex-col w-1/2 bg-purple-400  rounded-lg">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <>
              <div className="flex flex-col space-y-8 px-2 py-2 ">
              
              {/* Name */}
              <FormItem className="px-2">
                <FormControl className="bg-green-200">
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>

              {/* Email */}
              <FormItem className="px-2">
              <FormControl className="bg-green-200">
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
              <FormMessage />
              </FormItem>

              {/* Contact number */}
              <FormItem className="px-2">
              <FormControl className="bg-green-200">
                  <Input placeholder="Your contact number" {...field} />
                </FormControl>
              <FormMessage />
              </FormItem>

              {/* Your message */}
              <FormItem className="px-2">
              <FormControl className="bg-green-200">
                  <Input placeholder="Your message" {...field} />
                </FormControl>
              <FormMessage />
              </FormItem>

              </div>
              </>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
