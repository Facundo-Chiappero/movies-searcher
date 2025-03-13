export async function apiCall({query, url}) {
    const listOfErrors = {
        noErrors: '',
        invalidName: 'movie not found',
        tooShort: 'put at least 3 letters',
        fetch: 'An error occurred while fetching data.',
    };

    if (query.length < 3) {
        return { newError: listOfErrors.tooShort };
    }

    const urlToFetch = `${url}${query}`;

    try {
        const response = await fetch(urlToFetch);
        const json = await response.json();
        const data = json.Search;

        if (!data) {
            return { newError: listOfErrors.invalidName };
        }

        return { newError: listOfErrors.noErrors, newMovies: data };
    // eslint-disable-next-line no-unused-vars
    } catch(e) {
        return { newError: listOfErrors.fetch };
    }
}
