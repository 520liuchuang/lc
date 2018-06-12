//导入工具包require('nide_modules里对应模块')
var gulp = require("gulp");					//本地安装gulp所用到的地方 gulp命令
var	sass = require("gulp-sass"); 			//sass命令
var connect = require("gulp-connect");		//服务命令
var concat = require("gulp-concat");		//合并
var uglify = require("gulp-uglify");		//合并并压缩
var htmlmin = require('gulp-htmlmin');		//压缩html
var minifyCSS = require("gulp-clean-css");	//压缩css文件
var imagemin = require("gulp-imagemin");    //压缩图片


gulp.task("sass",function(){
	 return gulp.src("src/style/*.scss")
	 .pipe(sass())
	 .pipe(minifyCSS())
	 .pipe(gulp.dest("./dist/css/"));
});


//拷贝并压缩js
gulp.task("uglify",function(){
	 return gulp.src("src/js/*.js")	
	// .pipe(uglify())        //压缩文件
	// .pipe(concat("main.js"))//合并所有js文件
	.pipe(gulp.dest("./dist/js/"));
});

// 拷贝html
gulp.task("htmlmin",function(){
	 return gulp.src("src/*.html")
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest("./dist/"));
});

//拷贝img
gulp.task('imagemin',function(){
    return gulp.src('src/img/**/*')
//  .pipe(miImg())
    .pipe(gulp.dest("./dist/img/"));
});

//创建默认任务
gulp.task('fresh',['sass','uglify','htmlmin','imagemin'],function(){
	return gulp.src('./src/*.html').pipe(connect.reload());
});
//监听所有
gulp.task("default",['sass','uglify','htmlmin','imagemin'],function(){
	gulp.watch(["src/style/*.scss","src/js/*js","src/*html","src/js/*js","src/img/**/*"],['fresh']);
	connect.server({
		livereload:true,
		port:'8081'
	});
});




