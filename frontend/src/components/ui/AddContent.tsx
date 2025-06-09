import { XIcon } from "../icons/XIcon";
import { Button } from "./Button";
import { Input } from "./Input";


interface AddContentProps {
  open: boolean;
  onClose?: () => void; 
}

export const AddContent = ({ open, onClose }: AddContentProps) => {
  if (!open) return null;

  return (
    <>
      
      <div className="fixed inset-0 bg-gray-700 opacity-60 z-40" />

      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="bg-persian-indigo-800 w-100 h-100 flex flex-col justify-evenly items-center text-white rounded shadow-lg">
           <div className="relative top-0 right-3 cursor-pointer flex flex-wrap justify-end w-full" onClick={onClose}><XIcon/></div>  
          <div>ADD Content</div>
          <div className="flex flex-col mx-2 my-2">
            <div className="mb-2 mt-2 font-medium">Title</div>
            <Input texttype="text" placeholder="Title"></Input>
            <div className="mb-2 font-medium">Link</div>
            <Input texttype="text" placeholder="Link"></Input>
            <div className="mb-2 font-medium">Type</div>
            <Input texttype="text" placeholder="Type"></Input>
            <div className="mb-2 font-medium">Tags</div>
            <Input texttype="text" placeholder="Tags"></Input>
          </div>
          <Button Variants="Primary" text="Submit"></Button>
        </div>
      </div>
    </>
  );
};
