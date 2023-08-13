<script lang='ts'>
  import {LightSwitch} from '@skeletonlabs/skeleton';
  import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
import type {DrawerSettings} from '@skeletonlabs/skeleton';
</script>
  
<h1 class = "aspect-auto flex flex-col  gap-16 xl:flex-row"> 
  <span>
    <!--<img src = {logo} alt='logo of the app'/>-->
    <strong><a href ='/' >Chitter Chatter</a></strong>
  </span>
  <ul class= "flex flex-row gap-5"> 
    <li/><a href = './msgboard'> Msg</a>
    <li/><a href = './profile'> Prfl</a>
    <li/><a href = './about' > Abt </a>
  </ul>
  <LightSwitch/>
  <Drawer>falana</Drawer>
</h1>


