import MediaCard from "./MaterialCard";
import Grid from '@mui/material/Grid';
import raw_data from '../assets/succulent_data.json'

export default function Shop() 
{
  
  let succulents = raw_data;
  let succ_list = [];
  succulents.forEach(succ =>{
    succ_list.push( 
      <Grid item xs={3}>
        <MediaCard name={succ.name} description={succ.description} img={succ.img}></MediaCard>
      </Grid>
      );
  });

  return (
  <Grid container spacing={4}>
    {succ_list}
  </Grid>
  );
};