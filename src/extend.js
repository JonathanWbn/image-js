'use strict';

// filters
import invert from './filter/invert';
import invertMatrix from './filter/invertMatrix';
import invertGetterSetter from './filter/invertGetterSetter';

// transformers
import crop from './transform/crop';
import grey from './transform/grey';

export default function extend(IJ) {
    IJ.extendMethod('invert', invert, true);
    IJ.extendMethod('invertMatrix', invertMatrix, true);
    IJ.extendMethod('invertGetterSetter', invertGetterSetter, true);

    IJ.extendMethod('crop', crop);
    IJ.extendMethod('grey', grey).extendMethod('gray', grey);

}
