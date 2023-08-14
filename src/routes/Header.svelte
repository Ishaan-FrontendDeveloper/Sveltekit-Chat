<script lang='ts'>
  import {LightSwitch} from '@skeletonlabs/skeleton';
  import { Toast, toastStore } from '@skeletonlabs/skeleton';
import type {ToastSettings} from '@skeletonlabs/skeleton';


   let user = 0;
  function toggle(){
    user = 1;
  }
  function logout(){
  user = 0;
  }
</script>
  
<h1 class = "aspect-auto flex flex-col justify-between gap-16 xl:flex-row"> 
  <span> 
    <!--<img src = {logo} alt='logo of the app'/>-->
    <strong><a href ='/' >Chitter Chatter</a></strong>
  </span>
  <ul class= "flex flex-row gap-5"> 
    <li/><a on:click = {toggle} href = './msgboard'> Msg</a>
    {#if user != 0}
    <li/><a href = './profile'> Prfl</a>
    <li/><form method="POST" action='/logout' > 
        
           <button class="muted" on:click ={logout} type="submit">Log Out </button>
        </form>
    {/if}
    <li/><a href = './about' > Abt </a>
    <li/><LightSwitch/>
  </ul>
  
</h1>



