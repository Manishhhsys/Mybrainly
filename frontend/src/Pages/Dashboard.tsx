import { Button } from '../components/ui/Button'
import { Plusctn } from '../components/icons/Plusctn'
import { Card } from '../components/ui/Card'
import { ShareIcon } from '../components/icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'
import { useState } from 'react'
import { AddContent } from '../components/ui/AddContent'

function Dashboard() {
  const [open,setOpen]=useState(false)
  console.log(open)

  return (
    <>

    <Sidebar></Sidebar>
     <div className='flex flex-col absolute top-0 left-60'>
      <div className='flex flex-wrap absolute right-0 top-0 mt-5 ml-10 px-2 py-2'>
          <Button Variants="Primary" text='Add Content' startIcon={<Plusctn/>} onClick={() => {
                setOpen(true);
              }} ></Button>
          <Button Variants="Secondary" text='Share' startIcon={<ShareIcon/>}></Button>
     </div>
        <div className='mt-5 ml-10 px-2 py-2    font-extrabold text-2xl font-sans'>All Notes</div>
        <div className='flex  px-2 py-2 ml-10 flex-wrap gap-4 max-w-[calc(100vw-300px)]'>
          <Card title='Youtube Card' link='https://www.youtube.com/embed/yGvox24DnNQ?si=1RiJUnfoGa7LIK2-' type='Youtube'></Card>
          <Card title='Twitter Card' link='https://twitter.com/Ekas_7/status/1931917549886988313' type='Tweets'></Card>
          <Card title='Youtube Card' link='https://www.youtube.com/embed/yGvox24DnNQ?si=1RiJUnfoGa7LIK2-' type='Youtube'></Card>
          <Card title='Youtube Card' link='https://www.youtube.com/embed/yGvox24DnNQ?si=1RiJUnfoGa7LIK2-' type='Youtube'></Card>
          <Card title='Youtube Card' link='https://www.youtube.com/embed/yGvox24DnNQ?si=1RiJUnfoGa7LIK2-' type='Youtube'></Card>
          <Card title='Youtube Card' link='https://www.youtube.com/embed/yGvox24DnNQ?si=1RiJUnfoGa7LIK2-' type='Youtube'></Card>
          <Card title='Youtube Card' link='https://www.youtube.com/embed/yGvox24DnNQ?si=1RiJUnfoGa7LIK2-' type='Youtube'></Card>
        </div>
     </div>
         <AddContent open={open} onClose={()=>{
          setOpen(false)
         }}></AddContent>
    </>
  )
}

export default Dashboard
