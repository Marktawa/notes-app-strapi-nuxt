<template>
    <h1>Notes App</h1>
    <h2>Create a New Note</h2>

    <form action="/api/notes/create" method="POST">
        <div>
            <label for="title">Title:</label>
            <input type="text" name="title" id="title" required />
        </div>
        <div>
            <label for="content">Content:</label>
            <textarea name="content" id="content" required></textarea>
        </div>

        <button type="submit">Create Note</button>
    </form>
</template>