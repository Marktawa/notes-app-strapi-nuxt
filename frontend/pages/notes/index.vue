<script setup>
    const { data: notes } = await useFetch('http://localhost:1337/api/notes')
</script>

<template>
    <h1>Notes App</h1>
    <h2>Notes List</h2>
    <ul>
        <li v-for="note in notes.data">
            <h3>{{ note.title }}</h3>
            <NuxtLink :to="`/notes/${note.documentId}`">
                <button>View Note</button>
            </NuxtLink>
        </li>
    </ul>

    <NuxtLink to="/notes/create">
        <button>Create a New Note</button>
    </NuxtLink>
    <br />
    <br />
    <NuxtLink to="/">Back to Home</NuxtLink> 
</template>