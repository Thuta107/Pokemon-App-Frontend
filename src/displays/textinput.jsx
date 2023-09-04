import { useState } from "react";
import { TextField } from "@mui/material";

const TextInput = () => {

    const [value, setValue] = useState('');

    const handleFilter = e => { setValue(e.target.value) }

    return <TextField onChange={e => handleFilter(e)} value={value} sx={{width:'85%'}} disabled={false}/>
}

export default TextInput;