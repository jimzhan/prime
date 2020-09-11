const gulp = require('gulp');
const chalk = require('chalk');
const uid = require('uid-safe')

gulp.task('secret', async () => {
  console.log(`${chalk.white.bgRed('SECRET')} ${uid.sync(60)}`)
})
