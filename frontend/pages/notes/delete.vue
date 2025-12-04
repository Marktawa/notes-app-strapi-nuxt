<script setup>
    const route = useRoute()
    const noteId = route.query.id
    const { data: note } = await useFetch(`http://localhost:1337/api/notes/${noteId}`)
</script>

<template>
    <h1>Notes App</h1>
    <h2>Delete Note</h2>

    <h3>{{ note.data.title }}</h3>
    <p>{{  note.data.content }}</p>

    <p>Are you sure you want to delete this note?</p>
    <form action="/api/notes/delete" method="POST">
        <input type="hidden" name="documentId" :value="noteId" />
        <button type="submit">Yes</button>
    </form>

    <NuxtLink :to="`/notes/${noteId}`">
        <button>No</button>
    </NuxtLink>
</template>