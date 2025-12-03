<script setup>
    const route = useRoute()
    const isSuccess = route.query.success === '1'
    const noteId = route.query.id
</script>

<template>
    <h1>Notes App</h1>

     <!-- Success State -->
     <div v-if="isSuccess">
        <h2>Note Created Successfully!</h2>
        <p>Your note has been saved to the database</p>

        <!-- Link to the individual note using the ID from the query param -->
        <NuxtLink :to="`/notes/${noteId}`">
            <button>View Created Note</button>
        </NuxtLink>

        <NuxtLink to="/notes">Back to Notes List</NuxtLink>
     </div>

     <!-- FAILURE STATE -->
     <div v-else>
        <h2>Note Creation Failed</h2>
        <p>There was an error creating your note. Please try again</p>

        <NuxtLink to="/notes/create">
            <button>Try Again</button>
        </NuxtLink>

        <NuxtLink to="/notes">Back to Notes List</NuxtLink>
     </div>
</template>