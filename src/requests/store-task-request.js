export function storeTaskRequest(req, res) {
    const title = req.body?.title || '';
    const description = req.body?.description || '';

    const errors = {
        title: [],
        description: [],
    };

    if (title.trim() === '' || title.trim().length === 0) {
        errors.title.push('The title needs to be filled in');
    } 

    if (title.length < 3) {
        errors.title.push('The title is too short (min: 2)');
    } 

    if (title.length > 255) {
        errors.title.push('The title is too long (max: 256)');
    } 

    if (description.trim() === '' || description.trim().length === 0) {
        errors.description.push('The description needs to be filled in');
    } 

    if (description.length < 6) {
        errors.description.push('The description is too short (min: 6)');
    }

    const errorsLength = errors.title.length + errors.description.length;
    const messageError = errors.title[0] || errors.description[0] || '';

    if (errorsLength > 0) {
        res
            .writeHead(422)
            .end(JSON.stringify({
                message: messageError,
                count: errorsLength,
                errors,
            }));

        return false;
    }

    return true;
}
