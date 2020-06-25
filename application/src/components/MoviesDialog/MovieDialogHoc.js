import { compose } from 'recompose';
import { graphql } from 'react-apollo'

import { deleteMovieMutation } from './mutation'
import { moviesQuery } from '../MoviesTable/queries'

const withGraphQLDelete = graphql(deleteMovieMutation, {
    props: ({ mutate }) => {
        return ({
            deleteMovie: id => mutate({
                variables: id,
                refetchQueries: [{ 
                    query: moviesQuery,
                    variables: { name: '' }
                }]
            })
        });
    }
})

export default compose(withGraphQLDelete);