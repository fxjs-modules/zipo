const test = require('test')
test.setup()

const fs = require('fs')
const path = require('path')
const readr = require('@fibjs/fs-readdir-recursive')

const loaders = require('../lib/loaders')

describe('loaders', () => {
    function test_zip (zip_file, file_list_r) {
        const zip = require('zip')
        const zi = zip.open(zip_file)

        assert.deepEqual(zi.namelist(), file_list_r)
    }
    
    it('directoryAsZip', () => {
        ;[
            [
                'testcase1'
            ],
            [
                'testcase2'
            ],
        ].forEach(([test_dir]) => {
            const dir = path.resolve(__dirname, `./loaders/${test_dir}`)
            const dist = path.join(__dirname, `./loaders/${test_dir}.zip`)
            loaders.directoryAsZip(dir, { dist })

            assert.isTrue(fs.exists(dist))
            assert.isTrue(fs.stat(dist).isFile())

            test_zip(dist, readr(dir))

            try {
                fs.unlink(dist)
            } catch (e) {
                console.log(`remove file ${dist} failure`)
            }
        })
        
    })
})

if (require.main === module) {
    test.run(console.DEBUG)
    process.exit()
}
