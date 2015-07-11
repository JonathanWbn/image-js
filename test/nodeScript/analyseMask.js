'use strict';

var IJ = require('../..');

var data=new Uint8Array(2);
data[0]=63;
data[1]=192;

var img=new IJ(4,4, data, {
    kind: 'BINARY'
});


var maskInfo=img.analyseMask();

var rois=img.createROIs(maskInfo);

console.log(rois);
