<script setup>
    const route = useRoute()
    const noteId = route.query.id
    const { data: note } = await useFetch(`http://localhost:1337/api/notes/${noteId}`)
</script>

<template>
    <h1>Notes App</h1>
    <h2>Edit Note</h2>

    <form action="/api/notes/update" method="POST">
        <input type="hidden" name="documentId" :value="noteId" />
        <div>
            <label for="title">Title:</label>
            <input type="text" name="title" id="title" v-model="note.data.title" required />
        </div>
        <div>
            <label for="content">Content:</label>
            <textarea name="content" id="content" v-model="note.data.content" required ></textarea>
        </div>
        <button type="submit">Update Note</button>
    </form>
</template>