var gulp = require('gulp');
var SeedMemeReview = require('./tasks/SeedMemeReview')

gulp.task('seed', (done) => {
  Seed.dumpEpisodes();
});
