import React from 'react'
import { Box } from '@mui/material'
export default function Rejected() {
  return (
    <Box className="w-full sm:w-1/2 px-8 py-20 text-white bg-red-600" sx={{  mx: 'auto', display:'flex',flexDirection:'column', alignItems:'center', my: '10%',  borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
    <h1 className=' font-home  text-2xl font-bold mb-2'>
      Rejected Request
    </h1>
    <p className=' font-home  text-lg font-semibold'>
      This request is rejected and contact admin for more details.
    </p>
  </Box>
  )
}
