<script lang = 'ts'>
import Header from './Header.svelte';
import Footer from './Footer.svelte';
import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
import '@skeletonlabs/skeleton/styles/skeleton.css';
import "../app.postcss";
</script>
<svelte:head>
   <title>Chat-sup </title>
</svelte:head>

<Header/>
<slot/>
<Footer/>
