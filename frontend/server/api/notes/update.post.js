export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { documentId, title, content } = body

    const strapiResponse = await $fetch(`http://localhost:1337/api/notes/${documentId}`, {
        method: 'PUT',
        body: {
            data: {
                title: title,
                content: content,
            }
        }
    })

    return sendRedirect(event, `/notes/edited?id=${documentId}`)
})