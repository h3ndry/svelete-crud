<script lang="ts" >
	import type { PageData } from './$types';

export let data: PageData;

$: ({users} = data)

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

<h1 class="text-2xl" >Welcome to the start of something amazing</h1>

{ #each users as user }

<p>{user.city}</p>

{/each
}


</section>

