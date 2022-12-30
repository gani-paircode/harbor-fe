// Todo - every thing must be freezed --- Object.freeze
export const SortCriteria = {
    'nameAsc': 'nameAsc',
    'nameDesc': 'nameDesc',
    'statusAsc': 'statusAsc',
    'statusDesc': 'statusDesc',
    'date': 'date',
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
        key: SortCriteria.statusAsc,
        display: 'Status A-Z'
    },
    {
        key: SortCriteria.statusDesc,
        display: 'Status Z-A'
    },
    {
        key: SortCriteria.date,
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
    STOPPED: 'STOPPED',
};

export const FilterOptions = [
    {
        key: FiterCriteria.ALL,
        display: 'All',
    },
    {
        key: FiterCriteria.RUNNING,
        display: 'Running',
    },
    {
        key: FiterCriteria.STOPPED,
        display: 'Stopped',
    },
    {
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
