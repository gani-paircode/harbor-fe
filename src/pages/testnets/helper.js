import { FiterCriteria, SortCriteria } from "./constants";

export const getSortedTests = ({ sortBy, filterBy, data }) => {
    let response;
    switch (filterBy) {
        case FiterCriteria.ALL:
            response = [...data];
            break;
        default:
            response = data.filter(item => item.status === filterBy);
            break;
    }

    /* sort the records */

    switch (sortBy) {
        case SortCriteria.nameAsc:
            response.sort((a, b) => a.name.localeCompare(b.name));
            break;

        case SortCriteria.nameDesc:
            response.sort((a, b) => b.name.localeCompare(a.name));
            break;

        case SortCriteria.statusAsc:
            response.sort((a, b) => a.status.localeCompare(b.status));
            break;

        case SortCriteria.statusDesc:
            response.sort((a, b) => b.status.localeCompare(a.status));
            break;

        case SortCriteria.date:
            response.sort((a, b) => a.created_at.localeCompare(b.created_at));
            break;
        
        case SortCriteria.lastModified:
            response.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
            break;
        default:
            break;
    }
    return response;
}