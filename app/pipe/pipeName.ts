import {Pipe} from 'angular2/core';
@Pipe({
    name: 'PipeName'
})
export class PipeName {

    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item.beds.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
    }
}