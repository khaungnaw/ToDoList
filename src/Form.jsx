import { useRef } from "react";
import { IconButton, OutlinedInput } from "@mui/material";
import { Add as AddIcon} from "@mui/icons-material";

export default function Form({add}) {
    const inputRef = useRef();
    return (
          <form onSubmit={(e)=>{
                            // do not sent this to server
                e.preventDefault();
                add(inputRef.current.value);
                e.currentTarget.reset();
            }}>
                <OutlinedInput fullWidth={true} placeholder="Add Item" inputRef={inputRef} 
                endAdornment={
                    <IconButton type="submit"><AddIcon 
                    /></IconButton>
                }>
                </OutlinedInput>
            </form>
    )
}