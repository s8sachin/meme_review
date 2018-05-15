var gulp = require('gulp');
var Seed = require('./tasks/Seed')

gulp.task('seed', (done) => {
  Seed.dumpEpisodes();
});
