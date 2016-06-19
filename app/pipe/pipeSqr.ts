import {Pipe} from 'angular2/core';
@Pipe({
    name: 'PipeSqr'
})
export class PipeSqr {

    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item.kvadratura.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);

    }


}