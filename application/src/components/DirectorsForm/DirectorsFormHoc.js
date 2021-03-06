import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo'

import { styles } from './styles';

import { addDirectorMutation, updateDirectorMutation } from './mutations'
import { directorsQuery } from '../DirectorsTable/queries'

const withGraphQl = compose(
    graphql(addDirectorMutation, {
        props: ({ mutate }) => {
            return ({
                addDirector: director => mutate({
                    variables: director,
                    refetchQueries: [{ query: directorsQuery }]
                })
            });
        }
    }),
    graphql(updateDirectorMutation, {
        props: ({ mutate }) => {
            return ({
                updateDirector: director => mutate({
                    variables: director,
                    refetchQueries: [{ query: directorsQuery }]
                })
            });
        }
    })
)

export default compose(withStyles(styles), withGraphQl);
