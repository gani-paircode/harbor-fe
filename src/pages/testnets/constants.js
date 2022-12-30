// Todo - every thing must be freezed --- Object.freeze
export const SortCriteria = {
    'nameAsc': 'nameAsc',
    'nameDesc': 'nameDesc',
    'status': 'status',
    'dateAsc': 'dateAsc',
    'lastModified': 'lastModified',
}
export const SortByOptions = [
    {
        key: SortCriteria.nameAsc,
        display: 'Name A-Z'
    },
    {
        key: SortCriteria.nameDesc,
        display: 'Name Z-A'
    },
    {
        key: SortCriteria.status,
        display: 'Status'
    },
    {
        key: SortCriteria.dateAsc,
        display: 'Date Created'
    },
    {
        key: SortCriteria.lastModified,
        display: 'Last Modified'
    }
];

export const FiterCriteria = {
    ALL: 'ALL',    
    RUNNING: 'RUNNING',
    STANDINGUP: 'STANDINGUP',
    UPDATING: 'UPDATING',
    FAILED: 'FAILED',
    KILLED: 'KILLED',
};

export const FilterOptions = [
    {
        key: FiterCriteria.ALL,
        display: 'All',
    },
    {
        key: FiterCriteria.RUNNING,
        display: 'Running',
    },{
        key: FiterCriteria.STANDINGUP,
        display: 'Standing Up',
    },{
        key: FiterCriteria.UPDATING,
        display: 'Updating',
    },{
        key: FiterCriteria.FAILED,
        display: 'Failed',
    },{
        key: FiterCriteria.KILLED,
        display: 'Killed',
    },
];
