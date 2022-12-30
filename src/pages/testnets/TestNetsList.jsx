import * as React from 'react';
import TestNetCard from '../../components/TestNetCard';
import { SortCriteria, SortByOptions, FiterCriteria, FilterOptions } from './constants';
import { getSortedTests } from './helper';
import './testnets.css';

const DefaultSortOption = SortCriteria.statusAsc;
const DefaultFilterOption = FiterCriteria.ALL;

export const TestNetsList = (props) => {
    const [sortBy, setSortBy] = React.useState(DefaultSortOption);
    const [filterBy, setFilterBy] = React.useState(DefaultFilterOption);

    const { testnet } = props.data;
    const handleSortBy = (event) => {
        setSortBy(event.target.value);
    };

    const handleFilterBy = (event) => {
        setFilterBy(event.target.value);
    }

    const displayRecords = React.useMemo(() => {
        /* by default we are not getting sorted data by status */
        return getSortedTests({
            data: testnet,
            sortBy, filterBy
        });
    }, [sortBy, filterBy, testnet]);

    return (<div id="testnets">
        <div className='title'>Testnets ({displayRecords.length})</div>
        <select value={sortBy} onChange={handleSortBy}>
            {
                SortByOptions.map(item => <option key={item.key} value={item.key}>
                    {item.display}
                </option>)
            }
        </select>

        <select value={filterBy} onChange={handleFilterBy}>
            {
                FilterOptions.map(item => (<option key={item.key} value={item.key}>
                    {item.display}
                </option>))
            }
        </select>
        {
            displayRecords.map(item => <TestNetCard key={item.id} data={item} />)
        }
    </div>);
}