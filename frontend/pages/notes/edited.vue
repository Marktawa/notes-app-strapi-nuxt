<script setup>
    const route = useRoute()
    const noteId = route.query.id
</script>

<template>
    <h1>Notes App</h1>
    <h2>Note edited successfully</h2>
    <p>Your note has been updated.</p>

    <NuxtLink :to="`/notes/${noteId}`">
        <button>View Edited Note</button>
    </NuxtLink>
    <br>
    <NuxtLink to="/notes">Back to All Notes</NuxtLink>
</template>
