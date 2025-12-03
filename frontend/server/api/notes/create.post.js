export default defineEventHandler(async (event) => {
    // Read form data sent from the browser
    const body = await readBody(event)

    try {
        //Send data to Strapi
        const strapiResponse = await $fetch('http://localhost:1337/api/notes', {
            method: 'POST',
            body: {
                data: {
                    title: body.title,
                    content: body.content
                }
            }
        })

        //Handle Success
        if (strapiResponse.data) {
            const noteId = strapiResponse.data.documentId
            return sendRedirect(event, `/notes/created?success=1&id=${noteId}`)
        }

        // Fallback if no data returned
        return sendRedirect(event, '/notes/created?success=0')
    
    } catch (error) {
        // Handle Error
        console.error('Failed to create a note:', error)
        return sendRedirect(event, '/notes/created?success=0')
    }
})