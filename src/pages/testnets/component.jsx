import * as React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { fetchTestNets } from './apiService';
import { TestNetsList } from './TestNetsList';

const TestNets = () => {
    // Queries
    const fetchTestNetsState = useQuery('todos', fetchTestNets);

    return (
        <main>
            {fetchTestNetsState.isLoading ? (
                <div>Loading...</div>
            ) : null}

            {fetchTestNetsState.isError ? (
                <div>Oops.. Something went wrong.. Try again..</div>
            ) : null}

            {fetchTestNetsState.isSuccess ? (
                <TestNetsList data={fetchTestNetsState.data} />
            ): null}
        </main>
    );
}

export default TestNets;