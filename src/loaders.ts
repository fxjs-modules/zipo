import io = require('io')
import fs = require('fs')
import zip = require('zip')
import path = require('path')

import readr = require('@fibjs/fs-readdir-recursive')

function getMemoryZip () {
    const ms = new io.MemoryStream();
    const zf = zip.open(ms, 'w');

    function collectToMemory () {
        zf.close();
        ms.rewind();
    }
    return { zf, ms, collectToMemory }
}

export function directoryAsZip (_dir: string, options?: any): void {
    const {
        distname = 'result.zip',
        dist = path.resolve(_dir, distname)
    } = options || {}

    const fileList = readr(_dir)
    if (!fileList.length) return

    const mzip = getMemoryZip()

    fileList.forEach(filepath => {
        const f_path = path.resolve(_dir, filepath)
        mzip.zf.write(new Buffer(fs.openFile(f_path).readAll()), filepath);
    })
    mzip.collectToMemory()

    fs.writeFile(dist, mzip.ms.readAll())
}