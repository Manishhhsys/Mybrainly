import { Button } from '../components/ui/Button'
import { Plusctn } from '../components/icons/Plusctn'
import { Card } from '../components/ui/Card'
import { ShareIcon } from '../components/icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'
import { useState } from 'react'
import { AddContent } from '../components/ui/AddContent'
import { useContent } from '../Hooks/useContent'
import axios from 'axios'
import { DeleteIcon } from '../components/icons/DeleteIcon'

function Dashboard() {
  const [open,setOpen]=useState(false)
  const contents=useContent();

  async function ShareCreate(){
     try{
        const response= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/share/`,{
          share:true
        },{
          headers:{
            Authorization:localStorage.getItem("token")
          }
        })
        if(response.status===200){
            alert(`http://localhost:5173/share/${response.data.hash}`)
        }else{
          alert("Invaild")
        }
     }catch(e){
      console.log(e)
     }
    }

    async function DeleteLInk(){
     try{
        const response= await axios.post(`${import.meta.env.VITE_BACKEND_URL}/share`,{
          share:false
        },{
          headers:{
            Authorization:localStorage.getItem("token")
          }
        })
        if(response.status===200){
            alert(response.data.message)
        }else{
          alert("Invaild")
        }
     }catch(e){
      console.log(e)
     }
    
  }
  
  return (
    <>

    <Sidebar></Sidebar>
     <div className='flex flex-col absolute top-0 left-60'>
      <div className='flex flex-wrap absolute right-0 top-0 mt-5 ml-10 px-2 py-2'>
          <Button Variants="Primary" text='Add Content' startIcon={<Plusctn/>} onClick={() => {
                setOpen(true);
              }} ></Button>
          <Button Variants="Secondary" text='Share' startIcon={<ShareIcon/>} onClick={ShareCreate}></Button>
          <Button Variants="Secondary" text='Delete' startIcon={<DeleteIcon/>} onClick={DeleteLInk}></Button>
     </div>
        <div className='mt-5 ml-10 px-2 py-2    font-extrabold text-2xl font-sans'>All Notes</div>
        <div className='flex  px-2 py-2 ml-10 flex-wrap gap-4 max-w-[calc(100vw-300px)]'>
                    {contents ? (
            contents.map(({ title, link, type, _id }: any) => (
              <Card key={_id} id={_id} title={title} link={link} type={type} />
            ))
          ) : (
            <div>Loading...</div>
          )}

        </div>
     </div>
         <AddContent open={open} onClose={()=>{
          setOpen(false)
         }}></AddContent>
    </>
  )
}

export default Dashboard
