<script setup>
    const route = useRoute()
    const { data: note } = await useFetch(`http://localhost:1337/api/notes/${route.params.id}`)
</script>

<template>
    <h1>{{ note.data.title }}</h1>
    <p>{{ note.data.content }}</p>
    <NuxtLink to="/notes">Back to Notes List</NuxtLink>
    <br/>
    <br/>
    <NuxtLink to="/">Back to Home</NuxtLink>
</template>