<script lang="ts" >
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import type { PageData } from './$types';

export let data: PageData;

$: ({users} = data)

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

{
#each users as user }

<p>{user.city}</p>

{/each

}


</section>

