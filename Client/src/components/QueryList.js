import {GQL} from 'apollo-boost';
import { Component } from 'react';
import {graphql} from 'react-apollo';

const getQuery = gql`
{
    savings {
        name
        amount
    }
}`


class QueryList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <ul id="query-list">
                    <li> Query Name</li>
                </ul>
            </div>
        )
    }
}


export default graphql(getQuery)(QueryList);