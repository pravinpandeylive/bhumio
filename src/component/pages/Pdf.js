import React,{useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Pdf = () => {  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
  <>

          <div className='pdf' ref={componentRef}>
            <div className='pdf2'>
	
   <TextField label="Total-Project"  name="totalproject"  className='text' color="secondary" focused /><br/><br/>
   <TextField label="Project-Owner" name="projectowner"  className='text' color="secondary" focused /><br/><br/>
   <TextField label="Project-Manager" name="projectmanager"  className='text' color="secondary" focused /><br/><br/>
   <TextField label="Project-Budget" name="projectbudget"   className='text' color="secondary" focused /><br/><br/>
   <h2>Project Risk</h2>
   <TextField label="Risk1" name="Riskl"  className='text'  color="secondary" focused /><br/><br/>
<TextField label="Risk2" name="Risk2"  className='text'  color="secondary" focused /><br/><br/>
<TextField label="Risk3" name="Risk3"  className='text'  color="secondary" focused /><br/><br/>
<TextField label="Risk4" name="Risk4"  className='text'  color="secondary" focused /><br/><br/>
   </div>
   <div className='pdf1'>
      <h2>Supplier Details</h2>
   <TextField label="Supplier1" name="supplier1"  className='text' color="secondary" focused /><br/><br/>
   <TextField label="Supplier2" name="supplier2"   className='text' color="secondary" focused /><br/><br/>
   <TextField label="Supplier3" name="supplier3"   className='text' color="secondary" focused /><br/><br/>
   <TextField label="Supplier4" name="supplier4"   className='text' color="secondary" focused /><br/><br/>
   <TextField className="sign" name="sign"  placeholder="sign"  color="secondary" focused />  <br/><br/>
     

   
   </div>
   
   </div>
<button onClick={handlePrint}  className="print__button">Generate pdf </button> 
    </> 

  );
}
export default Pdf ;