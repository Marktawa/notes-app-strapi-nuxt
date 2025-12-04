<script setup>
    const route = useRoute()
    const { data: note } = await useFetch(`http://localhost:1337/api/notes/${route.params.id}`)
</script>

<template>
    <h1>Notes App</h1>
    <h2>{{ note.data.title }}</h2>
    <p>{{ note.data.content }}</p>
    <br>
    <NuxtLink :to="`/notes/edit?id=${route.params.id}`">
        <button>Edit Note</button>
    </NuxtLink>
    <br>
    <NuxtLink :to="`/notes/delete?id=${route.params.id}`">
        <button>Delete Note</button>
    </NuxtLink>
    <br>
    <NuxtLink to="/notes">Back to Notes List</NuxtLink>
    <br/>
    <br/>
    <NuxtLink to="/">Back to Home</NuxtLink>
</template>