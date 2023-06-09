'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option('str13', { type: String });
        this.option('bool3', { type: Boolean });
    }

    initializing() {
        this.log('*** SUB-GEN2 ***');

        this.options = this.options.parentOptions;

        this.log(`str1 => ${this.options['str1']}`);
        this.log(`str2 => ${this.options['str2']}`);
        this.log(`str3 => ${this.options['str3']}`);

        this.log(`bool1 => ${this.options['bool1']}`);
        this.log(`bool2 => ${this.options['bool2']}`);
        this.log(`bool3 => ${this.options['bool3']}`);
    }
};
