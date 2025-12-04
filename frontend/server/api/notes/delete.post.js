export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { documentId } = body

    await $fetch(`http://localhost:1337/api/notes/${documentId}`, {
        method: 'DELETE'
    })

    return sendRedirect(event, '/notes/deleted')
})